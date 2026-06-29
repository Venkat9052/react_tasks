import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import styles from "../styles/Effect.module.css"
import { Toaster, toast } from 'sonner'


const UseEffecttask = ({ user }) => {

    const [students, setStudents] = useState([]);
    const [count,setCount]=useState(0);


    // increment logic .................................

    const increment=()=>{
        setCount((prev)=>prev + 1);
    }
    // decrement logic ..............................

    const decrement = () => {
    setCount((prev) => prev > 0 ? prev - 1 : 0);}

    // reset logic .................................
    const reset=()=>setCount(0);


    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                const data = await response.json();

                setStudents(data);

                toast.success("success we fetched students sucessfully", {
                    style: {
                        background: "#37f134",
                        border: "0.2rem solid #4df007",
                        color: "white"

                    }
                })
            }
            catch (error) {
                toast.error("oops getting error while fetching api", {
                    style: {
                        background: "#0ae818",
                        border: "0.2rem solid #49f007",
                        color: "white"
                    }
                })
            }
        }
        fetchStudents();
    }, []);




    useEffect(()=>{
        document.title=`Count : ${count}`
    },[count])

    return (
        <>
            <Navbar />
            <div className={`${styles.main}`}>
                <div className={`${styles.effect1sec}`}>
                    {students.map((student, index) => {
                        return (<div key={student.id} className={`${styles.stucard}`}>
                            <h3>Student Number: {index + 1}</h3>
                            <div className={`${styles.studetails}`}>
                                <p>Name: <span>{student.name}</span></p>
                                <p>Username:<span>{student.username}</span></p>
                                <p>Email: <span>{student.email}</span></p>
                                <p>City: <span>{student.address.city}</span></p>
                            </div>
                        </div>)
                    })}
                </div>

            {/* second effect using dependency array  ............... */}
            <div className={`${styles.effect2}`}>
                <div className={`${styles.counter}`}>
                    <h3>Count:<span>{count}</span></h3>
                    <div className={`${styles.counterbtns}`}>
                        <button onClick={increment} className={`${styles.inc}`}>Inc ++</button>
                        <button onClick={decrement} className={`${styles.dec}`}>Dec - -</button>
                        <button onClick={reset} className={`${styles.reset}`}>Reset</button>
                    </div>
                </div>
            </div>
            
            </div>
            
            <Toaster position="top-right" />
        </>
    )
}

export default UseEffecttask