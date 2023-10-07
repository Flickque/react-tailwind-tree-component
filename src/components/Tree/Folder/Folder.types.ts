import { TreeItem } from '../Tree.types.ts'
import React from 'react'

export interface FolderProps {
	id?: string
	type?: 'folder'
	name: string
	items?: TreeItem[]
	children?: React.ReactNode
}
