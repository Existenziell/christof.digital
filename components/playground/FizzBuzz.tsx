'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { fizzBuzz } from '@/util/fizzBuzz'
import { fizzBuzzSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function FizzBuzz() {
  const [input, setInput] = useState<string>('')
  const [visible, setVisible] = useState(false)

  const output = input ? fizzBuzz(parseInt(input, 10)) : ''

  return (
    <div className="experiment">
      <h2>Fizz Buzz</h2>
      <p>Fizz for multiples of 2, Buzz for 3.</p>
      <input type="number" placeholder="Input" onChange={(e) => setInput(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{fizzBuzzSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
