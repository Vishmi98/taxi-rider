import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext } from 'react'
import { Marker } from 'react-map-gl'

function Markers() {
    const { userLocation, setUserLocation } = useContext(UserLocationContext);

    return (
        <div>
            <Marker
                longitude={userLocation?.lng}
                latitude={userLocation?.lat}
                anchor="bottom"
            >
                <img src="./pin.png"
                    className='w-10 h-10'
                />
            </Marker>
        </div>
    )
}

export default Markers