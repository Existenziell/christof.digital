import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { primeFactors } from "../../util/primeFactors"
import { primeFactorsSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const PrimeFactors = () => {
  const [number, setNumber] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (number) {
      const output = primeFactors(parseInt(number))
      setOutput(output)
    }
  }, [number])

  return (
    <div className="experiment">
      <h2>Prime factors decomposition</h2>
      <p>
        Finds the prime factors of a given number using the trial division algorithm.
        Trial division is the most laborious but easiest to understand of the integer factorization algorithms.
      </p>
      <input type='number' placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
      <div className="output">Output: {output.toString()}</div>

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
            {primeFactorsSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default PrimeFactors
