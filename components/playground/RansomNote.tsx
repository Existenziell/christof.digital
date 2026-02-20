'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { ransomNote } from '@/util/ransomNote'
import { ransomNoteSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function RansomNote() {
  const [note, setNote] = useState('')
  const [magazine, setMagazine] = useState('')
  const [visible, setVisible] = useState(false)

  const output = note && magazine ? ransomNote(note, magazine) : ''

  return (
    <div className="experiment">
      <h2>Ransom Note</h2>
      <p>Can the note be formed from the magazine words?</p>
      <input type="text" placeholder="Note" onChange={(e) => setNote(e.target.value)} />
      <input type="text" placeholder="Magazine" onChange={(e) => setMagazine(e.target.value)} />
      <div className="output">Output: {String(output)}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{ransomNoteSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
