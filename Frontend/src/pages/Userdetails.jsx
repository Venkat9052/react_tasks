import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import useUsers from '../hooks/useUsers';
import Loader from "../components/Loader";
import styles from "../styles/pagesstyling/userspage.module.css";
import userimage from "../assets/userimage.png"
import goback from "../assets/goback.png"
import { useNavigate } from 'react-router-dom';


const Userdetails = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const { singleuser, fetchSingleUser, loading } = useUsers();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSingleUser(id);
    }, 1500)

    return () => clearTimeout(timer);
  }, [id])


  if (loading) {
    return <Loader />
  }

  console.log("ID:", id);
  console.log("User:", singleuser);

  return (
    <>
      <button className={`${styles.goback}`} onClick={()=>navigate("/dashboard/users")}><img src={goback}/></button>
      <div className={`${styles.main}`}>
        <div className={`${styles.imagebox}`}>
        <div className={`${styles.imagecontainer}`}>
        <img  src={`${userimage}`} alt="user profile"/>

        </div>
        </div>
    
  <div className={styles.card}>
  <div className={styles.infoRow}>
    <span className={styles.label}>Name</span>
    <span className={styles.value}>{singleuser.name}</span>
  </div>

  <div className={styles.infoRow}>
    <span className={styles.label}>Username</span>
    <span className={styles.value}>{singleuser.username}</span>
  </div>

  <div className={styles.infoRow}>
    <span className={styles.label}>Email</span>
    <span className={styles.value}>{singleuser.email}</span>
  </div>

  <div className={styles.infoRow}>
    <span className={styles.label}>Phone</span>
    <span className={styles.value}>{singleuser.phone}</span>
  </div>

  <div className={styles.infoRow}>
    <span className={styles.label}>Website</span>
    <span className={styles.value}>{singleuser.website}</span>
  </div>

  <div className={styles.infoRow}>
    <span className={styles.label}>City</span>
    <span className={styles.value}>{singleuser.address?.city}</span>
  </div>

  <div className={styles.infoRow}>
    <span className={styles.label}>Company</span>
    <span className={styles.value}>{singleuser.company?.name}</span>
  </div>
</div>

      </div>
    </>
  )
}

export default Userdetails