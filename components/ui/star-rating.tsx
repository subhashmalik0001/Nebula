'use client'

/* ----------------------------------------------------------------
   StarRating
   Renders filled yellow stars with a half-star option.
   Props:
     rating:    number  (e.g., 4.8)
     maxStars:  number  (default: 5)
     size:      'sm' | 'md'  (default: 'md')
---------------------------------------------------------------- */
interface StarRatingProps {
  rating: number
  maxStars?: number
  size?: 'sm' | 'md'
}

export default function StarRating({ rating, maxStars = 5, size = 'md' }: StarRatingProps) {
  const starSize = size === 'sm' ? 14 : 16
  const color = '#F0B31B'
  const emptyColor = '#E5E5E5'

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of ${maxStars}`}>
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = rating - i
        if (filled >= 1) {
          /* Fully filled */
          return (
            <svg key={i} width={starSize} height={starSize} viewBox="0 0 16 16" fill={color} aria-hidden="true">
              <path d="M8 1.3l1.7 3.5 3.8.55-2.75 2.67.65 3.78L8 9.95l-3.4 1.85.65-3.78L2.5 5.35l3.8-.55L8 1.3z" />
            </svg>
          )
        } else if (filled > 0) {
          /* Half star */
          return (
            <svg key={i} width={starSize} height={starSize} viewBox="0 0 16 16" aria-hidden="true">
              <defs>
                <linearGradient id={`half-${i}`} x1="0" x2="100%" y1="0" y2="0">
                  <stop offset="50%" stopColor={color} />
                  <stop offset="50%" stopColor={emptyColor} />
                </linearGradient>
              </defs>
              <path d="M8 1.3l1.7 3.5 3.8.55-2.75 2.67.65 3.78L8 9.95l-3.4 1.85.65-3.78L2.5 5.35l3.8-.55L8 1.3z" fill={`url(#half-${i})`} />
            </svg>
          )
        } else {
          /* Empty */
          return (
            <svg key={i} width={starSize} height={starSize} viewBox="0 0 16 16" fill={emptyColor} aria-hidden="true">
              <path d="M8 1.3l1.7 3.5 3.8.55-2.75 2.67.65 3.78L8 9.95l-3.4 1.85.65-3.78L2.5 5.35l3.8-.55L8 1.3z" />
            </svg>
          )
        }
      })}
    </div>
  )
}
