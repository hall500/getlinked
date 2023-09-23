import Image from 'next/image'
import Header from './components/home/Header'
import Introduction from './components/home/Introduction'
import Rules from './components/home/Rules'
import Judging from './components/home/Judging'
import Questions from './components/home/Questions'
import Timeline from './components/home/Timeline'
import Prize from './components/home/Prize'
import Partner from './components/home/Partner'
import Privacy from './components/home/Privacy'

export default function Home() {
  return (
      <div>
        <Header />
        <Introduction />
        <Rules />
        <Judging />
        <Questions />
        <Timeline />
        <Prize />
        <Partner />
        <Privacy />
      </div>
  )
}
