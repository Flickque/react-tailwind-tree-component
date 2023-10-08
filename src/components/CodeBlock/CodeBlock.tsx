import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import '../../assets/prisma/themes/prism-xonokai.css'
import { CodeBlockTypesProps } from './CodeBlock.types.ts'

const CodeBlock = ({ code, language }: CodeBlockTypesProps) => {
	const codeRef = useRef(null)

	useEffect(() => {
		if (codeRef.current) {
			Prism.highlightElement(codeRef.current)
		}
	}, [code, language])

	return (
		<pre>
			<code ref={codeRef} className={`language-${language}`}>
				{code}
			</code>
		</pre>
	)
}

export default CodeBlock
