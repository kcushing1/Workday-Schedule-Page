//display current date at top of page
const date = moment().format("Do MMMM YYYY")
const dateDisplayed = $("#currentDay")
dateDisplayed.text(date)
let currentHour = moment().format("hA")
console.log(currentHour)

//set page to default Eastern Time
//moment.tz.setDefault("America/New_York")

//displayed hours in an array - military time
const hoursArr = ["09","10","11","12","13","14","15","16","20","21","22"]

let testhrarr = moment(hoursArr[0], "HH:mm").format("hA")
console.log(testhrarr)//9am

function setSchedule(){
  
  const coloredTextArea = $("textarea")

 //the time changes the class
 //clear the time related classes

 //moment("time", "format to read").format("desired format")
 
addRealTime()
 function addRealTime (){
  clearTimeClass()

   for (let j=0; j< hoursArr.length; j++){
     let grabHour = moment(hoursArr[j]+":00","HH:mm")
     let realTime = moment()
     let presentHour = realTime.startOf("hour")

     console.log(hoursArr[j], grabHour)

     //if it has the correct class and the grabHour is in the present
     if ($("textarea").hasClass("time" + hoursArr[j]) && grabHour.isSame(presentHour)){
       $(".time"+hoursArr[j]+"").addClass("present")
       console.log("the time is now")

       //if it has the correct class and the grabHour is in the past
     } else if ($("textarea").hasClass("time" + hoursArr[j]) && grabHour.isBefore(presentHour)){
       $(".time"+hoursArr[j]+"").addClass("past")
       console.log("this is the past")

       //if it has the correct class and the grabHour is in the future
     } else if ($("textarea").hasClass("time" + hoursArr[j]) && grabHour.isAfter(presentHour)){
       $(".time"+hoursArr[j]+"").addClass("future")
      console.log("this is the future")
     }
  }
  
 }
 
 function clearTimeClass(){
  coloredTextArea.removeClass("past")
  coloredTextArea.removeClass("present")
  coloredTextArea.removeClass("future")
}

 //displays scheduled events previously save
 //event+i+00 names in military time each section
 function displayEvents (){
  for (let i=9; i< 18; i++){
    $(".event"+ i +"00").val(localStorage.getItem("event"+i))

  //make undefined not display

    console.log("you still need to make undefined not show")
  }
 }
 displayEvents()
 
 //text saved to localStorage
  function saveCalendarEvent(){
    for (let i=9; i< 18; i++){
      localStorage.setItem("event"+i, $(".event"+ i +"00").val())
    }
      }

 //click button to save text
  $(".saveBtn").click(function(){
    saveCalendarEvent()
    console.log("saveBtn connected")
  })

}

setSchedule()
console.log("don't forget to remove the extra hours in html!")
