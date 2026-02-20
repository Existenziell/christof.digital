'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { primeNumbers } from '@/util/primeNumbers'
import { primeNumbersSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function PrimeNumbers() {
  const [number, setNumber] = useState<string>('')
  const [visible, setVisible] = useState(false)

  const output = number ? primeNumbers(parseInt(number, 10)) : ''

  return (
    <div className="experiment">
      <h2>Prime Numbers</h2>
      <p>List primes up to n.</p>
      <input type="number" placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{primeNumbersSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
