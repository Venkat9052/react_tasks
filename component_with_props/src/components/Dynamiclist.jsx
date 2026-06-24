import React from 'react'
import { useState, useRef } from 'react'
import styles from "../styles/dynamic.module.css"
import { Toaster, toast } from 'sonner'
const Dynamiclist = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);

    const name = useRef(null);
    const regno = useRef(null);
    const course = useRef(null);
    const bloodgroup = useRef(null);
    const mobile = useRef(null);

    const isFormValid = name.current?.value.trim() &&
        regno.current?.value.trim() &&
        course.current?.value.trim() &&
        mobile.current?.value.trim() &&
        bloodgroup.current?.value.trim()


    const showallstudents = () => {
        setShow(!show);
    }

    const addStudents = (e) => {
        e.preventDefault();

        const student = {
            name: name.current.value.trim(),
            regno: regno.current.value.trim(),
            course: course.current.value.trim(),
            mobile: mobile.current.value.trim(),
            bloodgroup: bloodgroup.current.value.trim()
        };

        const isFormValid =
            student.name &&
            student.regno &&
            student.course &&
            student.mobile &&
            student.bloodgroup;

        if (!isFormValid) {
            toast.error("All fields must be filled", {
                style: {
                    background: "#da4343",
                    border: "0.2rem solid #f00707",
                    color: "white"
                }
            });
            return;
        }

        setList(prev => [...prev, student]);

        toast.success("Student added to register", {
            style: {
                background: "#22c55e",
                color: "white",
                border: "1px solid #16a34a"
            }
        });

        // Clear inputs
        name.current.value = "";
        regno.current.value = "";
        course.current.value = "";
        mobile.current.value = "";
        bloodgroup.current.value = "";
    };

    const resetStudents=()=>{
        setList([]);
    }

    return (
        <>
            <div className={`${styles.main}`}>
                <form onSubmit={addStudents}>
                    <h3>Dynamic listing</h3>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="name" placeholder=" " ref={name} />
                        <label htmlFor='name'>Name</label>
                    </div>

                    <div className={`${styles.inputs}`}>
                        <input type="text" id="regno" placeholder=" " ref={regno} />
                        <label htmlFor='regno'>Reg.no</label>
                    </div>

                    <div className={`${styles.inputs}`}>
                        <input type="text" id="course" placeholder=" " ref={course} />
                        <label htmlFor='course'>Course</label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="mobile" placeholder=" " ref={mobile} />
                        <label htmlFor='mobile'>mobile</label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="bloodgroup" placeholder=" " ref={bloodgroup} />
                        <label htmlFor='bloodgroup'>Blood group</label>
                    </div>
                    <div className={`${styles.button}`}>
                        <button type="Submit">submit</button>
                        <button type="button" onClick={showallstudents}>all students</button>
                    </div>

                </form>

                {show && (
                    list.length === 0 ? (
                        <div className={styles.hidecontainer}>
                            <p>Total number of students: {list.length}</p>
                            <p>No student has been added yet</p>
                        </div>
                    ) : (
                        <div className={styles.hidecontainer}>
                            <p>Total number of students: {list.length}</p>
                            {list.map((student, index) => (
                                <>
                                <div key={index} className={styles.name}> 
                                    <p><span>Name:</span> {student.name}</p>
                                    <p><span>Reg No: </span>{student.regno}</p>

                                </div>
                                </>
                            ))}
                            <div className={`${styles.reset}`}>
                                    <button onClick={resetStudents}>reset</button>
                            </div>
                        </div>
                    )
                )}
            </div>
            <Toaster position='top-right' />
        </>
    )
}

export default Dynamiclist