import Quote from '@/components/yoga/Quote'
import YogaTabs from '@/components/yoga/YogaTabs'

export default function YogaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      <h1 className="header">Yoga</h1>
      <p className="intro-text">
        Yoga had quite an impact on my life. A groundbreaking one, in fact - it changed so much, so drastically, for the better.
      </p>
      <Quote text="Make your breath louder than your thoughts" />
      <YogaTabs />
      {children}
    </div>
  )
}
