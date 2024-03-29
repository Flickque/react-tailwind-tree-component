interface FilePlusIconProps {
	className?: string
}
const FilePlusIcon = ({ className }: FilePlusIconProps) => {
	return (
		<svg
			className={className}
			data-testid="geist-icon"
			fill="none"
			height="18"
			shapeRendering="geometricPrecision"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			width="18"
		>
			<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
			<path d="M14 2v6h6" />
			<path d="M12 18v-6" />
			<path d="M9 15h6" />
		</svg>
	)
}

export default FilePlusIcon
