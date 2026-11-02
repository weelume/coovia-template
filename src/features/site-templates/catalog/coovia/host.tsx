'use client'
import { createContext, useContext, type ReactNode } from 'react'
import { brand, type Copy } from './config'
export interface CooviaHostOptions { brandName?: Copy; logo?: string; lightLogo?: string; marketplaceHref?: string; marketplaceLabel?: Copy; marketplaceAriaLabel?: Copy; filing?: ReactNode }
const Host = createContext<CooviaHostOptions>({})
/** 消费方身份只由此边界注入，通用模板不依赖宿主环境。 */
export function CooviaHostProvider({ children, ...options }: CooviaHostOptions & { children: ReactNode }) { return <Host.Provider value={options}>{children}</Host.Provider> }
export function useCooviaHost() { return useContext(Host) }
export function useCooviaBrand() { return useContext(Host).brandName ?? brand.name }
