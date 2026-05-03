import { createContext, useContext } from 'react'
import { darkTokens, type ThemeTokens } from './tokens'

export interface DesignSystemContextValue {
  tokens: ThemeTokens
  isDark: boolean
  toggleTheme: () => void
}

export const DesignSystemContext = createContext<DesignSystemContextValue>({
  tokens: darkTokens,
  isDark: true,
  toggleTheme: () => {},
})

export function useT() {
  const { tokens } = useContext(DesignSystemContext)
  return tokens
}

export function useIsDark() {
  const { isDark } = useContext(DesignSystemContext)
  return isDark
}

export function useToggleTheme() {
  const { toggleTheme } = useContext(DesignSystemContext)
  return toggleTheme
}
