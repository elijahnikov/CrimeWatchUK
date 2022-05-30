import { GoogleMap } from '@react-google-maps/api';
import React, { useCallback, useMemo, useRef, useState } from 'react';

interface MapComponentProps {}

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
};

const MapComponent = ({}) => {
    const [searchedLocation, setSearchLocation] = useState();
    const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(
        () => ({ lat: 51.50254543399321, lng: -0.1155215883988753 }),
        []
    );

    const options = useMemo<MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: false,
            mapId: '671270bcaedcfbe3',
        }),
        []
    );

    const onLoad = useCallback((map: any) => (mapRef.current = map), []);

    return (
        <div className='flex h-[100%]'>
            <GoogleMap
                mapContainerClassName='w-[100%]'
                zoom={10}
                options={options}
                center={center}
                onLoad={onLoad}
            ></GoogleMap>
        </div>
    );
};

export default MapComponent;
