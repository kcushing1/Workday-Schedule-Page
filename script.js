//display current date at top of page
const date = moment().format("Do MMMM YYYY")
const dateDisplayed = $("#currentDay")
dateDisplayed.text(date)
