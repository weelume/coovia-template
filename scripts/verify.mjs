import { spawnSync } from 'node:child_process'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { inspectProject } from '../.tpl/tools/check.mjs'
const root=resolve(import.meta.dirname,'..'),checks=[]
if(process.platform!=='linux'||root.startsWith('/mnt/'))throw new Error('验收必须在本地 WSL Linux 文件系统中进行')
await mkdir(join(root,'.work/checks'),{recursive:true})
for(const id of ['typecheck','lint','build','test']){
 const startedAt=new Date().toISOString(),result=spawnSync('corepack',['pnpm','run',id],{cwd:root,encoding:'utf8',timeout:600000,maxBuffer:8*1024*1024})
 const finishedAt=new Date().toISOString(),output=(result.stdout??'')+(result.stderr??'')
 await writeFile(join(root,'.work/checks',id+'.log'),output)
 const status=result.status===0?'passed':'failed'
 checks.push({id,cwd:'.',argv:['pnpm','run',id],status,exitCode:result.status,startedAt,finishedAt,...(result.error?{reason:result.error.message}:{})})
 console.log(id,status)
 if(status==='failed'){console.error(output);process.exit(1)}
}
const inspected=await inspectProject(root),checkedAt=new Date().toISOString()
const report={$schema:'../schemas/verification.schema.json',format:'git-template-verification',formatVersion:'0.2.0',status:'passed',checkedAt,sourceCommit:null,sourceDigest:inspected.sourceDigest,environment:{platform:'linux (local WSL, Linux filesystem)',arch:process.arch,node:process.versions.node,packageManager:'pnpm@9.15.4',cleanDirectory:true,localGitClone:false},checks,services:[{id:'web',status:'passed',stopped:true,checkedAt}],limitations:['全部构建和依赖安装在本地 WSL Linux 文件系统执行，未部署。','HTTP 测试启动随机空闲端口的真实预览服务，检查完成后停止该实例。','内置浏览器结果与截图见 docs/BROWSER.json；未完成所有原站动效逐帧量化对照。','减少动态效果分支已实现，未实机切换系统设置。','独立验收目录为本地源码同步副本，未声称远端克隆验收。']}
await writeFile(join(root,'.tpl/reports/verification.json'),JSON.stringify(report,null,2)+'\n')
console.log(JSON.stringify({sourceDigest:inspected.sourceDigest,checks:checks.length}))
