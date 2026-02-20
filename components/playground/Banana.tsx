'use client'

import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { bananaSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function Banana() {
  const [visible, setVisible] = useState(false)
  const getBanana = () => {
    const banana = 'b' + 'a' + +'a' + 'a'
    return banana
  }

  return (
    <div className="experiment">
      <h2>Banana</h2>
      <p>Classic JavaScript quirk: &quot;b&quot; + &quot;a&quot; + +&quot;a&quot; + &quot;a&quot;</p>
      <div className="output">Output: {getBanana()}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{bananaSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
