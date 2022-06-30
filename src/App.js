import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
       <MainHeader />
       <Routes>
         <Route path="/" element={<Body />}></Route>
       </Routes>
    </div>
  );
}

export default App;
