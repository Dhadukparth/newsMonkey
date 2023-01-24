import React, { Component } from 'react'
import loading from './Book.gif'

const Spinner = () =>{
    return (
        <div className='text-center'>
            <img src={loading} alt="Spinner Image" />
        </div>
    )
}

export default Spinner