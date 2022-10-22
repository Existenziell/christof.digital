import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { timeToType } from "../../util/timeToType"
import { timeToTypeSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const TimeToType = () => {
  const [digits, setDigits] = useState()
  const [num, setNum] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (digits && num) {
      const output = timeToType(digits.split(''), num.split(''))
      setOutput(output)
    }
  }, [digits, num])

  return (
    <div className="experiment">
      <h2>TimeToType</h2>
      <p>
        A digit-only keyboard contains all 10 digits from 0 to 9. They all exist in one line.
        To type a digit, you start from index zero to the index of the target digit.
        It takes |a - b| milliseconds to move from index a to index b.
        Calculate the number of milliseconds needed to type a number with one finger.
      </p>
      <input type='text' placeholder="Digits 0-9" onChange={(e) => setDigits(e.target.value)} spellCheck='false' />
      <input type='number' placeholder="Number to be typed" onChange={(e) => setNum(e.target.value)} />
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
            {timeToTypeSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}
export default TimeToType
