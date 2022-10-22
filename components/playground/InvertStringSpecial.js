import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { invertStringSpecial } from "../../util/invertStringSpecial"
import { invertStringSpecialSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const InvertStringSpecial = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const output = invertStringSpecial(input)
    setOutput(output)
  }, [input])

  return (
    <div className="experiment">
      <h2>Invert string - but only the letters</h2>
      <p>
        {`__aa**bb))cc  =>  __cc**bb))aa`}<br />
        {`xxx-yyy&&zzz7qqq  =>  qqq-zzz&&yyy7xxx`}
      </p>
      <input type='text' placeholder="Enter String" onChange={(e) => setInput(e.target.value)} spellCheck='false' />
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
            {invertStringSpecialSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default InvertStringSpecial
