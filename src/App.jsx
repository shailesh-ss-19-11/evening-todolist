// jsx ---> javascript xml 

import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Todo from "./todolist/Todo";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./Page404";
import Users from "./users/Users";
import AddUser from "./users/AddUser";


const App = () => {
  return (
    <>
      {/* <h1>Hellow world</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, ad!</p>
      <Counter /> */}
      <div className="p-5">
        <Header />
      </div>

      <Routes>
        {/* <Route path="/home" Component={Home} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo-list" element={<Todo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add-user" element={<AddUser />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      {/* <Todo /> */}
    </>
  )
}

export default App;