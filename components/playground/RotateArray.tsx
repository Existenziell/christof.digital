'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { rotateArray } from '@/util/rotateArray'
import { rotateArraySnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function RotateArray() {
  const [input, setInput] = useState<string>('')
  const [steps, setSteps] = useState<string>('')
  const [visible, setVisible] = useState(false)

  let output = ''
  if (input && steps) {
    try {
      const arr = JSON.parse(input) as unknown[]
      output = JSON.stringify(rotateArray(arr, parseInt(steps, 10)))
    } catch {
      output = 'Invalid array JSON'
    }
  }

  return (
    <div className="experiment">
      <h2>Rotate Array</h2>
      <p>Rotate array by n steps.</p>
      <input type="text" placeholder='[1,2,3,4,5]' onChange={(e) => setInput(e.target.value)} />
      <input type="number" placeholder="Steps" onChange={(e) => setSteps(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{rotateArraySnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
