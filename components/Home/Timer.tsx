import React, { useState, useEffect } from 'react';


const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Function to calculate the remaining time
  function calculateTimeLeft() {
    const deadline = new Date('2024-05-03').getTime(); // Set the deadline date here
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
  

      <div className="flex md:w-full justify-between text-sm  text-black font-bold">
                                <div className="flex flex-col h-12 px- justify-between ">
                                    <p className="text-primary text-center">{timeLeft.days}</p>
                                    <p>Days</p>
                                </div>
                                <div className="flex flex-col h-12 px-3 justify-between ">
                                    <p className="text-primary text-center">{timeLeft.hours}</p>
                                    <p>Houres</p>
                                </div>
                                <div className="flex flex-col h-12 px-3 justify-between ">
                                    <p className="text-primary text-center">{timeLeft.minutes}</p>
                                    <p>Minute</p>
                                </div>
                                <div className="flex flex-col h-12 px-3 justify-between ">
                                    <p className="text-primary text-center">{timeLeft.seconds}</p>
                                    <p>Second</p>
                                </div>
                            </div>
       
       
      
  );
};

export default Timer;
