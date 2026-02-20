'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { timeToType } from '@/util/timeToType'
import { timeToTypeSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function TimeToType() {
  const [digits, setDigits] = useState('0123456789')
  const [num, setNum] = useState('')
  const [visible, setVisible] = useState(false)

  const output = digits && num ? String(timeToType(digits, num)) : ''

  return (
    <div className="experiment">
      <h2>Time to Type</h2>
      <p>Calculate time to type a number on a digit strip.</p>
      <input type="text" placeholder="Digits" value={digits} onChange={(e) => setDigits(e.target.value)} />
      <input type="text" placeholder="Number" onChange={(e) => setNum(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{timeToTypeSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
