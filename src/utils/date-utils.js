const getFormattedDate = (value, type, inMS) => {
    if (!type) return value;

    if (!inMS) {
        value = value * 1000
    }

    const date = new Date(value);
    console.log("date", date);

    let option;

    if (type === 'date') {
        option = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    } else if (type === 'time') {
        option = {
            hour: "numeric",
            minute: "numeric",
        }
    }

    return new Intl.DateTimeFormat('en-US', option).format(date)

}


export { getFormattedDate }