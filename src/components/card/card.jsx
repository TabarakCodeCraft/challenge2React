import React from 'react';
import "./card.css";
import ProgressBar from '../progressBar/progressBar';

const Card = () => {
    let arr = [
        { value: 52, title: "JavaScript", color: '#FC9861' },
        { value: 76, title: "HTML", color: '#618CFC' },
        { value: 21, title: "CSS", color: '#FC6186' }
    ];
    return (
        <div className="card">
            <h1>Your courses</h1>
            <div className="courseList">
                {arr.map((course, index) => (

                    <ProgressBar key={index} title={course.title} bgcolor={course.color} value={course.value} />
                ))}
            </div>
            <button className='btn'>View all courses</button>
        </div>
    );
}

export default Card;
