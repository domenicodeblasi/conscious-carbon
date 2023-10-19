// here are contained all the utils functions to calculate, format and parse data.

// function to calc the average of all the emission values --> calculated number will be used to display the "Emission Average Score" in the results.
export const calcAverageScore = (data) => {
    // emissionValues --> array that will contain all the emission values (mol/m2) returned from data in a known date range
    let emissionValues = []
    data.forEach(emissionObj => {
        emissionValues.push(emissionObj.average)
    })
    const sum = emissionValues.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }) 
    return (sum / data.length)
}

// function to calc "left" property of the marker (status bar) --> it will move the marker progressively to the right when emissions are higher
export const calcMarkerPosition = (emissionValue) => {
    const leftValue = (emissionValue * 100) / 0.1      // 0.1 mol/m2 is the highest CO emission value returned from the Sentinel-5p satellite
    return leftValue
}

// function to format date in the "month, dd yyyy" format
export const formatDate = (date) => {
    const dateToFormat = new Date(date)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = months[dateToFormat.getMonth()]
    const day = dateToFormat.getDate()
    const year = dateToFormat.getFullYear()
    return `${month}, ${day} ${year}`
}