import { memo, useState } from 'react'
import { nanoid } from 'nanoid'

import { FolderProps } from './Folder.types'
import { TreeItem } from '../Tree.types'

import File from '../File/File'
import FolderIcon from '../../../icons/FolderIcon'
import SquarePlusIcon from '../../../icons/SquarePlusIcon'
import SquareMinusIcon from '../../../icons/SquareMinusIcon'
import FolderOpenedIcon from '../../../icons/FolderOpenedIcon'

const Folder = ({ name, items = [], children, id = nanoid() }: FolderProps) => {
	const [isOpened, toggleFolder] = useState<boolean>(false)

	const handleFolderClick = () => {
		toggleFolder((prevIsOpened) => !prevIsOpened)
	}

	const renderTreeItem = (item: TreeItem) => {
		if (item.type === 'file') {
			return <File key={item.id} {...item} />
		}
		if (item.type === 'folder') {
			return <Folder key={item.id} {...item} />
		}
	}

	return (
		<div key={id} className="file-tree-folder flex flex-col hover:cursor-pointer">
			<div
				onClick={handleFolderClick}
				className="flex flex-row items-center gap-1.5 text-gray-200 hover:text-gray-100"
			>
				<div className="mr-2">{isOpened ? <SquareMinusIcon /> : <SquarePlusIcon />}</div>
				{isOpened ? <FolderOpenedIcon /> : <FolderIcon />}
				<div>{name}</div>
			</div>
			{isOpened && (
				<div className="ml-7 mt-2 flex flex-col gap-2">{children || items.map(renderTreeItem)}</div>
			)}
		</div>
	)
}

export default memo(Folder)
