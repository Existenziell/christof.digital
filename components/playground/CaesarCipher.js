import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { caesarCipher } from "../../util/caesarCipher"
import { caesarCipherSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CaesarCipher = () => {
  const [phrase, setPhrase] = useState()
  const [number, setNumber] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (phrase && number) {
      const output = caesarCipher(phrase, parseInt(number))
      setOutput(output)
    }
  }, [phrase, number])

  return (
    <div className="experiment">
      <h2>Caesar Cipher</h2>
      <p>
        Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer.<br />
        If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
      </p>
      <input type='text' placeholder="Phrase" onChange={(e) => setPhrase(e.target.value)} spellCheck='false' />
      <input type='number' placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
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
            {caesarCipherSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default CaesarCipher
