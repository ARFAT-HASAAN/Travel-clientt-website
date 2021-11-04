import React from 'react';
import { useForm } from "react-hook-form";
import './Addservice.css'

const ADDSERVICE = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://warm-taiga-83993.herokuapp.com//services',
            {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(data)

            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('new service added')
                    reset()

                }

            })
    }

    return (

        <div className='w-2/5 mx-auto py-8 shadow-lg rounded px-24 bg-gray-200 my-5' >

            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='border border-2 border-gray-400' type='number' placeholder='id' {...register("id")} />
                <br />
                <input className='border border-2 border-gray-400' type='text' placeholder='Name' {...register("name")} />
                <br />
                <input className='border border-2 border-gray-400' type='text' placeholder='Url' {...register("img", { required: true })} />

                <br />

                <input className='border border-2 border-gray-400' type='number' placeholder='Price' {...register("price", { required: true })} />

                <br />

                <textarea className='border border-2 border-gray-400' placeholder='write someting...' type='text' name="desc" id="" {...register("desc", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='bg-green-400 text-white shadow-lg ' type="submit" value='Add New service' />
            </form>


        </div>
    );
};

export default ADDSERVICE;







