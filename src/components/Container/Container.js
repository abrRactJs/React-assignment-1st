import React, { useState } from 'react';
import data from '../../fakData/fakData.json'
import Counter from '../Counter/Counter';
import Profile from '../Profile/Profile';
import './Container.css'

const Container = () => {
   const [profile, setProfile] = useState([])

   const handleProfile = (profileInfo) => {
      console.log("profile is clicked", profileInfo)
      const newProfile = [...profile, profileInfo]
      setProfile(newProfile)
   }
   return (
      <div className='container'>
         <div className="profile-container">
            <ul>
               {
                  data.map(data => <Profile proInfo={data} handleProfile={handleProfile} ></Profile>)
               }
            </ul>
         </div>
         <div className="profile-counter">
            <Counter profile={profile}></Counter>
         </div>
      </div>
   );
};

export default Container;