'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { caesarCipher } from '@/util/caesarCipher'
import { caesarCipherSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function CaesarCipher() {
  const [phrase, setPhrase] = useState('')
  const [number, setNumber] = useState<string>('')
  const [visible, setVisible] = useState(false)

  const output = phrase && number ? caesarCipher(phrase, parseInt(number, 10)) : ''

  return (
    <div className="experiment">
      <h2>Caesar Cipher</h2>
      <p>Shift letters by n.</p>
      <input type="text" placeholder="Phrase" onChange={(e) => setPhrase(e.target.value)} />
      <input type="number" placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{caesarCipherSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
