import { NavBar } from './components/nav-bar'
import { HeroSection } from './components/hero-section'
import { StatsSection } from './components/stats-section'
import { ChallengesSection } from './components/challenges-section'
import { ContactForm } from './components/contact-form'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <StatsSection />
        <ChallengesSection />
        <ContactForm />
      </main>
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>&copy; 2023 StartBrite. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

