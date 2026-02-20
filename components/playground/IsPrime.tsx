'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { isPrime } from '@/util/isPrime'
import { isPrimeSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function IsPrime() {
  const [num, setNum] = useState<string>('')
  const [visible, setVisible] = useState(false)

  const output = num ? String(isPrime(parseInt(num, 10))) : ''

  return (
    <div className="experiment">
      <h2>Is Prime</h2>
      <p>Check if number is prime.</p>
      <input type="number" placeholder="Number" onChange={(e) => setNum(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{isPrimeSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
