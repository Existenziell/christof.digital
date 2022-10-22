import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { rotateArray } from "../../util/rotateArray"
import { rotateArraySnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const RotateArray = () => {
  const [input, setInput] = useState()
  const [steps, setSteps] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (steps) {
      const output = rotateArray(input.split(','), parseInt(steps))
      setOutput(output.join(', '))
    }
  }, [input, steps])

  return (
    <div className="experiment">
      <h2>Rotate Array k steps</h2>
      <p>
        {`[1, 2, 3, 4, 5] steps: 1 => [5, 1, 2, 3, 4]`}<br />
        {`[1, 2, 3, 4, 5] steps: 3 => [3, 4, 5, 1, 2]`}
      </p>
      <input type='text' placeholder="Input (e.g. 2,3,6,5)" onChange={(e) => setInput(e.target.value)} spellCheck='false' />
      <input type='number' placeholder="Steps" onChange={(e) => setSteps(e.target.value)} />
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
            {rotateArraySnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default RotateArray
