import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import datakaryawan from '../store'


function Add() {

   const [fullname, setFullName] = useState('')
   const [email, setEmail] = useState('')
   const [title, setTitle] = useState([])
   const [departement, setDepartement] = useState('')
   const [role, setRole] = useState('')

   const setAllKaryawan = useSetRecoilState(datakaryawan)
   const allKaryawan = useRecoilValue(datakaryawan)

   const addKaryawan = (e) => {
      e.preventDefault()
      setAllKaryawan((oldKaryawan) => [
         ...oldKaryawan,
         {
            id: allKaryawan.length + 1,
            name: fullname,
            role: role,
            email: email,
            title: title,
            departement: departement,
            active: true
         }
      ])
      console.log(allKaryawan);
   }




   return (
      <div className="container mx-auto py-5">
         <h1 className="font-bold text-2xl">Tambah Karyawan</h1>
         <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
               <div className="mt-5 md:mt-0 md:col-span-2">
                  <form>
                     <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                           <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                 <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Full name</label>
                                 <input type="text" name="first_name" value={fullname} onChange={(e) => setFullName(e.target.value)} id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                 <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                                 <input type="text" name="email_address" value={email} onChange={(e) => setEmail(e.target.value)} id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="name@example.com" />
                              </div>
                           </div>
                           <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-4">
                                 <label htmlFor="Title" className="block text-sm font-medium text-gray-700">Title</label>
                                 <input type="text" name="Title" value={title} onChange={(e) => setTitle(e.target.value)} id="Title" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300" placeholder="Backend Developer" />
                              </div>

                              <div className="col-span-3 sm:col-span-2">
                                 <label htmlFor="departement" className="block text-sm font-medium text-gray-700">
                                    Departement
                                 </label>
                                 <input type="text" name="departement" value={departement} onChange={(e) => setDepartement(e.target.value)} id="departement" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300" placeholder="Program" />
                              </div>
                           </div>
                           <div>
                              <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                              <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} autocomplete="role" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                 <option value="">- Pilih Role -</option>
                                 <option value="Member">Member</option>
                                 <option value="Admin">Admin</option>
                              </select>
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-gray-700">
                                 Photo
                              </label>
                              <div className="mt-2 flex items-center">
                                 <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                       <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                 </span>
                                 <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Change
                           </button>
                              </div>
                           </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                           <button type="submit" onClick={(e) => addKaryawan(e)} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Save
                     </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
               <div className="border-t border-gray-200" />
            </div>
         </div>
      </div>
   );
}

export default Add;