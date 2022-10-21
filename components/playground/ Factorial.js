import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { factorial } from "../../util/factorial"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { factorialSnippet } from '../../util/codeSnippets'

const Factorial = () => {
  const [number, setNumber] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (number) {
      const output = factorial(parseInt(number))
      setOutput(output)
    }
  }, [number])

  return (
    <div className="experiment">
      <h2>Factorial of Number</h2>
      <p>
        Calculates the factorial of a number using recursion.
        Returns a notice if n is a negative number. Please don&apos;t crush the server ;-)
      </p>
      <input type='number' placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
      <div className="output">Output: {output}</div>

      <button onClick={() => setVisible(!visible)} className='mt-2 button-sm'>
        {visible ? `Hide Code` : `Unveil code`}
      </button>

      {visible &&
        <div className="mt-4">
          <SyntaxHighlighter
            language='javascript'
            style={dracula}
            showLineNumbers={true}
            customStyle={{ fontSize: '14px', lineHeight: '20px' }}
          >
            {factorialSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default Factorial
