let button = Array.from(document.getElementsByClassName ('button'))
console.log(button)

button.map(button=>
    {
        button.addEventListener("click", (e)=>{
             switch(e.target.innerText){
                case "C":
                    display.innerText = ""
                    break;
                case "Back":
                    if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1) 
                }
                    break;    
                case "=":
                    try{
                    display.innerText = eval(display.innerText)
                }catch{
                    display.innerText="Undefined"
                }
                    break;
                default:
                    display.innerText += e.target.innerText
             }


        })
    })