const counter = document.querySelector(".counter")
const btn = document.querySelectorAll(".button")

let count = 0


btn.forEach(element => {
    element.addEventListener('click', ()=>{
        if(element.classList.contains("reset")){
            count = 0
            counter.innerText = count
        }else if(element.classList.contains("decrease")){
            count--
            counter.innerText = count
            
        }else{
            count++
            counter.innerText = count
        }
    })
  
});