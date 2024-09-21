export const dateConvert = (date: string) => {
    const splittedDate = date.split("T")[0].split("-")

    const convertedDate = splittedDate[2] + "/" + splittedDate[1] + "/" + splittedDate[0]

    return convertedDate;
}

export const timeConvert = (date: string) => {
    const splittedTime = date.split("T")[1].split(":")

    const convertedTime = splittedTime[0] + ":" + splittedTime[1]

    return convertedTime;
}