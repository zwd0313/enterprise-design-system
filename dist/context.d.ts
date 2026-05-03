import { type ThemeTokens } from './tokens';
export interface DesignSystemContextValue {
    tokens: ThemeTokens;
    isDark: boolean;
    toggleTheme: () => void;
}
export declare const DesignSystemContext: import("react").Context<DesignSystemContextValue>;
export declare function useT(): ThemeTokens;
export declare function useIsDark(): boolean;
export declare function useToggleTheme(): () => void;
//# sourceMappingURL=context.d.ts.map