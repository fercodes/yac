interface ImagePlaceholderProps {
  aspectRatio?: 'square' | '16:9' | '4:3' | '3:2'
  className?: string
  alt?: string
}

export default function ImagePlaceholder({
  aspectRatio = '16:9',
  className = '',
  alt = 'Placeholder image',
}: ImagePlaceholderProps) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '3:2': 'aspect-[3/2]',
  }

  return (
    <div
      className={`bg-gray-light rounded-lg flex items-center justify-center overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        className="w-12 h-12 text-gray-medium"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  )
}
