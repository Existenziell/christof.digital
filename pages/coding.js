import Layout from '../components/Layout'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const Coding = () => {

  const code = `while (me.alive) {
  me.wakeUp()
  me.eat()
  me.code()
  me.sleep()
}`

  return (
    <div className="items-center justify-content text-left w-full">
      <h1 className="text-4xl mb-8 text-center">I love Code!</h1>

      <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers={true}>
        {code}
      </SyntaxHighlighter>

      <p className='mt-8 md:w-1/2'>
        I have been developing Code since the year 2000.
        Web-Development especially has been changing so much over the years, it has been and still is a pleasure to witness all of this.
        Having worked mostly in the backend for years (PHP, Ruby on Rails, Java, nodeJS, ...) I later went Fullstack JavaScript and nowadays this distinction is rarely made any more.
        Modern tooling and build chains are just amazing and make me enjoy development even more today.<br />
        Current stack: NextJS, TailwindCSS, Vercel, JAM Stack mostly.
      </p>
      <p className='mt-8 md:w-1/2'>
        Recently I also ventured into the realms of the Blockchain, what a time to be alive! Web3 is just amazing and the pace of evolution absolutely breathtaking.
        Current stack: Solidity, HardHat, ethers.js for smart contracts – NextJS, TailwindCSS, Vercel for the dApp.
      </p>
      <div className='mt-8'>
        <h2 className='text-xl mb-2'>Further resources:</h2>
        <Link href="/cv"><a>Curriculum Vitae</a></Link><br />
        <Link href="/contact"><a>Contact me</a></Link>
      </div>

    </div>
  )
}

Coding.getLayout = function getLayout(page) {
  return (
    <Layout title="Coding">
      {page}
    </Layout>
  )
}

export default Coding
