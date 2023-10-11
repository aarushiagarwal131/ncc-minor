import React from 'react';
import one from "./images/sony-13.jpg";
import two from "./images/sony-16.jpg";

const NCC_AT_NITJ = () =>{
    return (
      <div className="flex-grow">
        <div className="bg-gradient-to-b from-transparent via-blue-30 to-blue-50">
          <br></br>
          <br></br>
        </div>
        <div className="bg-blue-50">
          <div className="flex items-center">
            <div className="bg-blue-900 h-1 flex-grow ml-10 mr-10"></div>
            <h2 className="text-2xl font-bold text-center bg-blue-900 py-2 px-4 text-white rounded">ACTIVITES</h2>
            <div className="bg-blue-900 h-1 flex-grow ml-10 mr-10"></div>
          </div>
          <div className="flex flext-row">
            <img src={one} alt="NCC"  className="w-1/4 ml-10 rounded-lg h-50 w-80 border-black"></img>
            <p className="pl-10 pt-4 indent-12 text-justify pr-12 w-3/4">
            The NATIONAL CADET CORPS in NIT JALANDHAR is a voluntary organization which recruits cadets
            from college. The cadets are given basic military training in small arms and parades. The NCC, is 
            one of the a premier youth organization in our country, contributed in propagating national unity 
            and integrity amongst youth. Its role in instilling in them the values of charaacter, discipline 
            and hard work and in shaping them into dynamic and responsible citizens of the country had been 
            well recognized.
            </p>
            <br></br>
          </div>
          <p className="pl-10 pt-4 indent-12 text-justify pr-8">
          NCC at NITJ helps to create a human resource of organized, trained youth and it motivate youth to
          provide leadership in all walks of their life and always make cadets to be always available for the
          service of the nation The training enhances the awareness level of cadets for being responsible 
          human beings. The training provides opportunities and motivates cadets to enhance their knowledge,
          awareness levels on life and soft communication skils, character building and personality development.
          </p>
          <br></br>
          <div className="flex flex-row">
            <p className="pl-10 pt-4 indent-12 text-justify pr-8 w-3/4">
            The NCC unit at the National Institute of Technology, Jalandhar (NITJ), is a vibrant and dynamic organization
            that actively engages its cadets in a wide array of activities. From the precision of drill and weapon training 
            to the camaraderie-building experience of rallies and meticulous cleaning tasks, NCC at NITJ provides a holistic 
            training environment. Moreover, it extends beyond the usual routine with specialized camps, including 
            mountaineering, CATC, ATC, and trek camps, where cadets develop essential life skills and foster a spirit of 
            adventure. Through these diverse activities, NCC at NITJ nurtures well-rounded individuals who are not only 
            disciplined but also socially responsible, ready to contribute positively to society. 
            </p>
            <img src={two} alt="NCC" className="w-1/4 rounded-lg mr-10" ></img>
          </div>
        </div>
        <div className="bg-gradient-to-b from-blue-50 via-blue-30 to-blue-10">
          <br></br>
          <br></br>
          </div>
      </div>
    );
};
export default NCC_AT_NITJ;