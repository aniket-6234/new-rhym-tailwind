import React from 'react';
import Whatapp from '../../images/whtap.png';

const IndividualCard = ({head, num1, num2}) => {
  return (
    <div className="rounded-xl mt-12 ml-0 mr-0 items-start justify-evenly bg-zinc-800 flex flex-col">
      <div className="w-full rounded-t-xl bg-black">
        <img className="rounded-t-xl" src={Whatapp} alt="whatap" />
      </div>
      <div className="h-32 w-full">
      <h3 className="ml-4 mt-2 text-2xl font-light text-white">{head}</h3>
      <div className="flex mx-4 mt-4 justify-between">
         <div className="">
           <p className="text-xs text-white">Available NFT Editions: </p>
           <h3 className="text-4xl text-white tracking-wide font-bold">{num1}<span className="text-lg text-white tracking-wider font-normal">/{num2}</span></h3>
         </div>
         <div className="w-28 h-10 mt-4 border-2 rounded-3xl border-purple-700 flex justify-center items-center cursor-pointer text-white">Get it Now</div>
         </div>
      </div>
    </div>
  )
}

export default IndividualCard