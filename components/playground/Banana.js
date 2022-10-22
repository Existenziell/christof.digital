import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { bananaSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const Banana = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="experiment">
      <h2>The infamous baNaNa</h2>
      {/* <p>{`"b" + "a" + +"a" + "a" =>  'baNaNa'`}</p> */}
      <p>
        Unconsidered JavaScript type casting results in hilarious results.<br />
        This example is a classic, but actually remastered from an even older original:<br />
        {`"foo" + +"bar"  =>  'fooNaN'`}
      </p>
      <input type='text' disabled value={`"b" + "a" + +"a" + "a"`} spellCheck='false' />
      <div className="output">Output: {'baNaNa'}</div>

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
            {bananaSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default Banana
