
import './App.css';
import Allstudent from './components/Allstudent';
import Favstudent from './components/Favstudent';
import Header from './components/Header';
import Context from './data/Context';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Context>
        <Header />

        <Routes>
          <Route path='/' element={<Allstudent />} />
          <Route path='/favourite' element={<Favstudent />} />

        </Routes>


      </Context>

    </div>
  );
}

export default App;
