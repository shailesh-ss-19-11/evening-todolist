import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div style={{ height: "70vh" }}>
            <div className='position-relative top-50'>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <ClimbingBoxLoader loading={true} color='coral' size={30} speedMultiplier={1}/>
                </div>
            </div>
        </div>
    )
}

export default Loader