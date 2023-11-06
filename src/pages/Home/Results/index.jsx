import React, { useState } from "react"
import styles from "./Results.module.css"
import { useFetchData } from "../../../context/FetchDataContext"
import { useForm } from "../../../context/FormContext"
import { calcAverageScore, calcMarkerPosition, formatDate } from "../../../utils/dataProcessing"
import { InformationCircleIcon as InfoIcon } from "@heroicons/react/24/outline"
import Map from "./Map"
import Pagination from "./../../../components/Pagination"

const Results = () => {

    const { data, country } = useFetchData()
    const { switchValue, inputs } = useForm()
    const averageScore = calcAverageScore(data)
    const itemsPerPage = 10
    const [currentPage, setCurrentPage] = useState(0)

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected)
    }

    const offset = currentPage * itemsPerPage
    const currentPageData = data.slice(offset, offset + itemsPerPage)

    let comment
    if (averageScore < 0.02) {
        comment = "The average CO emissions for the selected period are low. Air quality is good";
    } else if (averageScore >= 0.02 && averageScore < 0.04) {
        comment = "The average CO emissions for the selected period are moderate. Air quality is acceptable";
    } else if (averageScore >= 0.04 && averageScore < 0.06) {
        comment = "The average CO emissions for the selected period are high. It is advisable to pay attention to air quality";
    } else if (averageScore >= 0.06 && averageScore < 0.08) {
        comment = "The average CO emissions for the selected period are very high. There may be a health risk";
    } else if (averageScore >= 0.08) {
        comment = "The average CO emissions for the selected period are at emergency levels. Please follow local authorities' guidelines and take precautions";
    } else {
        comment = "Unknown value";
    }

    return (
        <section className={styles.resultsContainer}>

            <div className={styles.overviewContainer}>

                <div className={styles.emissionOverviewSection}>
                    {/* emissionAverageScore */}
                    <div className={styles.emissionAverageScore}>
                        <p>Emission Average Score</p>
                        <p>(mol/m²)</p>
                        <p>{averageScore.toFixed(3)}</p>
                    </div>
                    {/* emissionStatusBar */}
                    <div className={styles.emissionStatusBar}>
                        <span
                            className={styles.marker}
                            style={{ left: `${calcMarkerPosition(averageScore)}%` }}
                        ></span>
                    </div>
                    {/* emissionComment */}
                    <div className={styles.emissionComment}>
                        <InfoIcon className={styles.commentIcon} />
                        <p>{comment}</p>
                    </div>
                </div>

                {switchValue === "country" ? (
                    <div className={styles.countryInfo}>
                        {country.flag && (
                            <img
                                className={styles.countryFlag}
                                src={country.flag.svg}
                                alt={country.flag.alt}
                            />
                        )}
                        <h3 className={styles.countryName}>{country.country}</h3>
                    </div>
                ) : (
                    <div className={styles.coordinatesInfo}>
                        <h3>Latitude: {inputs.latitude}°</h3>
                        <h3>Longitude: {inputs.longitude}°</h3>
                        <Map />
                    </div>
                )}

            </div>

            <div className={styles.emissionTimelineSection}>
                {currentPageData.map(emission => (
                    <div key={crypto.randomUUID()} className={styles.listItem}>
                        <p>{formatDate(emission.start)}</p>
                        <p>{emission.average.toFixed(3)} mol/m²</p>
                    </div>
                ))}
                <Pagination
                    pageCount={Math.ceil(data.length / itemsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>

        </section>
    )
}

export default Results