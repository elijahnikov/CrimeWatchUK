import MapComponent from '@/components/MapSection/Components/MapComponent/MapComponent';
import { useLoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

interface MapSectionProps {}

const MapSection = ({}: MapSectionProps) => {
    const [libraries] = useState<
        ('places' | 'drawing' | 'geometry' | 'localContext' | 'visualization')[]
    >(['places']);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!!,
        libraries,
    });

    if (!isLoaded) return <div>loading...</div>;

    return (
        <div className={`z-1 fixed mt-[11vh] h-[84vh] w-[70vw] bg-blue-500`}>
            <MapComponent />
        </div>
    );
};

export default MapSection;
