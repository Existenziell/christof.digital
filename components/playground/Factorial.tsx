'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { factorial } from '@/util/factorial'
import { factorialSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function Factorial() {
  const [n, setN] = useState<string>('')
  const [visible, setVisible] = useState(false)

  const output = n ? factorial(parseInt(n, 10)) : ''

  return (
    <div className="experiment">
      <h2>Factorial</h2>
      <p>Compute n!.</p>
      <input type="number" placeholder="Number" onChange={(e) => setN(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{factorialSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
