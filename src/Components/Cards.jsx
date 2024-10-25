import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    const category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (!props.courses) return []; // Early return if courses are undefined
        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[category] || []; // Return empty array if category not found
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card 
                        course={course} 
                        key={course.id}  // Use course.id for the key
                        likedCourses={likedCourses} 
                        setLikedCourses={setLikedCourses} 
                    />
                ))
            }
        </div>
    );
};

export default Cards;
