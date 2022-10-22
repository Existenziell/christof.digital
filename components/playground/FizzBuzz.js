import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { fizzBuzz } from "../../util/fizzBuzz"
import { fizzBuzzSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const FizzBuzz = () => {
  const [input, setInput] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (input) {
      const output = fizzBuzz(input)
      setOutput(output)
    }
  }, [input])

  return (
    <div className="experiment">
      <h2>Classic FizzBuzz</h2>
      <p>
        Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it&apos;s divisible by 3, print out “Buzz”; when it&apos;s divisible by both 2 and 3, print out “Fizz Buzz”.
      </p>
      <input type='number' placeholder="Number" onChange={(e) => setInput(e.target.value)} />
      <div className="output">Output: {output}</div>

      <button onClick={() => setVisible(!visible)} className='mt-2 button-sm'>
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
            {fizzBuzzSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default FizzBuzz
