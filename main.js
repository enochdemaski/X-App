const number = document.getElementById("number")
const result = document.getElementById("result")
const btn = document.getElementById("btn")
const range = document.getElementById("range")
const cancel = document.getElementById("cancel")

// GREETING
const greeting = document.getElementById("greeting")
let message = []
let hour = new Date().getHours()
if(hour < 12){
    message = " good Morning, learn your times-table here."
}else if(hour < 18){
    message = "Good Afternoon, learn your times-table here."
}else{
    message = " good evening, learn your times-table here."
}


// FUNCTION
   function multiplicationTimetable(num){
    let rangeValue = range.value

    let output = ""

    for(let i = 1; i <= rangeValue; i++){
        output += `${num} X  ${i} =  ${num * i}\n\n`
    }

     return output
}



btn.addEventListener("click", () =>{
let value = number.value 
let table = multiplicationTimetable(value)


 if(number.value.trim() === ""){
          result.classList.remove("show")
          result.classList.add("hide")
          number.classList.add("error")
          range.classList.add("error")
    }else{
    result.textContent = table
    result.classList.remove("hide")
    result.classList.add("show")
     number.classList.add("accept")
     range.classList.add("accept")
    }
})

number.addEventListener("input", ()=>{
      number.classList.add("accept")
})
range.addEventListener("input", ()=>{
     range.classList.add("accept")
})

number.addEventListener("click", () =>{
    number.value = ""
    result.textContent = ""
    result.classList.remove("show")
})
cancel.addEventListener("click", () =>{
    number.value = ""
    range.value = ""
    result.textContent = ""
    result.classList.remove("show")
})

const type = new Typed(".greeting",{
    strings : [message],
    typeSpeed : 90,
    backSpeed : 20,
    smartBackspace : false,
    loop : true,
    showCursor: false,
})