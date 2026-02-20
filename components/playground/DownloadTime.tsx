'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { useState } from 'react'
import { downloadTime } from '@/util/downloadTime'
import { downloadTimeSnippet } from '@/util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function DownloadTime() {
  const [filesize, setFilesize] = useState<string>('')
  const [trend, setTrend] = useState<string>('')
  const [observations, setObservations] = useState<string>('')
  const [visible, setVisible] = useState(false)

  let output = ''
  if (filesize && trend && observations) {
    try {
      const trendArr = trend.split(',').map((x) => parseInt(x.trim(), 10))
      output = String(downloadTime(parseInt(filesize, 10), trendArr, parseInt(observations, 10)))
    } catch {
      output = 'Invalid input'
    }
  }

  return (
    <div className="experiment">
      <h2>Download Time</h2>
      <p>Estimate remaining download time from trend.</p>
      <input type="number" placeholder="Filesize" onChange={(e) => setFilesize(e.target.value)} />
      <input type="text" placeholder="Trend (comma-separated)" onChange={(e) => setTrend(e.target.value)} />
      <input type="number" placeholder="Observations" onChange={(e) => setObservations(e.target.value)} />
      <div className="output">Output: {output}</div>
      <button type="button" onClick={() => setVisible(!visible)} className="button-sm">{visible ? 'Hide Code' : 'Unveil code'}</button>
      {visible && <div className="mt-2"><SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ fontSize: '14px', lineHeight: '20px' }}>{downloadTimeSnippet}</SyntaxHighlighter></div>}
    </div>
  )
}
