import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import {  Link, Outlet } from "react-router-dom";

function Products() {
    const [products, setProductsList] = useState([])

    async function callApi() {
        Axios.get('https://fakestoreapi.com/products').then((response) => {
            console.log(response)
            setProductsList(response.data)
        });
    }
    useEffect(() => {
        callApi()
    }, [])
    return (
        <div className="bg-white">
            <Outlet />
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link to={`/product/${product.id}`} >
                            <a key={product.id} href="#" className="group">

                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={product.image}
                                        alt=""
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products