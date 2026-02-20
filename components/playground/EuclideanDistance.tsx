'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { euclideanDistance } from '@/util/euclideanDistance'
import { euclideanDistanceSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function EuclideanDistance() {
  const [a, setA] = useState('{ "x": 0, "y": 0 }')
  const [b, setB] = useState('{ "x": 3, "y": 4 }')
  const [visible, setVisible] = useState(false)

  let output = ''
  try {
    const aObj = JSON.parse(a) as Record<string, number>
    const bObj = JSON.parse(b) as Record<string, number>
    output = String(euclideanDistance(aObj, bObj))
  } catch {
    output = 'Invalid JSON'
  }

  return (
    <div className="experiment">
      <h2>Euclidean Distance</h2>
      <p>Distance between two points (JSON objects).</p>
      <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{euclideanDistanceSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
