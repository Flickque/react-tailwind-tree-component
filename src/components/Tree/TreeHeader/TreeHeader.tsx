import { memo } from 'react'

import FilePlusIcon from '../../../icons/FilePlusIcon.tsx'
import FolderPlusIcon from '../../../icons/FolderPlusIcon.tsx'

const TreeHeader = () => {
	return (
		<>
			<div className="mb-4 flex flex-row items-center justify-between border-b border-stone-700 pb-4">
				<h4>Files</h4>
				<div className="flex flex-row items-center gap-2">
					<FilePlusIcon className="hover:cursor-pointer hover:text-gray-500 " />
					<FolderPlusIcon className="hover:cursor-pointer hover:text-gray-500" />
				</div>
			</div>
		</>
	)
}

export default memo(TreeHeader)
