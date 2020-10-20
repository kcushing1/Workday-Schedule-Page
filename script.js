//display current date at top of page
const date = moment().format("Do MMMM YYYY")
const dateDisplayed = $("#currentDay")
dateDisplayed.text(date)
let currentHour = moment().format("hA")


//displayed hours in an array - military time
const hoursArr = ["09","10","11","12","13","14","15","16","17"]

function setSchedule(){
  
  const coloredTextArea = $("textarea")

  addRealTime()

  function addRealTime (){
    //remove all classes on page
    clearTimeClass()

   for (let j=0; j< hoursArr.length; j++){
     let grabHour = moment(hoursArr[j]+":00","HH:mm")
     let realTime = moment()
     let presentHour = realTime.startOf("hour")

     //if it has the correct class and the grabHour is the present hour
     if ($("textarea").hasClass("time" + hoursArr[j]) && grabHour.isSame(presentHour)){
       $(".time"+hoursArr[j]+"").addClass("present")

       //if it has the correct class and the grabHour is in the past
     } else if ($("textarea").hasClass("time" + hoursArr[j]) && grabHour.isBefore(presentHour)){
       $(".time"+hoursArr[j]+"").addClass("past")

       //if it has the correct class and the grabHour is in the future
     } else if ($("textarea").hasClass("time" + hoursArr[j]) && grabHour.isAfter(presentHour)){
       $(".time"+hoursArr[j]+"").addClass("future")
     }
  }
  
 }
 
 function clearTimeClass(){
  coloredTextArea.removeClass("past")
  coloredTextArea.removeClass("present")
  coloredTextArea.removeClass("future")
}

 //displays scheduled events previously saved
 //event+i+00 names in military time each textarea section
 function displayEvents (){
  for (let i=9; i< 18; i++){
    $(".event"+ i +"00").val(localStorage.getItem("event"+i))
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
  })

}

setSchedule()

