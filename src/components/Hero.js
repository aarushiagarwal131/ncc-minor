import React from 'react'
import logo from "../images/1.jpg";
const Hero = () => {
    return ( 

        <div class="flex flex-col md:flex-row px-5 py-13">
        <div class="md:basis-1/2 font-sans px-4 py-6 md:px-12 md:py-10">
            <div class="text-blue-400 text-xl md:text-2xl">Info</div>
            <div class="text-black-400 text-xl font-semibold py-2 md:py-4">21 Punjab Battalion NCC</div>
            <div class="text-slate-400 py-2 md:py-4 text-base md:text-lg">NCC welcomes the cadets to a world of patriotism, discipline, adventure, courage, and motivation. It is important to remember that becoming a good NCC cadet is not an easy task. A lot of hard work and dedication is required to achieve the expected goal. Here, in NCC, you are taught to be a good leader, a decision maker, a good team member, and be a disciplined citizen. The National Cadet Corps (NCC) engages in grooming the youth into disciplined, patriotic citizens. At NITJ, it plays an important role in molding students into invaluable assets of the country.</div>
        </div>
        <div class="md:basis-1/2 grow px-4 py-6 md:px-10 md:py-10">
            <img class="h-45 max-w-full md:max-w-lg rounded-lg mx-auto" src={logo} alt="Logo" />
        </div>
    </div>
    
    )
}

export default Hero