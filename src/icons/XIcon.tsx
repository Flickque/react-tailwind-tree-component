interface XIconProps {
	className?: string
}
const XIcon = ({ className }: XIconProps) => {
	return (
		<svg
			className={className}
			data-testid="geist-icon"
			fill="none"
			height="20"
			shapeRendering="geometricPrecision"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			width="20"
		>
			<path d="M18 6L6 18" />
			<path d="M6 6l12 12" />
		</svg>
	)
}
export default XIcon
