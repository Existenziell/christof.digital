interface BlobProps {
  node: React.ReactNode
}

export default function Blob({ node }: BlobProps) {
  return (
    <div className='relative'>
      <div className='absolute top-0 -left-4 w-72 h-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
      <div className='absolute top-0 -right-4 w-72 h-36 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000' />
      <div className='absolute -bottom-8 left-20 w-72 h-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000' />
      {node}
    </div>
  )
}
