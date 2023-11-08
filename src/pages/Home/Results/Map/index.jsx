import React from "react"
import "./map-styles.css"
import "leaflet/dist/leaflet.css"
import { useForm } from "../../../../context/FormContext"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"
import MarkerIcon from "./../../../../assets/imgs/marker.svg"

const Map = () => {

    const { inputs } = useForm()
    const position = [inputs.latitude, inputs.longitude]

    const customIcon = L.icon({
        iconUrl: MarkerIcon,
        iconSize: [40, 40],
        iconAnchor: [20, 36],
    })

    return (
        <MapContainer
            center={[inputs.latitude, inputs.longitude]}
            zoom={3}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
                position={position}
                icon={customIcon}
            ></Marker>
        </MapContainer>
    )
}

export default Map