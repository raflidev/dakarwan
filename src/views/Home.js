import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import datakaryawan from '../store';

function Home() {
   const data = useRecoilValue(datakaryawan)
   return (
      <div>
         <div className="container mx-auto py-5">
            <div className="font-bold text-3xl">
               Data Karyawan
            </div>
            <div className="my-10">
               <NavLink to="/add" className="p-3 bg-red-600 text-white rounded-md hover:bg-red-500">
                  Tambah Karyawan
               </NavLink>
            </div>
            <div className="flex flex-col">
               <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                           <thead className="bg-gray-50">
                              <tr>
                                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                      </th>
                                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                      </th>
                                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                      </th>
                                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                      </th>
                                 <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="bg-white divide-y divide-gray-200">
                              {
                                 data.map((karyawan, index) => {
                                    return (
                                       <tr key={index}>
                                          <td className="px-6 py-4 whitespace-nowrap">
                                             <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                   <img className="h-10 w-10 rounded-full" src="https://www.gravatar.com/avatar/f57ab01833402ccd0f7daa934b68a572?s=60" alt="" />
                                                </div>
                                                <div className="ml-4">
                                                   <div className="text-sm font-medium text-gray-900">
                                                      {karyawan.name}
                                                   </div>
                                                   <div className="text-sm text-gray-500">
                                                      {karyawan.email}
                                                   </div>
                                                </div>
                                             </div>
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap">
                                             <div className="text-sm text-gray-900">{karyawan.title}</div>
                                             <div className="text-sm text-gray-500">{karyawan.departement}</div>
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap">
                                             {
                                                karyawan.active ?
                                                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                      Active
                                                   </span>
                                                   :
                                                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                      Inactive
                                                   </span>
                                             }
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                             {karyawan.role}
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                             <NavLink to={`/edit/${karyawan.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</NavLink>
                                          </td>
                                       </tr>
                                    )
                                 })
                              }
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div >
   );
}

export default Home;