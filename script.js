//display current date at top of page
const date = moment().format("Do MMMM YYYY")
const dateDisplayed = $("#currentDay")
dateDisplayed.text(date)

//set page to default Eastern Time
//moment.tz.setDefault("America/New_York")


//display hours
const hoursArr = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]

function setSchedule(){
  
 //the time changes the class
 function displayEvents (){
  for (let i=9; i< 18; i++){
    $(".event"+ i +"00").val(localStorage.getItem("event"+i))
    console.log("display events for loop event"+i+"00")
  }
 }
 displayEvents()

 //add new schedule event in text area

 //show the text that has previously been stored to localStorage
 //.getItem
 
 //text saved to localStorage so it remains when refreshed
  function saveCalendarEvent(){
    for (let i=9; i< 18; i++){
      localStorage.setItem("event"+i, $(".event"+ i +"00").val())
      console.log("save calendar events for loop event"+i+"00")
    }
    
  }

 //click button to save text
  $(".saveBtn").click(function(){
    saveCalendarEvent()
    console.log("saveBtn connected")
  })


}

setSchedule()
//let currentHour = moment().format("hA")

console.log(date)
