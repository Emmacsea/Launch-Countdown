import { useEffect, useState } from "react";
import fb from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import pinte from "../assets/images/icon-pinterest.svg";

export default function Launch () {
   const launchDay = new Date('2025-11-10T00:00:00');
   const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
   })

   useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date();
        const differences = launchDay - now;


        console.log('Current Time:', now); // Log current time
            console.log('Launch Time:', launchDay); // Log launch time
            console.log('Time Difference (ms):', differences); // Log time difference


        if(differences <= 0){
            clearInterval(interval);
            return;
        }



        const calculateTimeRemaining = (diff) => {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60 ));
        const seconds = Math.floor((diff % (1000 * 60)) / (1000));

        return({days, hours, minutes, seconds})


        }

        setTimeRemaining(calculateTimeRemaining(differences));


    }, 1000);


    return () => clearInterval(interval);


   }, [launchDay])


    return(
        <div className="bg-gradient-to-b from-neutral-verydarkblue to-neutral-vdarkblue flex justify-center items-center h-screen w-full">
            <div className="flex flex-col justify-center items-center">

                <div className="text-neutral-white text-2xl font-bold uppercase mb-8">We&apos;re launching soon</div>

            <div className="flex space-x-4 items-center ">
                <div className="flex flex-col justify-center space-y-3 items-center">
                <p className="bg-primary-grayishblue p-4 text-primary-softred rounded-md text-6xl font-bold">{timeRemaining.days}</p>
                    <span className="text-primary-grayishblue text-lg uppercase font-medium">Days</span>
                </div>

                <div className="flex flex-col justify-center space-y-3 items-center">
                <p className="bg-primary-grayishblue p-4 text-primary-softred rounded-md text-6xl font-bold">{timeRemaining.hours}</p>
                    <span className="text-primary-grayishblue text-lg uppercase font-medium">Hours</span>
                </div>

                <div className="flex flex-col justify-center space-y-3 items-center">
                <p className="bg-primary-grayishblue p-4 text-primary-softred rounded-md text-6xl font-bold">{timeRemaining.minutes}</p>
                    <span className="text-primary-grayishblue text-lg uppercase font-medium">Minutes</span>
                </div>

                <div className="flex flex-col justify-center space-y-3 items-center">
                    <p className="bg-primary-grayishblue p-4 text-primary-softred rounded-md text-6xl font-bold">{timeRemaining.seconds}</p>
                    <span className="text-primary-grayishblue text-lg uppercase font-medium">Seconds</span>
                </div>

            </div>

            <div className="flex space-x-4 items-center">
                <div><img className="w-7" src={fb} alt="" /></div>
                <div><img className="w-7" src={pinte} alt="" /></div>
                <div><img className="w-7" src={insta} alt="" /></div>
            </div>

            </div>

        </div>
    )
}