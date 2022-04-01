import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import axios from 'axios';
import Main from './views/Main'
// import Update from './components/Update';
import UpdatePerson from './components/UpdatePerson';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path= "/api" />
          <Route element={<UpdatePerson/>} path="/api/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
