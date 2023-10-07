import React, { memo } from 'react'
import { TreeItem, TreeItemProps } from './Tree.types'
import File from './File/File'
import Folder from './Folder/Folder'
import TreeHeader from './TreeHeader/TreeHeader'

const Tree = ({ data, children }: TreeItemProps) => {
	const renderItem = (item: TreeItem): React.ReactNode => {
		if (item.type === 'file') {
			return <File key={item.id} {...item} />
		} else if (item.type === 'folder') {
			return <Folder key={item.id} {...item} />
		}
	}

	return (
		<div className="px-4">
			<TreeHeader />
			<section className="mx-auto flex flex-col gap-2">
				{children ? <div>{children}</div> : data?.map((item) => renderItem(item))}
			</section>
		</div>
	)
}

export default memo(Tree)
