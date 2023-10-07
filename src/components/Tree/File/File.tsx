import { memo } from 'react'
import { nanoid } from 'nanoid'

import { useHover } from '../../../hooks/useHover'

import { FileProps } from './File.types'

import FileIcon from '../../../icons/FileIcon'
import EditIcon from '../../../icons/EditIcon'
import XIcon from '../../../icons/XIcon'

const File = ({ name, id }: FileProps) => {
	const fileId = id || nanoid()
	const [isHovered, hoverRef] = useHover()

	return (
		<div
			className="file-tree-file relative ml-7 flex flex-row gap-1.5 hover:cursor-pointer hover:text-gray-400"
			ref={hoverRef}
		>
			<FileIcon />
			<div key={fileId}>{name}</div>
			{isHovered && (
				<div className="absolute right-0 flex flex-row items-center gap-1.5">
					<EditIcon className="hover:cursor-pointer hover:text-gray-50" />
					<XIcon className="hover:cursor-pointer hover:text-gray-50" />
				</div>
			)}
		</div>
	)
}

export default memo(File)
