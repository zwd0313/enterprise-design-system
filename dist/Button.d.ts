import React, { type CSSProperties, type ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'ghost' | 'icon' | 'link' | 'danger' | 'success' | 'accent' | 'neutral';
export type ButtonSize = 'default' | 'sm';
export interface ButtonProps {
    children?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: CSSProperties;
    type?: 'button' | 'submit' | 'reset';
    /** Alias for type (antd compat) */
    htmlType?: 'button' | 'submit' | 'reset';
    title?: string;
    className?: string;
    icon?: ReactNode;
}
export declare function Button({ children, variant, size, disabled, onClick, style, type, htmlType, title, className, icon, }: ButtonProps): React.JSX.Element;
//# sourceMappingURL=Button.d.ts.map