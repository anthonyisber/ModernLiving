import React from "react";
import PropertyService from "../services/property";

const AddProperty = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        PropertyService.create(data);
    }
    return (
        <>
            <h1 className="text-center text-3xl ttext-cyan-300">Add Property</h1>
            <div className="flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Property Name
                            </label>
                            <input name="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Property Type
                            </label>
                            <input name="type" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Agent Name
                            </label>

                            <input name="bedrooms" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Agent Image
                            </label>
                            <input name="bathrooms" type="file" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Bedrooms
                            </label>

                            <input name="bedrooms" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Bathrooms
                            </label>
                            <input name="bathrooms" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Price
                            </label>
                            <input name="price" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />

                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Location
                            </label>
                            <input name="location" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />

                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">


                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Image
                            </label>
                            <input name="image" type="file" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md-full 2 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Description
                            </label>

                            <textarea name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />

                        </div>

                    </div>
                    <div className="flex items-center justify-center pb-8">
                        <button className="bg-cyan-400 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center" type="button" onClick={handleSubmit}> Add Property </button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default AddProperty;
