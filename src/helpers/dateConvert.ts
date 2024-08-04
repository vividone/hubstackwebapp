export const dateConvert = (date: string) => {
    const splittedDate = date.split("T")[0].split("-")

    const convertedDate = splittedDate[2] + "/" + splittedDate[1] + "/" + splittedDate[0]

    return convertedDate;
}