import React, { Component, useState } from 'react'
import {Link} from 'react-router-dom';



export class Registration extends Component {
     render() {     
          return (
<div className='registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font'>
     <div className="flex justify-center items-center form-container w-full">
          <form className="w-full md:w-3/4 lg:w-1/2 bg-transparent " >
               <div className="shadow overflow-hidden md:rounded-md">
               <h1 className='bg-white text-3xl w-full text-center text-gray-900 py-6 rounded'>Student Registration form</h1>
               <div className="px-4 py-5 bg-white md:p-6">
               <div className="grid grid-cols-6 gap-6">
               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Personal Details</h1>
               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="first_name" className="block text-md font-medium text-gray-700">First name</label>
                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="last_name" className="block text-md font-medium text-gray-700">Last name</label>
                    <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="Phone_number" className="block text-md font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="Phone_number" id="Phone_number" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>
               <div className='col-span-6 md:col-span-3 m-auto'>
                    <button className='text-brightRed '>Send OTP</button>
               </div>
               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="Phone_number" className="block text-md font-medium text-gray-700">OTP</label>
                    <input type="text" name="Phone_number" id="Phone_number" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>
               <div className='col-span-6 md:col-span-3 m-auto'>
                    <button className='text-brightRed '>VERIFY OTP</button>
               </div>
               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="email_address" className="block text-md font-medium text-gray-700">Email address</label>
                    <input type="text" name="email_address" id="email_address" autoComplete="email" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 md:col-span-2">
                    <label htmlFor="Phone_number" className="block text-md font-medium text-gray-700">OTP</label>
                    <input type="text" name="Phone_number" id="Phone_number" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>
               <div className='col-span-6 md:col-span-1 m-auto'>
                    <button className='text-brightRed '>Verify Email</button>
               </div>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="email_address" className="block text-md font-medium text-gray-700">Date of Birth</label>
                    <input type="date" name="date" id="dob" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="country" className="block text-md font-medium text-gray-700">Gender</label>
                    <select id="gender" name="gender" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                    </select>
               </div>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="country" className="block text-md font-medium text-gray-700">Country / Region</label>
                    <select id="country" name="country" autoComplete="country" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    </select>
               </div>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="category" className="block text-md font-medium text-gray-700">Category</label>
                    <select id="category" name="category" autoComplete="category" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>General</option>
                    <option>OBC</option>
                    <option>Scheduled Caste (SC)</option>
                    <option>Scheduled Tribes (ST)</option>
                    </select>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Indeficartion Details</h1>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="category" className="block text-md font-medium text-gray-700">Category</label>
                    <select id="identification_doc" name="category" autoComplete="category" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="default">Select an Option</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option>PAN</option>
                    <option>Driving Licesence</option>
                    <option>Voter Card</option>
                    <option>Passport</option>
                    </select>
               </div>

               <div id="id_no" className="col-span-6 md:col-span-3 ">
                    <label htmlFor="id_no" className="block text-md font-medium text-gray-700">Unique Identification Number</label>
                    <input type="text" name="id_no" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Bank Details</h1>

               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="acc_no" className="block text-md font-medium text-gray-700">Bank A/C Number</label>
                    <input type="text" name="acc_no" id="acc_no" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>


               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="ifsc_no" className="block text-md font-medium text-gray-700">Bank IFSC Number</label>
                    <input type="text" name="ifsc_no" id="ifsc_no" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Residential Address</h1>
               
               <div className="col-span-6">
                    <label htmlFor="street_address" className="block text-md font-medium text-gray-700">Street address</label>
                    <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 md:col-span-6 lg:col-span-2">
                    <label htmlFor="city" className="block text-md font-medium text-gray-700">City</label>
                    <input type="text" name="city" id="city" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <label htmlFor="state" className="block text-md font-medium text-gray-700">State / Province</label>
                    <input type="text" name="state" id="state" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 md:col-span-3 lg:col-span-2">
                    <label htmlFor="postal_code" className="block text-md font-medium text-gray-700">ZIP / Postal</label>
                    <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               </div>
               </div>
                    <div className="px-4 py-3 bg-veryPaleRed text-right md:px-6">
                    <button><Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'mdooth'});}} to="/" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
                    >
                    Register
                    </Link></button>
                    </div>
               </div>
          </form>
     </div>
     </div>
    );
  }
}
export default Registration