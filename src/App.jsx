import { ThemeProvider } from '@/hooks/use-theme'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="rishab-portfolio-theme">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
