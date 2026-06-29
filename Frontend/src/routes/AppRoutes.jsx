import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

//components impoting .............................................

import Props_sample from '../components/Props_sample'
import LoginPage from '../components/LoginPage.jsx';
import ProfileCard from '../components/ProfileCard';
import Counter from "../components/Counter"
import EventHandling from '../components/EventHandling';
import students from "../services/Profiles.js"
import styles from "../styles/props.module.css";
import AllEventhandler from '../components/AllEventhandler.jsx';
import Conditionbasedhandler from '../components/Conditionbasedhandler.jsx';
import Dynamiclist from '../components/Dynamiclist.jsx';
import UserRegistration from '../components/UserRegistration.jsx';
import Todolist from '../components/Todolist.jsx';
import Addtodo from '../components/Addtodo.jsx';
import Navbar from '../components/Navbar.jsx';
import Homepage from "../pages/Homepage.jsx";
import About from '../pages/About.jsx';
import TaskPage from '../pages/TaskPage.jsx';
import UseEffecttask from '../components/UseEffecttask.jsx';
import AxiosFetching from '../components/AxiosFetching.jsx';
import Products from '../components/Products.jsx';
import ProductDescription from '../pages/ProductDescription.jsx';
import Cart from '../components/Cart.jsx';

const AppRoutes = () => {

    const [userinfo, setuserinfo] = useState(null);

    //states and functions of todo list 
    const [todo, setTodo] = useState([]);

    const addTodo = (task) => {
        setTodo((prev) => [...prev, task]);
    }

    const Deletetodo = () => {
        console.log("delete todo");
    }

    const greetings = (students) => {
        setuserinfo(students);
    }





    return (
        <>
    {/* <div className={styles.main}>
    {
      userinfo ? (userinfo.map((indi)=>{
      return(<div className={styles.container}>
            <h1>Name:{indi.name}</h1>
            <h2>Age:{indi.age}</h2>
            <p>branch:{indi.branch}</p>
            <p>college:{indi.college}</p>
            <ul>
              <li>village: {indi.address.village}</li>
              <li>pincode: {indi.address.pin}</li>
              <li>Mandal: {indi.address.mandal}</li>
              <li>District: {indi.address.dist}</li>
              <li>State: {indi.address.state}</li>
            </ul>
              </div>)})):(null)}
    </div> */}

            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/profile" element={<ProfileCard user={students} />}></Route>
                    <Route path="/props" element={<Props_sample user={students} greet={greetings} />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>
                    <Route path="/events" element={<EventHandling />}></Route>
                    <Route path="/allevents" element={<AllEventhandler />}></Route>
                    <Route path="/condition" element={<Conditionbasedhandler />}></Route>
                    <Route path="/condition" element={<Conditionbasedhandler />}></Route>
                    <Route path="/dynamic" element={<Dynamiclist />}></Route>
                    <Route path="/register" element={<UserRegistration />}></Route>
                    <Route path="/todo" element={<><Todolist Todo={todo} /></>} ></Route>
                    <Route path="/todo/add" element={<Addtodo addTodo={addTodo} />} ></Route>
                    <Route path="/tasks" element={<TaskPage />} ></Route>
                    <Route path="/effect" element={<UseEffecttask user={students} />} ></Route>
                    <Route path="/axios" element={<AxiosFetching />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/products/:id" element={<ProductDescription />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>


                </Routes>
            </AnimatePresence>



        </>
    )
}

export default AppRoutes