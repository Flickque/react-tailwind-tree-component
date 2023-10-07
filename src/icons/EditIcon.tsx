interface EditIconProps {
	className?: string
}
const EditIcon = ({ className }: EditIconProps) => {
	return (
		<svg
			className={className}
			data-testid="geist-icon"
			fill="none"
			height="15"
			shapeRendering="geometricPrecision"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			width="15"
		>
			<path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
		</svg>
	)
}

export default EditIcon
