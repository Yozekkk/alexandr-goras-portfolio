import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Events } from './components/Events'
import { Books } from './components/Books'
import { Footer } from './components/Footer'

export default function App() {
  return <>
    <a className="skip-link" href="#main">К основному содержимому</a>
    <Header />
    <main id="main">
      <Hero />
      <Events />
      <Books />
    </main>
    <Footer />
  </>
}
