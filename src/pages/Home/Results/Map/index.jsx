import React from "react"
import "./map-styles.css"
import "leaflet/dist/leaflet.css"
import { useForm } from "../../../../context/FormContext"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { Icon } from "leaflet"
import MarkerIcon from "./../../../../assets/imgs/marker.svg"

const Map = () => {

    const { inputs } = useForm()

    const position = [inputs.latitude, inputs.longitude]

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
            ></Marker>
        </MapContainer>
    )
}

export default Map