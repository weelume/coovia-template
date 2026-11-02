import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { readdir, readFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import { createServer } from 'node:net'
import { cooviaTemplate } from '../src/features/site-templates/catalog/coovia/meta.ts'
const probe = createServer()
await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve))
const port = probe.address().port
await new Promise(resolve => probe.close(resolve))
const origin = `http://127.0.0.1:${port}`
let child, output = ''
before(async () => {
  child = spawn(process.execPath, ['scripts/next.mjs', 'start'], { env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe'] })
  child.stdout.on('data', bytes => { output += bytes }); child.stderr.on('data', bytes => { output += bytes })
  for (let i=0;i<100;i++) { if(child.exitCode !== null) throw new Error(output); if(output.includes('Ready in')){const response=await fetch(origin);assert.equal(response.status,200);return} await setTimeout(150) }
  throw new Error('服务启动超时\n'+output)
})
after(async () => { if(child && child.exitCode === null){child.kill('SIGTERM');await new Promise(resolve=>child.once('exit',resolve))} })
test('全部双语页面真实 HTTP 响应与模板身份',async()=>{
  for(const locale of ['zh','en'])for(const page of cooviaTemplate.surfaces[0].pages){const path=`${locale==='en'?'/en':''}${page.slug?'/'+page.slug:''}`||'/';const response=await fetch(origin+path);assert.equal(response.status,200,path);const html=await response.text();assert.match(html,/data-template="coovia"/);assert.doesNotMatch(html.replace(/<script[\s\S]*?<\/script>/g,''),/>undefined<|>NaN<|Internal Server Error/)}
})
test('未知页面明确返回 404',async()=>{for(const path of ['/unknown-page','/en/unknown-page'])assert.equal((await fetch(origin+path)).status,404)})
test('全部运行图片与字体通过真实服务加载',async()=>{
  const walk=async prefix=>{const entries=await readdir('public'+prefix,{withFileTypes:true});return(await Promise.all(entries.map(e=>e.isDirectory()?walk(prefix+'/'+e.name):[prefix+'/'+e.name]))).flat()}
  for(const path of await walk('/templates/coovia')){if(!/\.(jpg|png|webp|svg|woff2|css)$/.test(path))continue;const response=await fetch(origin+path);assert.equal(response.status,200,path);assert.ok((await response.arrayBuffer()).byteLength>0,path)}
  const source=await readFile('src/features/site-templates/catalog/coovia/theme.css','utf8');assert.doesNotMatch(source,/https:\/\//)
})
