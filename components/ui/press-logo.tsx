'use client'

/* ----------------------------------------------------------------
   PressLogo
   Renders a styled typographic wordmark for press mentions.
   Grayscaled in the press strip via parent CSS.
---------------------------------------------------------------- */
interface PressLogoProps {
  name: string
}

const logoStyles: Record<string, { font: string; weight: string; tracking: string; size: string }> = {
  TechCrunch:    { font: 'font-display', weight: 'font-extrabold', tracking: 'tracking-tight', size: 'text-xl' },
  YourStory:     { font: 'font-body',    weight: 'font-bold',      tracking: 'tracking-normal', size: 'text-lg' },
  Inc42:         { font: 'font-display', weight: 'font-black',     tracking: 'tracking-tighter', size: 'text-2xl' },
  'Forbes India':{ font: 'font-body',    weight: 'font-bold',      tracking: 'tracking-widest', size: 'text-base' },
  Mint:          { font: 'font-display', weight: 'font-extrabold', tracking: 'tracking-normal', size: 'text-2xl' },
  Entrackr:      { font: 'font-body',    weight: 'font-bold',      tracking: 'tracking-wide', size: 'text-lg' },
}

export default function PressLogo({ name }: PressLogoProps) {
  const style = logoStyles[name] ?? {
    font: 'font-body',
    weight: 'font-bold',
    tracking: 'tracking-normal',
    size: 'text-lg',
  }

  return (
    <span
      className={`
        ${style.font} ${style.weight} ${style.tracking} ${style.size}
        text-ink-soft leading-none select-none whitespace-nowrap
      `}
    >
      {name}
    </span>
  )
}
