import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { isPrime } from "../../util/isPrime"
import { isPrimeSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const IsPrime = () => {
  const [number, setNumber] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (number) {
      const output = isPrime(parseInt(number))
      setOutput(output)
    }
  }, [number])

  return (
    <div className="experiment">
      <h2>Number is prime</h2>
      <p>
        Checks if the provided integer is a prime number.
        By only checking numbers from 2 to the square root of the given number the complexity can be massively reduced (boundary).
        Returns false if any of them divides the given number, else return true, unless the number is less than 2.
      </p>
      <input type='number' placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
      <div className="output">Output: {output.toString()}</div>

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
            {isPrimeSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default IsPrime
