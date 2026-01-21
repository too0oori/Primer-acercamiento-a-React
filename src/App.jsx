import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
    <TwitterFollowCard isFollowing={false} formatUserName={formatUserName} userName="too0oori" name="Sofía Lagos (Tori)" />
    <TwitterFollowCard isFollowing formatUserName={formatUserName} userName="cicatepit" name="Camilo" />
    </section>
  )
}
