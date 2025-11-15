import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import ParentComponent from "./usecallback/ParentComponent";
import ParentComponent1 from "./learnchildrenprop/ParentComponent1";
import ChildComponent1 from "./learnchildrenprop/ChildComponent1";
import LearnUseMemo from "./components/LearnUseMemo";
import Login from "./auth/Login";
import Protected from "./auth/Protected";
import User from "./pages/User";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";

// Lazy load all components
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Page404 = React.lazy(() => import("./Page404"));
const Todo = React.lazy(() => import("./todolist/Todo"));
const Users = React.lazy(() => import("./users/Users"));
const AddUser = React.lazy(() => import("./users/AddUser"));
const UpdateUser = React.lazy(() => import("./users/UpdateUser"));
const UserInfo = React.lazy(() => import("./users/UserInfo"));

const App = () => {
  return (
    <>
      <div className="p-5 text-center">
        <Suspense fallback={<Loader />}>
          <Header />
        </Suspense>
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/about" element={<About />} >
            <Route path="userinfo" element={<User />} />
            <Route path="products" element={<Products />} />
            <Route path="team" element={<Team />} />
            <Route path="portfolio" element={<Portfolio/>} />
          </Route>
          <Route path="/contact" element={<Contact />} />



          <Route path="/todo-list" element={
            <Protected>
              <Todo />
            </Protected>

          } />
          <Route path="/users" element={<Protected><Users /></Protected>} />
          <Route path="/users/add-user" element={<AddUser />} />
          <Route path="/users/edit-user/:userId" element={<UpdateUser />} />
          <Route path="/users/userinfo/:userId" element={<UserInfo />} />
          <Route path="/usecallback-lazyloading" element={<ParentComponent />} />
          <Route path="/usememo-example" element={<LearnUseMemo />} />
          <Route path="/children-prop" element={

            <ParentComponent1>
              <ChildComponent1 name="shailesh" />
            </ParentComponent1>

          } />
          <Route path="*" element={<Page404 />} />
        </Routes>

      </Suspense>
    </>
  );
};

export default App;
