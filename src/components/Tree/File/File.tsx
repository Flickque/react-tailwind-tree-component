import React, { memo, useState } from 'react'
import { nanoid } from 'nanoid'

// Hooks
import { useHover } from '../../../hooks/useHover'

// Types
import { FileProps } from './File.types'

// Components / Icons
import FileIcon from '../../../icons/FileIcon'
import EditIcon from '../../../icons/EditIcon'
import XIcon from '../../../icons/XIcon'

const File = ({ name: initialName, id = nanoid() }: FileProps) => {
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [isHovered, hoverRef] = useHover()
	const [editInputValue, setEditInputValue] = useState<string>(initialName)
	const [name, setName] = useState<string>(initialName)

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEditInputValue(event.target.value)
	}

	const handleEditToggle = () => {
		setIsEditing((prev) => !prev)
	}

	const handleSaveEdit = () => {
		setName(editInputValue)
		setIsEditing(false)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSaveEdit()
		} else if (event.key === 'Escape') {
			setIsEditing(false)
		}
	}

	const renderFileName = () => (
		<div key={id} className="border border-stone-950">
			{name}
		</div>
	)

	const renderEditInputField = () => (
		<input
			value={editInputValue}
			onChange={handleInput}
			onBlur={handleSaveEdit}
			onFocus={(e) => e.target.select()}
			onKeyDown={handleKeyDown}
			autoFocus
			className="border border-stone-900 bg-stone-900 focus:border focus:border-stone-600 focus:outline-0"
		/>
	)

	const renderActionIcons = () => (
		<div className="absolute right-0 flex flex-row items-center gap-1.5">
			<span onClick={handleEditToggle}>
				<EditIcon className="text-gray-200 hover:cursor-pointer hover:text-gray-100" />
			</span>
			<XIcon className="text-gray-200 hover:cursor-pointer hover:text-gray-100" />
		</div>
	)

	return (
		<div
			className="file-tree-file relative ml-7 flex flex-row gap-1.5 text-gray-200 hover:cursor-pointer hover:text-gray-100"
			ref={hoverRef}
		>
			<FileIcon />
			{isEditing ? renderEditInputField() : renderFileName()}
			{isHovered && !isEditing && renderActionIcons()}
		</div>
	)
}

export default memo(File)
