import React from 'react'
import {Link} from 'react-router-dom';

export default function UserResetPass() {
  return (
     <>
     <div className='main-container w-full px-5 py-24 flex justify-center items-center'>
          <div className="mx-0 shadow-md lg:w-2/6 md:w-1/2 bg-veryLightGray rounded-lg p-8 flex flex-col w-full">
           <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Reset Password</h2>
           <div className="mb-4">
             <label htmlFor="full-name" className="tracking-wide leading-7 text-sm text-gray-500">Enter New Password</label>
             <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           </div>
           <div className="mb-4">
             <label htmlFor="full-name" className="tracking-wide leading-7 text-sm text-gray-500">Confirm Password</label>
             <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           </div>
           <div >
                 <Link
                   to="/Login"
                   className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight active:shadow-lg transition duration-30 ease-in-out"
                 >
                   Confirm
                 </Link>
             </div>
         </div>
     </div>
     </>
  )
}
