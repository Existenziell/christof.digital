'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { invertStringSpecial } from '@/util/invertStringSpecial'
import { invertStringSpecialSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function InvertStringSpecial() {
  const [string, setString] = useState('')
  const [visible, setVisible] = useState(false)

  const output = string ? invertStringSpecial(string) : ''

  return (
    <div className="experiment">
      <h2>Invert String (keep non-letters)</h2>
      <p>Reverse only letters, keep other chars in place.</p>
      <input type="text" placeholder="String" onChange={(e) => setString(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{invertStringSpecialSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
