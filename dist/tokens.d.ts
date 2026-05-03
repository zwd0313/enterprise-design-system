export declare const darkTokens: {
    readonly isDark: true;
    readonly bgBase: "#08090a";
    readonly bgShell: "#0b0c0f";
    readonly bgSurface: "#101114";
    readonly bgElevated: "#17181d";
    readonly bgHover: "#1c1d23";
    readonly textPrimary: "#f7f8f8";
    readonly textSecondary: "#9ba1ad";
    readonly textTertiary: "#69707d";
    readonly accent: "#5e6ad2";
    readonly accentHover: "#7170ff";
    readonly success: "#26b56b";
    readonly warning: "#f2b84b";
    readonly danger: "#ff5c5c";
    readonly info: "#60a5fa";
    readonly borderSubtle: "rgba(255,255,255,0.055)";
    readonly borderStrong: "rgba(255,255,255,0.10)";
    readonly sidebarBg: "rgba(12,13,16,0.92)";
    readonly topbarBg: "rgba(8,9,10,0.78)";
    readonly cardBg: "linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.024))";
    readonly pageBg: "radial-gradient(circle at 18% 0%, rgba(94,106,210,0.12), transparent 28rem),\n              radial-gradient(circle at 85% 12%, rgba(113,112,255,0.07), transparent 28rem), #08090a";
};
export declare const lightTokens: {
    readonly isDark: false;
    readonly bgBase: "#f7f8f8";
    readonly bgShell: "#f0f1f4";
    readonly bgSurface: "#ffffff";
    readonly bgElevated: "#f4f5f7";
    readonly bgHover: "#ecedf0";
    readonly textPrimary: "#0f1011";
    readonly textSecondary: "#4a5060";
    readonly textTertiary: "#8a8f98";
    readonly accent: "#5e6ad2";
    readonly accentHover: "#4f5bbf";
    readonly success: "#1e9e56";
    readonly warning: "#c98b00";
    readonly danger: "#e03030";
    readonly info: "#3b82f6";
    readonly borderSubtle: "rgba(0,0,0,0.07)";
    readonly borderStrong: "rgba(0,0,0,0.12)";
    readonly sidebarBg: "rgba(240,241,244,0.96)";
    readonly topbarBg: "rgba(247,248,248,0.88)";
    readonly cardBg: "#ffffff";
    readonly pageBg: "radial-gradient(circle at 18% 0%, rgba(94,106,210,0.05), transparent 28rem),\n              radial-gradient(circle at 85% 12%, rgba(113,112,255,0.04), transparent 28rem), #f7f8f8";
};
export type DarkTokens = typeof darkTokens;
export type LightTokens = typeof lightTokens;
export type ThemeTokens = DarkTokens | LightTokens;
export declare const getTokens: (isDark: boolean) => ThemeTokens;
export declare const enterprisePortalTokens: {
    readonly color: {
        readonly bgBase: "#08090a";
        readonly bgShell: "#0b0c0f";
        readonly bgSurface: "#101114";
        readonly bgElevated: "#17181d";
        readonly bgHover: "#1c1d23";
        readonly textPrimary: "#f7f8f8";
        readonly textSecondary: "#9ba1ad";
        readonly textTertiary: "#69707d";
        readonly accent: "#5e6ad2";
        readonly accentHover: "#7170ff";
        readonly success: "#26b56b";
        readonly warning: "#f2b84b";
        readonly danger: "#ff5c5c";
        readonly info: "#60a5fa";
        readonly borderSubtle: "rgba(255,255,255,0.055)";
        readonly borderStrong: "rgba(255,255,255,0.10)";
    };
    readonly radius: {
        readonly xs: 6;
        readonly sm: 8;
        readonly md: 12;
        readonly lg: 16;
        readonly pill: 9999;
    };
    readonly space: {
        readonly 1: 4;
        readonly 2: 8;
        readonly 3: 12;
        readonly 4: 16;
        readonly 5: 20;
        readonly 6: 24;
        readonly 8: 32;
    };
    readonly font: {
        readonly family: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
        readonly mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace";
        readonly weights: {
            readonly body: 400;
            readonly emphasis: 510;
            readonly heading: 590;
        };
    };
};
export type EnterprisePortalTokens = typeof enterprisePortalTokens;
//# sourceMappingURL=tokens.d.ts.map