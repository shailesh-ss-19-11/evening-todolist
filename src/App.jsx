// jsx ---> javascript xml 

import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Todo from "./todolist/Todo";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./Page404";


const App = () => {
  return (
    <>
      {/* <h1>Hellow world</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, ad!</p>
      <Counter /> */}
      <Header />

      <Routes>
        {/* <Route path="/home" Component={Home} /> */}
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/todo-list" element={<Todo/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>

      {/* <Todo /> */}
    </>
  )
}

export default App;