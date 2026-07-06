import React from 'react'
import {useState,useEffect} from 'react'
import { users_api } from '../services/users'
import axios from 'axios'


const useUsers = () => {
    const [loading,setLoading]=useState(true);
    const [users,setUsers]=useState([]);
    const [singleuser,setSingleuser]=useState([]);
    const [errors,setErrors]=useState("");


    const fetchUsers = async()=>{
        try{
            const user= await axios.get(`${users_api}`)
            setUsers(user.data);
        }catch(error){
            setErrors(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        const timer =setTimeout(()=>{
            fetchUsers();
        },2000)

        return ()=>clearTimeout(timer);
    },[])

    const fetchSingleUser=async(id)=>{
        try{
            setLoading(true);
            
            const single=await axios.get(`${users_api}/${id}`)
            setSingleuser(single.data);
            setErrors("");
        }catch(error){
            setErrors(error.message);
        }finally{
            setLoading(false);
        }

    }





  return (
    {
        users,
        loading,
        errors,
        singleuser,
        fetchSingleUser,
        fetchUsers
    }
  )
}

export default useUsers