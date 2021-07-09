import './App.css';
import About from './components/About';
import ExamSection from './components/ExamSection';
import Header from './components/Header';
import Faq from './components/Faq'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <ExamSection/>
      <About />
      <Faq />
      <Footer />

    </div>
  );
}

export default App;
