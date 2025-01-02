// src/components/Maps/Map.js

import React, { useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// Define 'libraries' como una constante fuera del componente
const libraries = ['places'];

const Map = () => {
    const apiKey = 'AIzaSyDY_ALUGklspUyDjqENcP8tpH1PZbaeFOY'; // Asegúrate de reemplazar con tu clave API real
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: libraries,
        version: 'beta',
    });

    const mapRef = useRef();

    useEffect(() => {
        if (isLoaded && mapRef.current) {
            const map = mapRef.current;
    
            // Marcador estándar
            const firstMarker = new window.google.maps.Marker({
                map: map,
                position: { lat: -12.0464, lng: -77.0428 },
            });
    
            const secondMarker = new window.google.maps.Marker({
                map: map,
                position: { lat: -12.0453, lng: -77.0312 },
            });
        }
    }, [isLoaded]);

    if (loadError) return <div>Error al cargar los mapas</div>;
    if (!isLoaded) return <div>Cargando...</div>;

    return (
        <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            center={{ lat: -12.0000, lng: -77.0428 }}
            zoom={11}
            onLoad={(map) => (mapRef.current = map)}
        />
    );
};

export default Map;
