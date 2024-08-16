// src/components/Maps/Map.js

import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const Map = () => {
    const apiKey = 'AIzaSyDY_ALUGklspUyDjqENcP8tpH1PZbaeFOY'; // Asegúrate de reemplazar con tu clave API
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    });

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            center={{ lat: -12.0000, lng: -77.0428 }} // Ajusta según tus necesidades
            zoom={11}
        >
            {/* Puedes agregar marcadores u otros componentes de mapa aquí */}
        </GoogleMap>
    );
};

export default Map;
