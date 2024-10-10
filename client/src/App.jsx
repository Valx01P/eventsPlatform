import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../public/pages/Home'
import Location from '../public/pages/Location'
import Event from '../public/pages/Event'
import Header from '../public/components/Header';

const App = () => {

  return (
    <>
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations/:locationId" element={<Location />} />
            <Route path="/locations/:locationId/events/:eventId" element={<Event />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
