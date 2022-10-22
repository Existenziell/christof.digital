import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { downloadTime } from "../../util/downloadTime"
import { downloadTimeSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const DownloadTime = () => {
  const [filesize, setFilesize] = useState()
  const [trend, setTrend] = useState()
  const [observations, setObservations] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (observations && trend && filesize) {
      const output = downloadTime(filesize, trend.split(','), observations)
      setOutput(output)
    }
  }, [filesize, trend, observations])

  return (
    <div className="experiment">
      <h2>Estimate remaining download time</h2>
      <p>
        A user is downloading a file which is X bytes in size. The system keeps a record of the amount (in bytes) B
        downloaded each minute. Calculate the remaining download time in minutes.<br />
        X - Filesize<br />
        B - Trend, listing the past bytes downloaded at each minute<br />
        Z - Last Z number of observations to be considered
      </p>
      <input type='number' placeholder="X: 100" onChange={(e) => setFilesize(e.target.value)} />
      <input type='text' placeholder="B: 8,7,6,9,4,11" onChange={(e) => setTrend(e.target.value)} spellCheck='false' />
      <input type='number' placeholder="Z: 2" onChange={(e) => setObservations(e.target.value)} />
      <div className="output">Output: {output ? `${output} minutes` : ``}</div>

      <button onClick={() => setVisible(!visible)} className='button-sm'>
        {visible ? `Hide Code` : `Unveil code`}
      </button>

      {visible &&
        <div className="mt-2">
          <SyntaxHighlighter
            language='javascript'
            style={dracula}
            showLineNumbers={true}
            customStyle={{ fontSize: '14px', lineHeight: '20px' }}
          >
            {downloadTimeSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}
export default DownloadTime
