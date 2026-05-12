import React, { type CSSProperties, type ReactNode } from 'react';
import { darkTokens, lightTokens } from './tokens';
export { darkTokens, lightTokens };
export type { DarkTokens, LightTokens, ThemeTokens } from './tokens';
export { Button, type ButtonVariant, type ButtonSize, type ButtonProps } from './Button';
export { DesignSystemContext, useT, useIsDark, useToggleTheme } from './context';
export declare function DesignSystemProvider({ children, initialDark }: {
    children: ReactNode;
    initialDark?: boolean;
}): React.JSX.Element;
export declare const T: {
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
export type IconName = 'dashboard' | 'check' | 'bell' | 'folder' | 'user' | 'logout' | 'search' | 'chart' | 'pie' | 'team' | 'plus' | 'close' | 'project' | 'settings' | 'sun' | 'moon' | 'arrowR' | 'edit' | 'inbox' | 'exclamationCircle' | 'arrowRight' | 'task' | 'clock' | 'calendar' | 'chevronDown' | 'list' | 'kanban';
export declare function Icon({ name, size, color, style }: {
    name: IconName;
    size?: number;
    color?: string;
    style?: CSSProperties;
}): React.JSX.Element;
export declare function PageHeader({ kicker, title, subtitle, action }: {
    kicker?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    action?: ReactNode;
}): React.JSX.Element;
export declare function Card({ children, style }: {
    children: ReactNode;
    style?: CSSProperties;
}): React.JSX.Element;
export declare function SectionLabel({ children }: {
    children: ReactNode;
}): React.JSX.Element;
export declare function StatCard({ label, value, tag, color, onClick }: {
    label: string;
    value: ReactNode;
    tag?: ReactNode;
    color?: string;
    onClick?: () => void;
}): React.JSX.Element;
export declare function Badge({ label, styles }: {
    label: string;
    styles: Record<string, {
        bg: string;
        color: string;
        border: string;
    }>;
}): React.JSX.Element;
export declare const statusStyles: Record<string, {
    bg: string;
    color: string;
    border: string;
}>;
export declare const priorityStyles: Record<string, {
    bg: string;
    color: string;
    border: string;
}>;
export declare function GroupHeader({ title, subtitle }: {
    title: ReactNode;
    subtitle?: ReactNode;
}): React.JSX.Element;
export declare function SearchInput({ value, onChange, placeholder, width, shortcut, fullWidth, }: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    width?: number | string;
    shortcut?: ReactNode;
    fullWidth?: boolean;
}): React.JSX.Element;
export declare function LoadingSkeleton({ count, columns, height, gap, borderRadius, }: {
    count?: number;
    columns?: number;
    height?: number;
    gap?: number;
    borderRadius?: number;
}): React.JSX.Element;
export declare function EmptyState({ icon, title, description, action, compact, }: {
    icon?: IconName;
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
    compact?: boolean;
}): React.JSX.Element;
export declare function MiniLineChart({ data }: {
    data: {
        l: string;
        v: number;
    }[];
}): React.JSX.Element;
export declare function MiniBarChart({ data }: {
    data: {
        l: string;
        v: number;
        c: string;
    }[];
}): React.JSX.Element;
export declare function avatarColor(name: string): string;
export declare function AvatarStack({ names, max }: {
    names: string[];
    max?: number;
}): React.JSX.Element;
export declare const surfaceBg = "rgba(255,255,255,0.03)";
export interface NavItem {
    label: string;
    icon: IconName;
    path: string;
}
export interface NavGroup {
    title: string;
    items: NavItem[];
}
export declare function Sidebar({ navGroups, activePath: externalActivePath }: {
    navGroups: NavGroup[];
    /** 可选的外部 active 判断函数，支持 query-aware 匹配。未提供则使用默认 pathname 匹配 */
    activePath?: (path: string) => boolean;
}): React.JSX.Element;
export declare function TopBar({ isMobile, userName, userInitial, onSearchOpen, onLogout, isDark, onToggleTheme }: {
    isMobile?: boolean;
    userName: string;
    userInitial: string;
    onSearchOpen: () => void;
    onLogout: () => void;
    isDark?: boolean;
    onToggleTheme?: () => void;
}): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map