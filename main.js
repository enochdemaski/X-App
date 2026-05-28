const number = document.getElementById("number")
const result = document.getElementById("result")
const btn = document.getElementById("btn")
const range = document.getElementById("range")
const cancel = document.getElementById("cancel")
const greeting = document.getElementById("greeting")

let hour = new Date().getHours()
if(hour < 12){
    greeting.textContent = " good Morning, learn your times-table here."
}else if(hour < 18){
    greeting.textContent = "Good Afternoon, learn your times-table here."
}else{
    greeting.textContent = " good evening, learn your times-table here."
}

   function multiplicationTimetable(num){
    let rangeValue = range.value

    let output = ""

    for(let i = 1; i <= rangeValue; i++){
        output += `${num} X  ${i} =  ${num * i}\n\n`
    }

     return output
}



btn.addEventListener("click",  () =>{
    let value = number.value 
    let table = multiplicationTimetable(value)
    result.textContent = table
    result.classList.remove("hide")
    result.classList.add("show")
 
})

number.addEventListener("click", () =>{
    number.value = ""
    // range.value = ""
      result.textContent = ""
      result.classList.remove("show")
})
cancel.addEventListener("click", () =>{
    number.value = ""
    range.value = ""
    result.textContent = ""
    result.classList.remove("show")
})