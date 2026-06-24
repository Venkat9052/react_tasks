import React, { useState, useEffect } from 'react';
import styles from "../styles/Axiosfetching.module.css";
import axios from "axios";
import { Toaster, toast } from "sonner";
import addicon from "../assets/addicon.png";
import edit_icon from "../assets/edit_icon.png";
import delete_icon from "../assets/delete_icon.png";
import PageTransition from "./PageTransition";
import {Link}from 'react-router-dom'

const AxiosFetching = () => {
    const URL = "https://6a3a2e51917c7b14c74ce86f.mockapi.io/api/v1/students";

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const get_students = async () => {
        try {
            const response = await axios.get(URL);

            console.log("api fetched");
            setStudents(response.data);

            toast.success("Data fetched successfully", {
                style: {
                    background: "#22c55e",
                    color: "white",
                    border: "1px solid #16a34a"
                }
            });
        } catch (error) {
            console.log("oops error while fetching students", error);

            toast.error("Oops error while fetching students", {
                style: {
                    background: "#da4343",
                    border: "0.2rem solid #f00707",
                    color: "white"
                }
            });
        } finally {
            setLoading(false);
        }
    };

    const edit_students = async (id, updatedData) => {
        try {
            const res = await axios.patch(
                `${URL}/${id}`,
                updatedData
            );

            console.log("Student updated:", res.data);

            toast.success("Student updated successfully", {
                style: {
                    background: "#22c55e",
                    color: "white",
                    border: "1px solid #16a34a"
                }
            });

        } catch (error) {
            console.log(error);

            toast.error("Oops getting error while updating student", {
                style: {
                    background: "#da4343",
                    border: "0.2rem solid #f00707",
                    color: "white"
                }
            });
        }
    };

    const delete_student = async (id) => {
        try {
            await axios.delete(`${URL}/${id}`);

            setStudents((prevStudents) =>
                prevStudents.filter(
                    (student) => student.id !== id
                )
            );

            toast.success("Student deleted successfully", {
                style: {
                    background: "#22c55e",
                    color: "white",
                    border: "1px solid #16a34a"
                }
            });

        } catch (error) {
            console.log(error);

            toast.error("Student not found", {
                style: {
                    background: "#da4343",
                    border: "0.2rem solid #f00707",
                    color: "white"
                }
            });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            get_students();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <PageTransition>
                {loading ? (
                    <div className={styles.loader}>
                        <div className={styles.loading}>
                            <span>Loading.....</span>
                        </div>
                    </div>
                ) : (
                    <div className={styles.main}>
                        {students.map((student, index) => {
                            return (
                                <div
                                    key={student.id}
                                    className={styles.stucard}
                                >
                                    <div className={styles.crud}>
                                        <h3>
                                            Student No:
                                            <span>{index + 1}</span>
                                        </h3>

                                        <button>
                                            <img
                                                src={edit_icon}
                                                alt="edit"
                                            />
                                        </button>

                                        <button
                                            onClick={() =>
                                                delete_student(student.id)
                                            }
                                        >
                                            <img
                                                src={delete_icon}
                                                alt="delete"
                                            />
                                        </button>
                                    </div>

                                    <div className={styles.details}>
                                        <p>
                                            Name:
                                            <span>{student.name}</span>
                                        </p>

                                        <p>
                                            Mobile:
                                            <span>{student.phone}</span>
                                        </p>

                                        <p>
                                            Course:
                                            <span>{student.course}</span>
                                        </p>

                                        <p>
                                            Location:
                                            <span>{student.location}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        <div className={styles.stucard}>
                            <h3>Add Student</h3>

                            <div className={styles.details}>
                                <button>
                                <Link to="/register">
                                    <img
                                        src={addicon}
                                        alt="add student"
                                    />
                                </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <Toaster position="top-right" />
            </PageTransition>
        </>
    );
};

export default AxiosFetching;