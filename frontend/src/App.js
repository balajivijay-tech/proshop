import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' element={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
