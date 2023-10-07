import { TreeItemProps } from '../components/Tree/Tree.types.ts'
import { nanoid } from 'nanoid'

export const treeData: TreeItemProps = {
	data: [
		{
			id: nanoid(),
			type: 'folder',
			name: 'components',
			items: [
				{
					id: nanoid(),
					type: 'folder',
					name: 'typography',
					items: [
						{ id: nanoid(), type: 'file', name: 'paragraph.js' },
						{ id: nanoid(), type: 'file', name: 'code.js' },
						{ id: nanoid(), type: 'file', name: 'heading.js' }
					]
				},
				{ id: nanoid(), type: 'file', name: 'button.js' },
				{ id: nanoid(), type: 'file', name: 'avatar.js' }
			]
		},
		{
			id: nanoid(),
			type: 'folder',
			name: 'pages',
			items: [
				{ id: nanoid(), type: 'file', name: 'dashboard.js' },
				{ id: nanoid(), type: 'file', name: 'about.js' },
				{ id: nanoid(), type: 'file', name: 'index.js' }
			]
		},
		{ id: nanoid(), type: 'file', name: 'README.md' },
		{ id: nanoid(), type: 'file', name: '.gitignore' }
	]
}
