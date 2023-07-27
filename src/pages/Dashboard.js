
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { housesData } from "../data";
import { IoAdd } from 'react-icons/io5'
import UserService from "../services/user";


const Dashboard = () => {
    const history = useHistory();

    const editHandler = (e) => {
        const id = e.target
        history.push('/editproperty');



    }
    const deleteHandler = (e) => {
        UserService.deleteProperty(e.target.id);
        UserService.getAllProperties();
    }



    return (
        <>
            <div className=" px-2 pb-4 ">
                <Link className='bg-cyan-400 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition' to='/addproperty'>Add Listing</Link>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Property Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Property Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Property Type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bedrooms
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bathrooms
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Size
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Property Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Property Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Property Agent
                            </th>

                            <th scope="col" class="px-6 py-3">
                                <span>Edit</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span>Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {housesData.map((house, index) => {
                            return (
                                <tr key={house.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {house.id}
                                    </th>
                                    <td class="px-6 py-4">
                                        {house.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {house.type}
                                    </td>
                                    <td class="px-6 py-4">
                                        {house.bedrooms}
                                    </td>
                                    <td class="px-6 py-4">
                                        {house.bathrooms}
                                    </td>
                                    <td class="px-6 py-4">
                                        {house.surface}
                                    </td>
                                    <td class="px-6 py-4">
                                        {house.price}
                                    </td>
                                    <td class="px-6 py-4">
                                        {house.address}
                                    </td>
                                    <td class="px-6 py-4">
                                        {house.agent.name}
                                    </td>

                                    <td class="px-6 py-4 ">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={editHandler}>Edit</a>
                                    </td>
                                    <td class="px-6 py-4 ">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={deleteHandler}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>


    );
}
export default Dashboard;
