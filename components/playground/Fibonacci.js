import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { fibonacci } from "../../util/fibonacci"
import { fibonacciSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const Fibonacci = () => {
  const [depth, setDepth] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (depth) {
      const output = fibonacci(parseInt(depth))
      setOutput(output)
    }
  }, [depth])

  return (
    <div className="experiment">
      <h2>Fibonacci sequence</h2>
      <p>Return the Fibonacci sequence up to the desired depth.</p>
      <input type='number' placeholder="Depth" onChange={(e) => setDepth(e.target.value)} />
      <div className="output">Output: {output}</div>

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
            {fibonacciSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default Fibonacci
