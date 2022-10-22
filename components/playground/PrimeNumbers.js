import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { primeNumbers } from "../../util/primeNumbers"
import { primeNumbersSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const PrimeNumbers = () => {
  const [limit, setLimit] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (limit) {
      const output = primeNumbers(parseInt(limit))
      setOutput(output)
    }
  }, [limit])

  return (
    <div className="experiment">
      <h2>Sieve of Eratosthenes</h2>
      <p>For a given number, find all the prime numbers from zero to that number. Initial solutions might suffer from a time complexity worse than quadratic. Thankfully, Eratosthenes of Cyrene, the inventor of geography, also invented an efficient method for identifying prime numbers.</p>
      <input type='number' placeholder="Limit" onChange={(e) => setLimit(e.target.value)} />
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
            {primeNumbersSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default PrimeNumbers
