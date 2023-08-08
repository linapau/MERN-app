import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './landingPage/landingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsrNotes from './notesPage/usrNotes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} exact/>
          <Route path='/notes' element={<UsrNotes />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
