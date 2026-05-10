/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect, useMemo, useCallback, useContext, type CSSProperties, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

// ── Tokens ────────────────────────────────────────────────────────
import { darkTokens, lightTokens, type ThemeTokens } from './tokens'

export { darkTokens, lightTokens }
export type { DarkTokens, LightTokens, ThemeTokens } from './tokens'

// ── Button ─────────────────────────────────────────────────────────
export { Button, type ButtonVariant, type ButtonSize, type ButtonProps } from './Button'

// ── Context & hooks (shared with Button) ───────────────────────────
export { DesignSystemContext, useT, useIsDark, useToggleTheme }
  from './context'
import { DesignSystemContext, useT, useIsDark, useToggleTheme } from './context'

// ── DesignSystemProvider ──────────────────────────────────────────
export function DesignSystemProvider({ children, initialDark = true }: { children: ReactNode; initialDark?: boolean }) {
  const [isDark, setIsDark] = useState(initialDark)
  
  // 同步外部 theme 变更（ThemeProvider 切换时更新内部状态）
  useEffect(() => {
    setIsDark(initialDark)
  }, [initialDark])
  
  const toggleTheme = useCallback(() => setIsDark(d => !d), [])
  const tokens = useMemo(() => isDark ? darkTokens : lightTokens, [isDark])
  return (
    <DesignSystemContext.Provider value={{ tokens, isDark, toggleTheme }}>
      {children}
    </DesignSystemContext.Provider>
  )
}

// ── Static dark tokens (backward compat) ──────────────────────────
export const T = darkTokens

// ── Icon ─────────────────────────────────────────────────────────
export type IconName =
  | 'dashboard' | 'check' | 'bell' | 'folder' | 'user' | 'logout'
  | 'search' | 'chart' | 'pie' | 'team' | 'plus' | 'close' | 'project'
  | 'settings' | 'sun' | 'moon' | 'arrowR' | 'edit' | 'inbox'
  | 'exclamationCircle' | 'arrowRight' | 'task' | 'clock' | 'calendar' | 'chevronDown'

const iconPaths: Record<IconName, ReactNode> = {
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  check:   <><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
  bell:    <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
  folder:  <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>,
  user:    <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  logout:  <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
  search:  <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
  chart:   <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
  pie:     <><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></>,
  team:    <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  plus:    <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
  close:   <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
  project: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  sun:     <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
  moon:    <><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></>,
  arrowR:  <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
  edit:    <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
  inbox:   <><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></>,
  exclamationCircle: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
  arrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
  task: <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
  chevronDown: <><polyline points="6 9 12 15 18 9"/></>,
}

export function Icon({ name, size = 14, color = 'currentColor', style = {} }: {
  name: IconName; size?: number; color?: string; style?: CSSProperties
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'inline-block', flexShrink: 0, ...style }}>
      {iconPaths[name]}
    </svg>
  )
}

// ── Shared page components ────────────────────────────────────────

export function PageHeader({ kicker, title, subtitle, action }: {
  kicker?: string; title: ReactNode; subtitle?: ReactNode; action?: ReactNode
}) {
  const T = useT()
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24, gap: 16 }}>
      <div>
        {kicker && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: T.accent, marginBottom: 8 }}>{kicker}</div>}
        <h1 style={{ fontSize: 26, fontWeight: 590, letterSpacing: '-0.03em', lineHeight: 1.1, color: T.textPrimary, margin: 0 }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 14, color: T.textSecondary, marginTop: 6, lineHeight: 1.6 }}>{subtitle}</p>}
      </div>
      {action && <div style={{ flexShrink: 0 }}>{action}</div>}
    </div>
  )
}

export function Card({ children, style = {} }: { children: ReactNode; style?: CSSProperties }) {
  const T = useT()
  return (
    <div style={{ background: T.bgSurface, border: `1px solid ${T.borderSubtle}`, borderRadius: 14, padding: '18px 20px', transition: 'background 0.3s, border-color 0.3s', ...style }}>
      {children}
    </div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  const T = useT()
  return <div style={{ fontSize: 11.5, fontWeight: 600, color: T.textTertiary, marginBottom: 12, letterSpacing: '-0.01em' }}>{children}</div>
}

export function StatCard({ label, value, tag, color, onClick }: {
  label: string; value: ReactNode; tag?: ReactNode; color?: string; onClick?: () => void
}) {
  const T = useT()
  const isClickable = !!onClick
  const [isHovered, setIsHovered] = useState(false)
  const [isActivated, setIsActivated] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => isClickable && setIsHovered(true)}
      onMouseLeave={() => isClickable && setIsHovered(false)}
      onMouseDown={() => isClickable && setIsActivated(true)}
      onMouseUp={() => isClickable && setIsActivated(false)}
      onTouchStart={() => isClickable && setIsActivated(true)}
      onTouchEnd={() => isClickable && setIsActivated(false)}
      style={{
        padding: '15px 17px',
        background: isClickable && (isHovered || isActivated) ? T.bgHover : T.bgElevated,
        border: `1px solid ${T.borderSubtle}`,
        borderRadius: 12,
        cursor: isClickable ? 'pointer' : 'default',
        transition: 'all 0.15s',
        transform: isActivated ? 'translateY(1px)' : isHovered ? 'translateY(-2px)' : 'none',
        boxShadow: isActivated ? '0 2px 6px rgba(0,0,0,0.1)' : isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 500, color: T.textTertiary, marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 400, letterSpacing: '-0.6px', color: color || T.textPrimary, lineHeight: 1 }}>{value}</div>
      {tag && <div style={{ fontSize: 10.5, color: T.textTertiary, marginTop: 4 }}>{tag}</div>}
    </div>
  )
}

export function Badge({ label, styles }: { label: string; styles: Record<string, { bg: string; color: string; border: string }> }) {
  const T = useT()
  const s = styles[label] || { bg: 'rgba(255,255,255,0.06)', color: T.textSecondary, border: T.borderSubtle }
  return <span style={{ padding: '2px 8px', borderRadius: 5, fontSize: 11, fontWeight: 500, background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>{label}</span>
}

export const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
  待处理: { bg: 'rgba(242,184,75,0.14)', color: '#f2b84b', border: 'rgba(242,184,75,0.3)' },
  待审批: { bg: 'rgba(242,184,75,0.14)', color: '#f2b84b', border: 'rgba(242,184,75,0.3)' },
  进行中: { bg: 'rgba(39,166,68,0.14)', color: '#27a644', border: 'rgba(39,166,68,0.3)' },
  已完成: { bg: 'rgba(94,106,210,0.14)', color: '#5e6ad2', border: 'rgba(94,106,210,0.3)' },
  已通过: { bg: 'rgba(94,106,210,0.14)', color: '#5e6ad2', border: 'rgba(94,106,210,0.3)' },
  已逾期: { bg: 'rgba(255,59,48,0.14)', color: '#ff3b30', border: 'rgba(255,59,48,0.3)' },
  已拒绝: { bg: 'rgba(255,59,48,0.14)', color: '#ff3b30', border: 'rgba(255,59,48,0.3)' },
  已驳回: { bg: 'rgba(255,59,48,0.14)', color: '#ff3b30', border: 'rgba(255,59,48,0.3)' },
  已关闭: { bg: 'rgba(155,155,155,0.14)', color: '#999', border: 'rgba(155,155,155,0.3)' },
}

export const priorityStyles: Record<string, { bg: string; color: string; border: string }> = {
  高: { bg: 'rgba(255,59,48,0.14)', color: '#ff3b30', border: 'rgba(255,59,48,0.3)' },
  中: { bg: 'rgba(255,189,39,0.14)', color: '#ffbd27', border: 'rgba(255,189,39,0.3)' },
  低: { bg: 'rgba(46,204,113,0.14)', color: '#2ecc71', border: 'rgba(46,204,113,0.3)' },
}

export function GroupHeader({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  const T = useT()
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: T.textPrimary, letterSpacing: '-0.02em' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 4 }}>{subtitle}</div>}
      </div>
    </div>
  )
}

export function SearchInput({
  value,
  onChange,
  placeholder,
  width = 220,
  shortcut,
  fullWidth = false,
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  width?: number | string
  shortcut?: ReactNode
  fullWidth?: boolean
}) {
  const T = useT()
  return (
    <div style={{ position: 'relative', width: fullWidth ? '100%' : width, minWidth: fullWidth ? undefined : typeof width === 'number' ? width : undefined }}>
      <Icon name="search" size={13} color={T.textTertiary} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: `8px ${shortcut ? 66 : 12}px 8px 32px`,
          borderRadius: 9,
          fontSize: 13,
          background: T.bgElevated,
          border: `1px solid ${T.borderSubtle}`,
          color: T.textPrimary,
          outline: 'none',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
      {shortcut && (
        <div style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }}>
          {shortcut}
        </div>
      )}
    </div>
  )
}

export function LoadingSkeleton({
  count = 1,
  columns = 1,
  height = 72,
  gap = 10,
  borderRadius = 12,
}: {
  count?: number
  columns?: number
  height?: number
  gap?: number
  borderRadius?: number
}) {
  const T = useT()
  return (
    <>
      <style>{'@keyframes portalShimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}'}</style>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap }}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            style={{
              height,
              borderRadius,
              border: `1px solid ${T.borderSubtle}`,
              background: `linear-gradient(90deg, ${T.bgElevated} 0%, rgba(255,255,255,0.08) 50%, ${T.bgElevated} 100%)`,
              backgroundSize: '200% 100%',
              animation: 'portalShimmer 1.4s ease-in-out infinite',
            }}
          />
        ))}
      </div>
    </>
  )
}

export function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  compact = false,
}: {
  icon?: IconName
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  compact?: boolean
}) {
  const T = useT()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: compact ? 8 : 10,
        padding: compact ? '28px 16px' : '48px 24px',
        textAlign: 'center',
        borderRadius: 12,
        border: `1px dashed ${T.borderSubtle}`,
        background: 'rgba(255,255,255,0.025)',
      }}
    >
      <div style={{ width: compact ? 34 : 40, height: compact ? 34 : 40, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,0.04)', color: T.textTertiary }}>
        <Icon name={icon} size={compact ? 16 : 18} color={T.textTertiary} />
      </div>
      <div>
        <div style={{ fontSize: 14, color: T.textPrimary, fontWeight: 500, marginBottom: description ? 4 : 0 }}>{title}</div>
        {description && <div style={{ fontSize: 12.5, color: T.textTertiary, lineHeight: 1.6 }}>{description}</div>}
      </div>
      {action}
    </div>
  )
}

// ── Charts ────────────────────────────────────────────────────────

export function MiniLineChart({ data }: { data: { l: string; v: number }[] }) {
  const T = useT()
  const W = 280, H = 90, PL = 6, PR = 6, PT = 8, PB = 24
  const cw = W - PL - PR, ch = H - PT - PB
  const max = Math.max(...data.map((d) => d.v), 1)
  const pts = data.map((d, i) => ({ x: PL + (i / (data.length - 1)) * cw, y: PT + ch - (d.v / max) * ch }))
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  const area = `${line} L${pts[pts.length - 1].x},${PT + ch} L${pts[0].x},${PT + ch} Z`
  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
        <defs><linearGradient id="dag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.accent} stopOpacity="0.3"/><stop offset="100%" stopColor={T.accent} stopOpacity="0"/></linearGradient></defs>
        {[0, 0.5, 1].map((r) => <line key={r} x1={PL} y1={PT + ch * (1 - r)} x2={W - PR} y2={PT + ch * (1 - r)} stroke={T.borderSubtle} strokeWidth={1}/>)}
        <path d={area} fill="url(#dag)"/>
        <path d={line} fill="none" stroke={T.accent} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={3} fill={T.accent} stroke={T.bgSurface} strokeWidth={1.5}/>)}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: `0 ${PL}px`, marginTop: -16 }}>
        {data.map((d) => <span key={d.l} style={{ fontSize: 9.5, color: T.textTertiary }}>{d.l}</span>)}
      </div>
    </div>
  )
}

export function MiniBarChart({ data }: { data: { l: string; v: number; c: string }[] }) {
  const max = Math.max(...data.map((d) => d.v), 1)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
      {data.map((d) => (
        <div key={d.l}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontSize: 13, color: T.textPrimary }}>{d.l}</span>
            <span style={{ fontSize: 11, color: T.textTertiary, fontVariantNumeric: 'tabular-nums' }}>{d.v}</span>
          </div>
          <div style={{ height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: `${(d.v / max) * 100}%`, height: '100%', background: d.c, borderRadius: 3, transition: 'width 0.6s ease' }}/>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Avatar helpers ────────────────────────────────────────────────

export function avatarColor(name: string) {
  const colors = ['#5e6ad2', '#26b56b', '#f2b84b', '#60a5fa', '#ff5c5c', '#a78bfa']
  let hash = 0
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) % colors.length
  return colors[hash]
}

export function AvatarStack({ names, max = 4 }: { names: string[]; max?: number }) {
  const T = useT()
  const show = names.slice(0, max)
  const rest = names.length - max
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {show.map((name, i) => (
        <div key={name} title={name} style={{ width: 24, height: 24, borderRadius: '50%', background: avatarColor(name), display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700, color: '#fff', border: '2px solid currentColor', marginLeft: i === 0 ? 0 : -7, zIndex: show.length - i }}>
          {name[0]}
        </div>
      ))}
      {rest > 0 && (
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(155,161,173,0.3)', display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 600, color: T.textSecondary, border: '2px solid currentColor', marginLeft: -7 }}>
          +{rest}
        </div>
      )}
    </div>
  )
}

export const surfaceBg = 'rgba(255,255,255,0.03)'

// ── Sidebar ───────────────────────────────────────────────────────

export interface NavItem { label: string; icon: IconName; path: string }
export interface NavGroup { title: string; items: NavItem[] }

export function Sidebar({ navGroups }: {
  navGroups: NavGroup[]
}) {
  const { pathname } = useLocation()
  const { tokens: T } = useContext(DesignSystemContext)

  function isActive(path: string) {
    if (path === '/projects') return pathname === '/projects' || (pathname.startsWith('/projects/') && !pathname.startsWith('/projects/members'))
    if (path === '/projects/members') return pathname === '/projects/members' || pathname.startsWith('/projects/members/')
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <aside style={{ width: 232, flexShrink: 0, height: '100vh', display: 'flex', flexDirection: 'column', background: T.sidebarBg, backdropFilter: 'blur(20px)', borderRight: `1px solid ${T.borderSubtle}`, position: 'sticky', top: 0 }}>
      {/* Brand */}
      <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 14px 16px', borderBottom: `1px solid ${T.borderSubtle}`, textDecoration: 'none' }}>
        <span style={{ width: 30, height: 30, borderRadius: 9, flexShrink: 0, background: `linear-gradient(145deg,${T.accentHover},${T.accent})`, display: 'grid', placeItems: 'center', color: '#fff', fontSize: 11, fontWeight: 700, boxShadow: '0 6px 18px rgba(94,106,210,0.35)' }}>EP</span>
        <span>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.textPrimary, letterSpacing: '-0.01em' }}>Enterprise Portal</span>
          <span style={{ display: 'block', fontSize: 10.5, color: T.textTertiary, marginTop: 1 }}>业务工作台</span>
        </span>
      </Link>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '10px 8px' }}>
        {navGroups.map((group) => (
          <div key={group.title} style={{ marginBottom: 12 }}>
            <div style={{ padding: '4px 8px 3px', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.textTertiary }}>{group.title}</div>
            {group.items.map((item) => {
              const active = isActive(item.path)
              return (
                <Link key={item.path} to={item.path} style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', gap: 9, minHeight: 33, padding: '7px 9px', borderRadius: 8, background: active ? 'rgba(94,106,210,0.14)' : 'transparent', boxShadow: active ? 'inset 0 0 0 1px rgba(94,106,210,0.18)' : 'none', color: active ? T.textPrimary : T.textSecondary, fontSize: 13, fontWeight: 500, cursor: 'pointer', textAlign: 'left', textDecoration: 'none', transition: 'all 0.15s ease' }}>
                  {active && <span style={{ position: 'absolute', left: -8, width: 2, height: 16, borderRadius: 2, background: T.accent }} />}
                  <Icon name={item.icon} size={14} color="currentColor" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        ))}
      </nav>
    </aside>
  )
}

// ── TopBar ────────────────────────────────────────────────────────

export function TopBar({ isMobile = false, userName, userInitial, onSearchOpen, onLogout, isDark, onToggleTheme }: {
  isMobile?: boolean
  userName: string
  userInitial: string
  onSearchOpen: () => void
  onLogout: () => void
  isDark?: boolean
  onToggleTheme?: () => void
}) {
  const T = useT()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', background: T.topbarBg, backdropFilter: 'blur(18px)', borderBottom: `1px solid ${T.borderSubtle}`, flexShrink: 0 }}>
      {/* Search */}
      <button onClick={onSearchOpen} style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: isMobile ? 120 : 260, height: 32, padding: '0 10px', border: `1px solid ${T.borderSubtle}`, borderRadius: 8, background: 'rgba(255,255,255,0.035)', color: T.textTertiary, fontSize: 13, cursor: 'pointer' }}>
        <Icon name="search" size={13} />
        <span>{isMobile ? '搜索' : '搜索工作项、项目、成员…'}</span>
        {!isMobile && <kbd style={{ marginLeft: 'auto', padding: '1px 6px', borderRadius: 5, background: 'rgba(255,255,255,0.08)', color: T.textTertiary, fontSize: 10, border: `1px solid ${T.borderSubtle}`, fontFamily: 'ui-monospace,monospace' }}>⌘K</kbd>}
      </button>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, position: 'relative' }}>
        {/* Theme toggle */}
        {onToggleTheme && (
          <button onClick={onToggleTheme}
            style={{ width: 32, height: 32, display: 'grid', placeItems: 'center', border: `1px solid ${T.borderSubtle}`, borderRadius: 8, background: 'rgba(255,255,255,0.04)', color: T.textSecondary, cursor: 'pointer', transition: 'background 0.15s, color 0.15s' }}>
            <Icon name={isDark ? 'moon' : 'sun'} size={14} />
          </button>
        )}

        <Link to="/notifications" style={{ width: 32, height: 32, display: 'grid', placeItems: 'center', border: `1px solid ${T.borderSubtle}`, borderRadius: 8, background: 'rgba(255,255,255,0.04)', color: T.textSecondary, cursor: 'pointer', position: 'relative', textDecoration: 'none' }}>
          <Icon name="bell" size={14} />
          <span style={{ position: 'absolute', top: 5, right: 6, width: 6, height: 6, borderRadius: '50%', background: T.danger, boxShadow: `0 0 0 1.5px ${T.bgBase}` }} />
        </Link>

        {/* User dropdown — Linear style */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => setShowUserMenu(!showUserMenu)} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '3px 8px 3px 4px', borderRadius: 999, border: `1px solid ${T.borderSubtle}`, background: 'transparent', color: T.textPrimary, fontSize: 13, cursor: 'pointer' }}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: T.accent + '20', border: `1px solid ${T.accent}40`, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, color: T.accent, fontFamily: 'var(--eb-font-sans, "Inter", sans-serif)', letterSpacing: '0.02em' }}>{userInitial}</span>
            {!isMobile && <span style={{ fontWeight: 500 }}>{userName}</span>}
            <Icon name="chevronDown" size={11} style={{ color: T.textTertiary, marginLeft: 2 }} />
          </button>

          {/* Dropdown menu */}
          {showUserMenu && (
            <>
              <div onClick={() => setShowUserMenu(false)} style={{ position: 'fixed', inset: 0, zIndex: 39 }} />
              <div style={{ position: 'absolute', top: 40, right: 0, zIndex: 41, width: 200, borderRadius: 10, background: T.bgElevated, border: `1px solid ${T.borderSubtle}`, boxShadow: '0 8px 24px rgba(0,0,0,0.24)', overflow: 'hidden' }}>
                <nav style={{ padding: '6px 6px' }}>
                  <Link to="/profile" onClick={() => setShowUserMenu(false)} style={{ display: 'flex', alignItems: 'center', gap: 9, width: '100%', padding: '8px 10px', borderRadius: 7, color: T.textSecondary, fontSize: 13.5, fontWeight: 450, cursor: 'pointer', textDecoration: 'none', marginBottom: 2 }}>
                    <Icon name="user" size={13} />
                    <span>个人中心</span>
                  </Link>
                  <button onClick={() => { setShowUserMenu(false); onLogout() }} style={{ display: 'flex', alignItems: 'center', gap: 9, width: '100%', padding: '8px 10px', borderRadius: 7, border: 'none', background: 'transparent', color: T.danger, fontSize: 13.5, fontWeight: 450, cursor: 'pointer', textAlign: 'left' }}>
                    <Icon name="logout" size={13} />
                    <span>退出登录</span>
                  </button>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
