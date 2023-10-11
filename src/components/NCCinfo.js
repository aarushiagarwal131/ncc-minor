import React from 'react';
import img from "./images/ncc.png";

const NCCInfo = () => {
  return (
      <div >
      <div className="flex-grow bg-blue-100">
        <div className="flex items-center pt-20">
          <div className="bg-blue-900 h-1 flex-grow ml-10 mr-10"></div>
          <h2 className="text-2xl font-bold text-center bg-blue-900 py-2 px-4 text-white rounded">
            ROLE OF NCC
          </h2>
          <div className="bg-blue-900 h-1 flex-grow ml-10 mr-10"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4 pl-10">
            <img src={img} alt="NCC" className=" rounded-lg w-100 h-500 bg-blue-500" />
          </div>
          <div className="w-3/4 pl-4 Class text-justify pr-8">
            <div className="my-4 px-4 rounded-lg">
            <p className="pl-4">
            <strong className="underline">WHAT IS NCC:</strong> The National Cadet Crops [NCC] is a youth development movement. It has enormous potential for nation-building.
            The NCC provides opportunities to the youth of the country for their all-round development with a sense of duty,
            commitment, dedication, discipline, and moral values so that they become able leaders and useful citizens. The 
            NCC provides exposure to the cadets in a wider range of activities, with a distinct emphasis on the cadets.
          </p>
          <br />
          <p className="pl-4">
            <strong className="underline">AIM OF NCC:</strong> NCC aims to develop character, commandership, discipline, leadership, secular
            outlook, the spirit of adventure, and the ideas of selfless service amongst the youth of the country. To create
            a human resource of organized, trained, and motivated youth to provide leadership in all walks of life and always available
            for the service of the nation.
          </p>
          <br />
          <p className="pl-4">
            <strong className="underline">NATION BUILDING:</strong> Nation-building always requires partners; There must be 
            communication between people on the ground and people in distant government offices. Nation-building is a process 
            that does not produce clear, quick results. Leadership must start small, addressing basic problems. Public trust 
            during a period of occupation emerges from the fulfillment of basic needs. Small beginnings must serve larger purposes.
            Citizens must see the value in what they're doing. Nation-building is about people. Large forces do not move history. 
            It is a pupil who moves history.
          </p>
          <br />
          <p className="pl-4">
            <strong className="underline">NCC CADETS:</strong> The National cadet Crops makes the nation justly proud. Ever 
            since its inception, the NCC has made immense contributions towards Nation-building and the promotion of social harmony
            in our country. I am confident that with the hands of youth such as our NCC cadets, the future of our country is bright.
          </p>
          </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-100 via-blue-70 to-blue-40">
          <br></br>
          <br></br>
          </div>
    </div>
  );
};

export default NCCInfo;