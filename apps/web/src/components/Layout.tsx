import { Outlet } from 'react-router-dom'
import BackgroundEffects from './BackgroundEffects'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-void text-text overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
