import React from 'react'
import {Link} from 'react-router-dom';

export default function StudentQualification() {
  return (
     <div className='registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font'>
    
           
     <div className='flex justify-center w-full mb-2'>
    <div className="flex mx-auto flex-wrap mb-20">
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>Aadhaar Verification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium shadow-xl bg-gray-100 inline-flex items-center leading-none border-brightRed text-brightRed tracking-wider rounded-t">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>Student Qualification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>Family Income
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>ITR Verification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>Domicile Verification
      </a>
    </div>
    </div>

     <div className="flex justify-center items-center form-container w-full">
          <form className="w-full md:w-3/4 lg:w-1/2 bg-transparent " action="#" method="POST">
               <div className="shadow overflow-hidden sm:rounded-md">
               <h1 className='bg-white text-3xl w-full text-center text-gray-900 py-6 rounded'>Student Qualification</h1>
               <div className="px-4 py-5 bg-white sm:p-6">
               <div className="grid grid-cols-6 gap-6">
               <div className="col-span-6 sm:col-span-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Name</label>
                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>


               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>HSLC Details</h1>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="10th_board" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>10th Board</label>
                    <select type="text" name="10th_marksheet" id="10th_doc" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>CBSE</option>
                    <option>AHSEC</option>
                    <option>HSLC</option>
                    <option>BIHAR</option>
                    </select>
               </div>
               
               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="10th_passyr" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>10th Passing Year</label>
                    <select type="text" name="10th_marksheet" id="10th_doc" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    </select>
               </div>
               
               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="10th_mark" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>10th CGPA / Percentage</label>
                    <input type="text" name="10th_mark" id="10th_mark" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="12th_marksheet" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Uplaod 10th Marksheet</label>
                    <input type="file" name="10th_marksheet" id="10th_doc" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>HSSLC Details</h1>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="12th_board" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>10th Board</label>
                    <select type="text" name="10th_marksheet" id="10th_doc" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>CBSE</option>
                    <option>AHSEC</option>
                    <option>HSLC</option>
                    <option>BIHAR</option>
                    </select>
               </div>
               
               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="12th_passyr" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>10th Passing Year</label>
                    <select type="text" name="10th_marksheet" id="10th_doc" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    </select>
               </div>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="12th_mark" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>12th CGPA / Percentage</label>
                    <input type="text" name="12th_mark" id="12th_mark" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="12th_marksheet" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Uplaod 12th Marksheet</label>
                    <input type="file" name="12th_marksheet" id="12th_doc" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Graduation Details</h1>

               <div className="col-span-6 ">
                    <label htmlFor="college_name" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Name of College / University</label>
                    <select type="text" name="college_name" id="college_name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>College Name</option>
                    <option>College Name</option>
                    <option>Other</option>
                    </select>
               </div>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="grad_mark" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Graduations' CGPA / Percentage</label>
                    <input type="text" name="grad_mark" id="12th_mark" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="grad_marksheet" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Uplaod Marksheet</label>
                    <input type="file" name="grad_marksheet" id="grad_marksheet" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Masters Details</h1>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="app_num" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Application Number of Entrance Exam</label>
                    <input type="text" name="app_number" id="app_number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="ent_marks" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Marks Scored</label>
                    <input type="text" name="ent_marks" id="ent_marks" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>


               <div className="col-span-6 md:col-span-3">
                    <label htmlFor="country_name" className="`block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Country of newly alloted college</label>
                    <select name="country_name" id="country_name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>Country</option>
                    <option>Country</option>
                    <option>Other</option>
                    </select>
               </div>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="ack_no" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Acknowlegement no of the newly alotted institute</label>
                    <select type="text" name="ack_no" id="ack_no" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>Country</option>
                    <option>Country</option>
                    <option>Other</option>
                    </select>
               </div>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="new_college" className="block text-sm font-medium text-gray-700"><strong className='text-brightRed'>* </strong>Acknowlegement no of the newly alotted institute</label>
                    <input type="file" name="new_college" id="new_college" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>


               </div>
               </div>
                    <div className="px-4 py-3 bg-veryPaleRed text-right sm:px-6">
                    <Link 
                    onClick={() => {
                         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}
                    to="/scholarships/Family-Income" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
                    >
                    Next
                    </Link>
                    </div>
               </div>
          </form>
     </div>
     </div>

  )
}
