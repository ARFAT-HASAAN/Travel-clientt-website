import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Details = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (

        <div className='w-2/4 mx-auto py-8 shadow-lg rounded px-24 bg-gray-200 my-5'>

            < form onSubmit={handleSubmit(onSubmit)} >

                <input type='text' className='border border-2 border-gray-400' placeholder='Name' {...register("Name")} />
                <input type='email' className='border border-2 border-gray-400' placeholder='Email'  {...register("email")} />
                <input type="tel" className='border border-2 border-gray-400' placeholder='Phone' {...register("Phone")} />

                <input type="pass" className='border border-2 border-gray-400' placeholder='pass' {...register("pass")} />
                <input type="submit" />
            </form >


        </div >
    );
};

export default Details;