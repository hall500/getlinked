import Image from 'next/image'
import Header from './components/home/Header'
import Introduction from './components/home/Introduction'

export default function Home() {
  return (
      <div>
        <Header />
        <Introduction />
      </div>
  )
}
