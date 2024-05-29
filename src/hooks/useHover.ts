import React, { useState, useRef, useEffect } from 'react'

export const useHover = (): [boolean, React.Ref<HTMLDivElement>] => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const ref = useRef<HTMLDivElement>(null)
	const handleMouseEnter = () => setIsHovered(true)
	const handleMouseLeave = () => setIsHovered(false)

	useEffect(() => {
		const node = ref.current
		if (node) {
			node.addEventListener('mouseenter', handleMouseEnter)
			node.addEventListener('mouseleave', handleMouseLeave)

			return () => {
				node.removeEventListener('mouseenter', handleMouseEnter)
				node.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}, [])

	return [isHovered, ref]
}
