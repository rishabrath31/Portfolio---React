import { ThemeProvider } from '@/hooks/use-theme'
import Header from '@/layout/Header'
import Hero from '@/sections/Hero'
import Profile from '@/sections/Profile'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Certifications from '@/sections/Certifications'
import Contact from '@/sections/Contact'
import Footer from '@/layout/Footer'
import '@/styles/globals.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="rishab-portfolio-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <Profile />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
