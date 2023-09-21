import Image from 'next/image'
import Header from './components/home/Header'
import Introduction from './components/home/Introduction'
import Rules from './components/home/Rules'
import Judging from './components/home/Judging'
import Questions from './components/home/Questions'

export default function Home() {
  return (
      <div>
        <Header />
        <Introduction />
        <Rules />
        <Judging />
        <Questions />
      </div>
  )
}
