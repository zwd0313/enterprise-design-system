/* eslint-disable react-refresh/only-export-components */
// ── Button component — per Enterprise Portal Design Standard ──────
// Source: ~/.openclaw/workspace/design-systems/colors_and_type.css
import React, { type CSSProperties, type ReactNode, useState } from 'react'
import { useT } from './context'

export type ButtonVariant = 'primary' | 'ghost' | 'icon' | 'link' | 'danger' | 'success' | 'accent' | 'neutral'
export type ButtonSize = 'default' | 'sm'

export interface ButtonProps {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  style?: CSSProperties
  type?: 'button' | 'submit' | 'reset'
  /** Alias for type (antd compat) */
  htmlType?: 'button' | 'submit' | 'reset'
  title?: string
  className?: string
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  disabled = false,
  onClick,
  style = {},
  type = 'button',
  htmlType,
  title,
  className,
  icon,
}: ButtonProps) {
  const actualType = htmlType || type;
  const T = useT()
  const [hover, setHover] = useState(false)

  // ── Base ──────────────────────────────────────────────
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    fontFeatureSettings: '"cv01", "ss03"',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'background 0.18s ease, border-color 0.18s ease, color 0.18s ease, opacity 0.18s ease',
    opacity: disabled ? 0.4 : 1,
    outline: 'none',
    boxSizing: 'border-box',
  }

  // ── Size ──────────────────────────────────────────────
  if (variant === 'icon') {
    Object.assign(base, {
      width: 32, height: 32, minHeight: 'unset' as const, padding: 0,
      display: 'grid' as const, placeItems: 'center' as const,
      borderRadius: 'var(--ep-radius-sm, 8px)',
      background: hover && !disabled ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.035)',
      border: hover && !disabled ? `1px solid ${T.borderStrong}` : `1px solid ${T.borderSubtle}`,
      color: hover && !disabled ? T.textPrimary : T.textSecondary,
    })
  } else if (size === 'sm') {
    Object.assign(base, {
      padding: '6px 12px',
      fontSize: 12, fontWeight: 500, borderRadius: 6, gap: 4,
    })
  } else {
    Object.assign(base, {
      minHeight: 34, padding: '0 13px',
      fontSize: 13, fontWeight: 590,
      borderRadius: 'var(--ep-radius-xs, 6px)',
    })
  }

  // ── Variant (non-icon, non-sm default) ────────────────
  if (variant !== 'icon' && size !== 'sm') {
    switch (variant) {
      case 'primary':
        Object.assign(base, {
          background: hover && !disabled
            ? 'linear-gradient(180deg, #9494ff, #7170ff)'
            : 'linear-gradient(180deg, #7170ff, #5e6ad2)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff',
        })
        break
      case 'ghost':
        Object.assign(base, {
          background: hover && !disabled ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.035)',
          border: hover && !disabled ? `1px solid ${T.borderStrong}` : `1px solid ${T.borderSubtle}`,
          color: hover && !disabled ? T.textPrimary : T.textSecondary,
        })
        break
      case 'link':
        Object.assign(base, {
          background: 'transparent',
          border: '1px solid transparent',
          color: hover && !disabled ? '#9494ff' : T.accent,
          padding: '0 4px',
        })
        break
      case 'danger':
        Object.assign(base, {
          background: hover && !disabled ? 'rgba(255,92,92,0.2)' : 'rgba(255,92,92,0.12)',
          border: '1px solid rgba(255,92,92,0.3)',
          color: '#ff5c5c',
        })
        break
      default:
        break
    }
  }

  // ── Status variants (sm size only) ────────────────────
  if (size === 'sm') {
    switch (variant) {
      case 'danger':
        Object.assign(base, {
          background: 'rgba(255,92,92,0.15)', border: '1px solid rgba(255,92,92,0.3)', color: '#ff5c5c',
        })
        break
      case 'success':
        Object.assign(base, {
          background: 'rgba(38,181,107,0.15)', border: '1px solid rgba(38,181,107,0.3)', color: '#26b56b',
        })
        break
      case 'accent':
        Object.assign(base, {
          background: 'rgba(94,106,210,0.15)', border: '1px solid rgba(94,106,210,0.3)', color: '#7170ff',
        })
        break
      case 'neutral':
        Object.assign(base, {
          background: 'rgba(255,255,255,0.04)', border: `1px solid ${T.borderSubtle}`, color: T.textSecondary,
        })
        break
      case 'primary':
        Object.assign(base, {
          background: 'linear-gradient(180deg, #7170ff, #5e6ad2)',
          border: '1px solid rgba(255,255,255,0.08)', color: '#fff',
        })
        break
      case 'ghost':
        Object.assign(base, {
          background: 'rgba(255,255,255,0.035)', border: `1px solid ${T.borderSubtle}`, color: T.textSecondary,
        })
        break
      case 'link':
        Object.assign(base, {
          background: 'transparent', border: '1px solid transparent', color: T.accent, padding: '0 4px',
        })
        break
      default:
        break
    }
  }

  return (
    <button
      type={actualType}
      disabled={disabled}
      onClick={onClick}
      title={title}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...style }}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </button>
  )
}
