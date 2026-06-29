import React from 'react'
import styles from "../styles/profilecard.module.css";


const ProfileCard = ({ user }) => {
    return (
        <> 
        <div className={styles.main}> 
        {user.map((student)=>{
            return( 
            <div className={styles.container}>

                <div className={styles.top}>
                    <div className={styles.image}>
                        <img src={student.image} alt="profile" />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.details}>
                        <p>Name: {student.name}</p>
                        <p>Branch: {student.branch}</p>
                        <p>Location: {student.address.state}</p>
                        <p>BloodGroup: {student.bloodGroup}</p>
                    </div>
                </div>
            </div>
            )
        })
        }
        </div>
        </>
    );
};

export default ProfileCard;