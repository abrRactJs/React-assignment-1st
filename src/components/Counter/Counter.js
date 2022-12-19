import React from 'react';
import './Counter.css'

const Counter = (props) => {
    const profile = props.profile;
    console.log(profile)
    let salary = 0;
    for(let i=0; i<profile.length;i++){
            const oneSalary = profile[i].salary;
            salary = salary + oneSalary
    }
    return (
        <div className='counter'>
            <h3>Freinds you Adedd : {profile.length} </h3> 
            <h4>Freinds Salary : {salary} </h4>
            <h5>Total Salary : {salary + salary}</h5>
            <button>View Profile Information</button>
        </div>
    );
};

export default Counter;