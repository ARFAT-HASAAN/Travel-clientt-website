import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { stringify } from 'postcss';
const Details = () => {
    const { productId } = useParams()
    const [orderproduct, Setoroderproduct] = useState([])
    const [sellectPhoto, setSellectPhoto] = useState({})


    useEffect(() => {
        fetch('https://warm-taiga-83993.herokuapp.com/services')
            .then(res => res.json())
            .then(data => Setoroderproduct(data))
    }, [])

    useEffect(() => {
        const ChoceProduct = orderproduct.find(product => product?._id === productId)

        setSellectPhoto(ChoceProduct)
        // console.log(ChoceProduct)
    }, [orderproduct, productId])


    // use form hook forms
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:2000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(sellectPhoto)
        })

            .then(res => res.json())
            .then(data => console.log(data))


        // console.log(data);
    }

    return (

        <div className='w-2/4 mx-auto py-8 shadow-lg rounded px-24 bg-gray-200 my-5'>

            < form onSubmit={handleSubmit(onSubmit)} >

                <input type='text' className='border border-2 border-gray-400' placeholder='Name' {...register("Name")} />
                <input type='email' className='border border-2 border-gray-400' placeholder='Email'  {...register("email")} />
                <input type="tel" className='border border-2 border-gray-400' placeholder='Phone' {...register("Phone")} />

                <input type="pass" className='border border-2 border-gray-400' placeholder='pass' {...register("pass")} />
                <input type="submit" value='sumbit' />
            </form >


        </div >
    );
};

export default Details;