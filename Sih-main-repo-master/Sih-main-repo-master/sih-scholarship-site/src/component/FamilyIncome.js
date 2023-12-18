import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FamilyIncome() {
  const [inputList, setInputList] = useState([{ SibName: "", SibGender: "Female" ,SibAge:""}]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 3);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { SibName: "", SibGender: "Female" ,SibAge:"" }]);
  };


  return (
    <div className="registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font">
      <div className="flex justify-center w-full mb-2">
        <div className="flex mx-auto flex-wrap mb-20">
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Aadhaar Verification
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Student Qualification
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium shadow-xl bg-gray-100 inline-flex items-center leading-none border-brightRed text-brightRed tracking-wider rounded-t">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
            Family Income
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            ITR Verification
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Domicile Verification
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center form-container w-full">
        <form
          className="w-full md:w-3/4 lg:w-1/2 bg-transparent "
          action="#"
          method="POST"
        >
          <div className="shadow overflow-hidden sm:rounded-md">
            <h1 className="bg-white text-3xl w-full text-center text-gray-900 py-6 rounded">
              Famly Income Verification
            </h1>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fathers name
                  </label>
                  <input
                    type="text"
                    name="father_name"
                    id="father_name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_job"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>
                  <select
                    type="tel"
                    name="father_job"
                    id="father_job"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Service</option>
                    <option>Bussiness</option>
                    <option>Unemployed</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_pan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PAN Number (Father)
                  </label>
                  <input
                    type="tel"
                    name="father_pan"
                    id="father_pan"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="mother_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mothers name
                  </label>
                  <input
                    type="text"
                    name="mother_name"
                    id="mother_name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_job"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>
                  <select
                    type="tel"
                    name="father_job"
                    id="father_job"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Occupation</option>
                    <option>Occupation</option>
                    <option>Occupation</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="mother_pan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PAN Number (Mother)
                  </label>
                  <input
                    type="tel"
                    name="mother_pan"
                    id="mother_pan"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mother_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Spouse name (if any)
                  </label>
                  <input
                    type="text"
                    name="mother_name"
                    id="mother_name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mother_pan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PAN Number (Spouse)
                  </label>
                  <input
                    type="tel"
                    name="mother_pan"
                    id="mother_pan"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No of siblings (Age {`>`} 18)
                  </label>
                  <input
                    type="text"
                    name="Phone_number"
                    id="Phone_number"
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No of siblings (Age {`<`} 18)
                  </label>
                  <input
                    type="text"
                    name="Phone_number"
                    id="Phone_number"
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                {/* --------------------------------------------------------------------------------------- */}
                  {/* <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name of sibling{" "}
                    </label>
                    <input
                      type="text"
                      name="sib1"
                      id="sib1"
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-1">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      type="text"
                      name="sex"
                      id="gender1"
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-span-6 md:col-span-1">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      name="sib1"
                      id="age1"
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Birth Proof
                    </label>
                    <input
                      type="file"
                      name="sib1"
                      id="file1"
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div> */}

              {/* <div className="grid grid-cols-6 gap-6"> */}
              {inputList.map((x, i) => {
                return (
                  <>
                    <div className="col-span-6 md:col-span-2">
                      <label
                        htmlFor="sib1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name of sibling
                      </label>
                      <input type="text" 
                      onChange={e => handleInputChange(e, i)} 
                      value={x.SibName} name="SibName"   
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
                    </div>

                    <div className="col-span-6 md:col-span-1">
                      <label
                        htmlFor="sib1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                      <select
                        type="text"
                        name="SibGender"
                        value={x.SibGender}
                        onChange={e => handleInputChange(e, i)}
                        className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      >
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                      </select>
                  </div>
                  <div className="col-span-6 md:col-span-1">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      name="SibAge"
                      value={x.SibAge}
                      onChange={e => handleInputChange(e, i)}
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Birth Proof
                    </label>
                    <input
                      type="file"
                      name="sib1"
                      id="file1"
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>


                    {/* <input
                      className="ml10"
                      name="lastName"
                      placeholder="Enter Last Name"
                      value={x.lastName}
                      onChange={e => handleInputChange(e, i)}
                    /> */}

                    <div className="btn-box col-span-6">
                      {(inputList.length == i+1 && i!=0) && <button className="mr10 bg-brightRedLight text-white px-2 py-1 mx-2 rounded" onClick={() => handleRemoveClick(i)}>Remove</button>}
                      {inputList.length - 1 === i && <button className=" bg-brightRedLight text-white px-2 py-1 mx-2 rounded" onClick={handleAddClick}>Add</button>}
                    </div>
                  </>
                );
              })}
              {/* </div> */}
              {/* {JSON.stringify(inputList)} */}




                {/* <div id="new-input"></div>

                <button id="add-row">ADD</button>
                <button id="delete-row">DELETE</button> */}
                {
                  
                  
                  /* 
               {
                    $("add-row").click(function(){
                         newRowAdd = 
                         '<div className="col-span-6 md:col-span-2">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Name of sibling </label>'+
                              '<input type="text" name="sib1" id="sib1"  className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/></div>'+  
                         '<div className="col-span-6 md:col-span-1">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Gender</label>'+
                              '<select type="text" name="sex" id="gender1" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">'+
                              '<option>Female</option>'+
                              '<option>Male</option>'+
                              '<option>Other</option></select></div>'+
                         '<div className="col-span-6 md:col-span-1">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Age</label>'+
                              '<input type="number" name="sib1" id="age1" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/></div>'+
                         '<div className="col-span-6 md:col-span-2">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Birth Proof</label>'+
                              '<input type="file" name="sib1" id="file1"  className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/></div>'+
                         $('#new-input').append(newRowAdd);  
                    });
                    
                    $("body").on("click", "#delete-row", function () {
                         $(this).parents("#row").remove();
                    })
               } */}

                {/* <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="total-income"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Annual Family Income
                  </label>
                  <input
                    type="text"
                    name="total-income"
                    id="total-income"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="income-cert"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Income Certificate
                  </label>
                  <input
                    type="file"
                    name="total-cert"
                    id="total-cert"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div> */}
              </div>
            </div>
            <div className="px-4 py-3 bg-veryPaleRed text-right sm:px-6">
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                to="/scholarships/ITR-Verification"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
              >
                Next
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
