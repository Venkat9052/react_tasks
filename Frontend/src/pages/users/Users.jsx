import React, { useEffect, useState } from "react";
import axios from "axios";
import useUsers from "../../hooks/useUsers"
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import styles from "../users/users.module.css";
import Searchbar from "../../components/Searchbar";
import forwardlogo from "../../assets/forwardlogo.png";
import backwardlogo from "../../assets/backwardlogo.png";
import Retry from "../../components/Retry";
import { Link,useNavigate } from "react-router-dom";

const Users = () => {
    const { users, loading, errors, fetchUsers } = useUsers();
    const [search, setSearch] = useState("");
    const [currentpage, setCurrentpage] = useState(1);

    const navigate=useNavigate();

    if (loading) {
        return <Loader />;
    }

    if (errors) {
        return (
            <Retry
                error={errors}
                onRetry={fetchUsers}
            />
        )
    }

    const filteredUsers = users.filter((user) => {
        const searchTerm = search.trim().toLowerCase();

        return (
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.address.city.toLowerCase().includes(searchTerm) ||
            user.company.name.toLowerCase().includes(searchTerm)
        );
    });

    const Usersperpage = 4;

    const lastUserIndex = currentpage * Usersperpage;
    const firstUserIndex = lastUserIndex - Usersperpage;

    const currentUsers = filteredUsers.slice(
        firstUserIndex,
        lastUserIndex);

    const totalPages = Math.ceil(
        filteredUsers.length / Usersperpage
    );

    const next = () => {
        setCurrentpage((prev => prev < totalPages ? prev + 1 : totalPages));
    }

    const prev = () => {
        setCurrentpage((prev) => prev > 1 ? prev - 1 : 1);
    }

    return (
        <>
            <div className={`${styles.main}`}>

                <div className={`${styles.controller}`}>
                    <div className={`${styles.searchbar}`}>
                        <h1>Search Users </h1>
                        <Searchbar
                            search={search}
                            setSearch={(value) => {
                                setSearch(value);
                                setCurrentpage(1);
                            }}
                        /></div>
                    <div className={`${styles.container}`}>
                        <div className={`${styles.user}`}>
                            <table>
                                <thead className={styles.tablehead}>
                                    <tr className={styles.headrow}>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Company</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.tablebody}>
                                    {filteredUsers.length > 0 ? (
                                        currentUsers.map((user) => (
                                            <tr key={user.id} className={styles.bodyrow} onClick={()=>navigate(`/dashboard/users/${user.id}`)}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.address.city}</td>
                                                <td>{user.company.name}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className={styles.noData}>
                                                No users found matching "{search}"
                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>

                        {filteredUsers.length > 0 && (
                            <div className={styles.pagination}>
                                <button
                                    onClick={prev}
                                    disabled={currentpage === 1}
                                >
                                    <img src={backwardlogo} alt="Previous" style={{
                                        height:"15px",
                                        width:"15px"
                                    }}/>
                                </button>

                                <span>
                                    {currentpage} / {totalPages}
                                </span>

                                <button
                                    onClick={next}
                                    disabled={currentpage === totalPages}
                                >
                                    <img
                                        src={forwardlogo}
                                        alt="Next"
                                        className={styles.forward}
                                    />
                                </button>
                            </div>
                        )}

                    </div>

                </div>



            </div>
        </>
    );
};

export default Users;