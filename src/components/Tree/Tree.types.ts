import React from 'react'
import { FileProps } from './File/File.types.ts'
import { FolderProps } from './Folder/Folder.types.ts'

export type TreeItem = FileProps | FolderProps
export interface TreeItemProps {
	data?: TreeItem[]
	children?: React.ReactNode
}
