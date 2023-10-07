interface FolderPlusIconProps {
	className?: string
}
const FolderPlusIcon = ({ className }: FolderPlusIconProps) => {
	return (
		<svg
			className={className}
			data-testid="geist-icon"
			fill="none"
			height="16"
			shapeRendering="geometricPrecision"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			width="16"
		>
			<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
			<path d="M12 11v6" />
			<path d="M9 14h6" />
		</svg>
	)
}
export default FolderPlusIcon
