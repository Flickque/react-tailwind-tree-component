import './App.css'
import Tree from './components/Tree/Tree.tsx'
import { treeData } from './consts/tree.data.ts'

function App() {
	return (
		<>
			<div className="p max-w-sm rounded-2xl border border-stone-700 bg-stone-950 px-4 py-6 ">
				<Tree data={treeData.data} />
			</div>
		</>
	)
}

export default App
