import React, { type CSSProperties, type ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'ghost' | 'icon' | 'danger' | 'success' | 'accent' | 'neutral';
export type ButtonSize = 'default' | 'sm';
export interface ButtonProps {
    children?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: CSSProperties;
    type?: 'button' | 'submit' | 'reset';
    title?: string;
    className?: string;
}
export declare function Button({ children, variant, size, disabled, onClick, style, type, title, className, }: ButtonProps): React.JSX.Element;
//# sourceMappingURL=Button.d.ts.map