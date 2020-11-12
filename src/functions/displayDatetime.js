let displayDatetime = (datetime) => {
    let date = datetime.slice(0, 10)
    let time = datetime.slice(11, 19)
    let dateArray = date.split("-")
    let timeArray = time.split(":")

    let readableDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0]
    if (timeArray[0] == "00") {
        timeArray[0] = "12"
        timeArray[2] = "AM"
    } else if (parseInt(timeArray[0]) > 12) {
        timeArray[0] = (parseInt(timeArray[0]) - 12).toString()
        timeArray[2] = "PM"
    } else {
        timeArray[2] = "AM"
    }
    timeArray[1] = ":" + timeArray[1] + " "

    return readableDate + ", " + timeArray.join("")
}

export {displayDatetime as default}