'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { fibonacci } from '@/util/fibonacci'
import { fibonacciSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function Fibonacci() {
  const [depth, setDepth] = useState<string>('')
  const [visible, setVisible] = useState(false)

  const output = depth ? fibonacci(parseInt(depth, 10)) : ''

  return (
    <div className="experiment">
      <h2>Fibonacci sequence</h2>
      <p>Return the Fibonacci sequence up to the desired depth.</p>
      <input type="number" placeholder="Depth" onChange={(e) => setDepth(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">
        {visible ? 'Hide Code' : 'Unveil code'}
      </button>
      {visible && (
        <div className="mt-2">
          <SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>
            {fibonacciSnippet}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
