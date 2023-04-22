import './index.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';
import Mainnewspage from './components/mainnewspage';



const App = () => {


  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainnewspage />} />
        <Route path="/:id" element={<Mainnewspage />} />
        {/* <Route path="/main" element={<Mainnewspage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

