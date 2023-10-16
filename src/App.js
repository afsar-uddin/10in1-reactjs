import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Form } from 'react-router-dom';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Header from './components/Header';
import Todo from './pages/Todo';
import Meal from './pages/Meal';
import Calculatro from './pages/Calculatro';
import ToggleButtonColor from './pages/ToggleButtonColor';
import HiddenSearchBar from './pages/HiddenSearchBar';
import Testimonial from './pages/Testimonial';
import Accordion from './accordion/Accordion';
import FormValidate from './pages/FormValidate';
import FilterProducts from './productsfilter/FilterProducts';

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
            <Route path="/meal" element={<Meal />}></Route>
            <Route path="/calculator" element={<Calculatro />}></Route>
            <Route path="/togglebuttoncolor" element={<ToggleButtonColor />}></Route>
            <Route path="/searchbar" element={<HiddenSearchBar />}></Route>
            <Route path="/testimonial" element={<Testimonial />}></Route>
            <Route path="/accordion" element={<Accordion />}></Route>
            <Route path="/form-validate" element={<FormValidate />}></Route>
            <Route path="/filter-products" element={<FilterProducts />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
