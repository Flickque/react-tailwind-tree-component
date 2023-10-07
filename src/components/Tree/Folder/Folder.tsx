import { memo, useState } from 'react'
import { nanoid } from 'nanoid'

import { FolderProps } from './Folder.types'
import { TreeItem } from '../Tree.types.ts'

import File from '../File/File'

import FolderIcon from '../../../icons/FolderIcon'
import SquarePlusIcon from '../../../icons/SquarePlusIcon'
import SquareMinusIcon from '../../../icons/SquareMinusIcon'
import FolderOpenedIcon from '../../../icons/FolderOpenedIcon'

const Folder = ({ name, items, children, id }: FolderProps) => {
	const [isOpened, setIsOpened] = useState<boolean>(false)
	const folderId = id || nanoid()

	const handleFolderClick = () => {
		setIsOpened((prev) => !prev)
	}

	const renderItem = (item: TreeItem) => {
		if (item.type === 'file') {
			return <File key={item.id} {...item} />
		} else if (item.type === 'folder') {
			return <Folder key={item.id} {...item} />
		}
	}

	return (
		<div key={folderId} className="file-tree-folder flex flex-col hover:cursor-pointer">
			<div
				onClick={handleFolderClick}
				className="flex flex-row items-center gap-1.5 hover:text-gray-500"
			>
				<div className="mr-2">{isOpened ? <SquareMinusIcon /> : <SquarePlusIcon />}</div>
				{isOpened ? <FolderOpenedIcon /> : <FolderIcon />}
				<div>{name}</div>
			</div>
			{isOpened && (
				<div className="ml-7 mt-2 flex flex-col gap-2">
					{children ? <div>{children}</div> : items?.map((item) => renderItem(item))}
				</div>
			)}
		</div>
	)
}

export default memo(Folder)
