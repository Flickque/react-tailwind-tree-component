import './App.css'
import Tree from './components/Tree/Tree.tsx'
import { treeData } from './consts/tree.data.ts'
import CodeBlock from './components/CodeBlock/CodeBlock.tsx'
import { codeSampleTreeComposition } from './consts/codeSampleTreeComposition.ts'
import { codeSampleTreeBasic } from './consts/codeSampleTreeBasic.ts'

function App() {
	return (
		<>
			<div className="grid items-center justify-center gap-5">
				<div className="p rounded-2xl border border-stone-700 bg-stone-950 px-4 py-6 ">
					<Tree data={treeData.data} />
				</div>
				<div className="p rounded-2xl border border-stone-700 bg-stone-950 px-4 py-6 ">
					<CodeBlock code={codeSampleTreeBasic} language="javascript" />
				</div>
				<div className="p rounded-2xl border border-stone-700 bg-stone-950 px-4 py-6 ">
					<Tree data={treeData.data} />
				</div>
				<div className="p rounded-2xl border border-stone-700 bg-stone-950 px-4 py-6 ">
					<CodeBlock code={codeSampleTreeComposition} language="javascript" />
				</div>
			</div>
		</>
	)
}

export default App
