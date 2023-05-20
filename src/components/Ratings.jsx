import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Ratings = ({ rating = 0, onClick }) => {

    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <span key = {i} onClick={() => { onClick(i) }} style={{ cursor: "pointer" }}>
                    {
                        (rating > i ? <AiFillStar />
                            : <AiOutlineStar />)
                    }
                </span>
            ))}
        </div>
    )
}

export default Ratings
