const count=document.querySelector(".count")
const decrement=document.querySelector(".decrement")
const increment=document.querySelector(".increment")
const reset=document.querySelector(".reset")
const input=document.querySelector(".input")
let countValue=0
let value=1;
 



// input.addEventListener('input',(e)=>{
//      value=Number(e.target.value)
    
// })

decrement.addEventListener('click',()=>
{ if(input.value===''){
    input.value=1}
    
    let value=Number(input.value)
countValue=countValue-value
count.innerText=countValue


})

increment.addEventListener('click',()=>
    {  
        if(input.value===''){
            input.value=1 }
        let value=Number(input.value)
    countValue=countValue+value
    console.log(value)
    count.innerText=countValue
   
    
    })

    reset.addEventListener('click',()=>{
        countValue=0
        count.innerText=countValue
    })