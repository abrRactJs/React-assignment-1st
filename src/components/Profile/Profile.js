import React from 'react';
import './Profile.css'

const Profile = (props) => {
const {first_name, email, phone,  address, photo,salary} = props.proInfo;


    return (
        <div className='profile'>
            <img src={photo} alt="" />
           <h2>Name : {first_name}</h2>
           <p>Salary : {salary} $ </p>
           <p>Email :{email}</p>
           <p>Phone No:{phone} </p>
           <p>Address :{address}</p>
           <button onClick={()=>props.handleProfile(props.proInfo)}>Add freind</button>
        </div>
    );
};

export default Profile;