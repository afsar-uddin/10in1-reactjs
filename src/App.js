import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Header from './components/Header';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>

            <Route path="/" element={<Home />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/todo" element={<Todo />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
