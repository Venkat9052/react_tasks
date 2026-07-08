import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import lionlogo from "../assets/lionlogo.png";
import { UserCartContext } from "../context/CartContext";
import ThemeContext from "../context/ThemeContext";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const { cart } = useContext(UserCartContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={styles.main}>
            <div className={styles.container}>

                <div className={styles.left}>
                    <div className={styles.logo}>
                        <NavLink to="/" className={styles.img}>
                            <img src={lionlogo} alt="logo" />
                        </NavLink>
                    </div>
                </div>

                <div className={styles.right}>
                    <ul className={styles.list}>

                        <li className={styles.item}>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Signup
                            </NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Cart : <span>{cart.length}</span>
                            </NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink
                                to="/tasks"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Tasks
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={styles.toggle}>
                    <button onClick={toggleTheme}>
                        {theme === "light"
                            ? "🌙 Dark"
                            : "☀️ Light"}
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;