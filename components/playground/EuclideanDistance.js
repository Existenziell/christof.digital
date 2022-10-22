import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { euclideanDistance } from "../../util/euclideanDistance"
import { euclideanDistanceSnippet } from '../../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const EuclideanDistance = () => {
  const [pointA, setPointA] = useState()
  const [pointB, setPointB] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pointA && pointB) {
      const output = euclideanDistance(pointA.split(','), pointB.split(','))
      setOutput(output)
    }
  }, [pointA, pointB])

  return (
    <div className="experiment">
      <h2>Euclidean Distance</h2>
      <p>
        Calculates the distance between two points in any number of dimensions.
        Uses Object.keys() to map each coordinate to its difference between the two points.
        Uses Math.hypot() to calculate the Euclidean distance between the two points.
      </p>
      <input type='text' placeholder="Point A (e.g. 2,3)" onChange={(e) => setPointA(e.target.value)} spellCheck='false' />
      <input type='text' placeholder="Point B (e.g. 4,1)" onChange={(e) => setPointB(e.target.value)} spellCheck='false' />
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
            {euclideanDistanceSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default EuclideanDistance
