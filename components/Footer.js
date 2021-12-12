const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full py-1 static bottom-0 text-xs
      bg-cloth-pattern dark:bg-none dark:bg-brand-dark border-t dark:border-none'>
      <a href='#top' aria-label='Scroll back up'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 text-gray-700 hover:text-brand transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  )
}

export default Footer
