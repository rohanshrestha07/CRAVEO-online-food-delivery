import React, { useEffect, useState } from 'react'

export default function RealTime() {
    const [dateTime, setDateTime] = useState({
        date: '',
        time: '',
        day: ''
    });
    
    useEffect(() => {
        const updateDateTime = () => {
        const now = new Date();
          const options = { weekday: 'long' }; // To get the day of the week
        const day = new Intl.DateTimeFormat('en-US', options).format(now);
    
        setDateTime({
            date: now.toLocaleDateString(), // e.g. "09/09/2024"
            time: now.toLocaleTimeString(), // e.g. "10:52:34 AM"
            day: day // e.g. "Monday"
        });
        };
    
        updateDateTime(); // Call initially
        const intervalId = setInterval(updateDateTime, 1000); // Update every second
    
        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <p>Today is: {dateTime.day}</p>
            <p>Date: {dateTime.date}</p>
            <p>Time: {dateTime.time}</p>
        </div>
    );
}
