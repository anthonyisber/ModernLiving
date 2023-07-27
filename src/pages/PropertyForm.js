import React from "react";
import { useState } from "react";
import useHistory from "react-router-dom";
import PropertyService from "../services/property";

const PropertyForm = () => {
 const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [surface, setSurface] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [agent, setAgent] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        PropertyService.update(id, { name, type, bedrooms, bathrooms, surface, price, location, agent })    
        .then(() => {
            history.push("/properties");
        })
        .catch((err) => console.log(err));
    };
    

    return (
        <div class="flex flex-col items-center justify-center min-h-screen py-2">
            <div class="flex flex-col justify-center w-full px-6 py-4 bg-white shadow-md sm:max-w-md md:max-w-lg lg:max-w-2xl sm:rounded-lg">
                <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
                    Add Property
                </div>
                <div class="p-6 mt-8">
                    <form onSubmit={handleSubmit} class="flex flex-col space-y-8">
                        <div class="flex flex-col space-y-1">
                            <label for="name" class="text-sm font-semibold text-gray-500">Property Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" id="name" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="type" class="text-sm font-semibold text-gray-500">Property Type</label>
                            <input onChange={(e) => setType(e.target.value)} type="text" id="type" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="bedrooms" class="text-sm font-semibold text-gray-500">Bedrooms</label>
                            <input onChange={(e) => setBedrooms(e.target.value)} type="text" id="bedrooms" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="bathrooms" class="text-sm font-semibold text-gray-500">Bathrooms</label>
                            <input onChange={(e) => setBathrooms(e.target.value)} type="text" id="bathrooms" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="surface" class="text-sm font-semibold text-gray-500">Surface</label>
                            <input onChange={(e) => setSurface(e.target.value)} type="text" id="surface" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="price" class="text-sm font-semibold text-gray-500">Price</label>
                            <input onChange={(e) => setPrice(e.target.value)} type="text" id="price" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="location" class="text-sm font-semibold text-gray-500">Location</label>
                            <input onChange={(e) => setLocation(e.target.value)} type="text" id="location" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="agent" class="text-sm font-semibold text-gray-500">Agent</label>
                            <input onChange={(e) => setAgent(e.target.value)} type="text" id="agent" autofocus autocomplete="off" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 ring-cyan-200" />
                        </div>

                        <div>
                            <button type="submit" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                Add Property
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PropertyForm;


    
    