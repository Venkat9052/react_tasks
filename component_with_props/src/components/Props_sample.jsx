import React from 'react'

const Props_sample = ({user,greet}) => {
    // const {name,age,branch,college,Address}= user
  return (
    <>
{/* //nrml props recieving */}

    {/* <div>
        <h1>Name:{props.name}</h1>
        <h1>Age:{props.age}</h1>
    </div> */}

{/* //recieving props as an object */}
    {/* <div>
        <h1>Name:{user.name}</h1>
        <h2>Age:{user.age}</h2>
        <p>branch:{user.branch}</p>
        <p>college:{user.college}</p>
        <h2>Address</h2>
        <ul>
            <li>village: {user.Address.village}</li>
            <li>pincode: {user.Address.pin}</li>
            <li>Mandal: {user.Address.mandal}</li>
            <li>District: {user.Address.dist}</li>
            <li>State: {user.Address.state}</li>
        </ul>
    </div> */}

{/* //prop destrcturing */}

        {/* <div>
        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
        <p>branch:{branch}</p>
        <p>college:{college}</p>
        <h2>Address</h2>
        <ul>
            <li>village: {Address.village}</li>
            <li>pincode: {Address.pin}</li>
            <li>Mandal: {Address.mandal}</li>
            <li>District: {Address.dist}</li>
            <li>State: {Address.state}</li>
        </ul>
        </div> */}


{/* recieving function as a props */}
    <div>
        <button onClick={()=>greet(user)}>click me</button>
    </div>

    </>
  )
}



export default Props_sample