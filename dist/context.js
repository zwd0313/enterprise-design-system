import { createContext, useContext } from 'react';
import { darkTokens } from './tokens';
export const DesignSystemContext = createContext({
    tokens: darkTokens,
    isDark: true,
    toggleTheme: () => { },
});
export function useT() {
    const { tokens } = useContext(DesignSystemContext);
    return tokens;
}
export function useIsDark() {
    const { isDark } = useContext(DesignSystemContext);
    return isDark;
}
export function useToggleTheme() {
    const { toggleTheme } = useContext(DesignSystemContext);
    return toggleTheme;
}
//# sourceMappingURL=context.js.map