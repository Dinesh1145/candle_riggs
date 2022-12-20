import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookVenue from './components/BookVenue';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './utils/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-venue" element={<BookVenue />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
