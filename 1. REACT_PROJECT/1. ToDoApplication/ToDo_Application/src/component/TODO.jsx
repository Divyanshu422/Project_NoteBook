import React from 'react';
import Icon from '../assets/Todo.png';

const TODO = () => {
  return (
    <>
      {/* For background */}
      <div className="bg-slate-50 h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Adding the image tag */}
          <figure className="flex flex-col items-center">
            <img src={Icon} alt="LogoImage" className="w-16 h-16" />
            <figcaption className="text-2xl font-medium pt-6">Add your list here 🔥 </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default TODO;
