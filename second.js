let a=document.getElementById("chat")
  let c=document.getElementById("send")
  let d=document.getElementById("text")
  let count=0
   c.addEventListener("click",()=>{
     let p=document.createElement("p") 
        p.innerText=d.value
         p.classList.add("message")
         a.appendChild(p)
         d.value=""
         if (p=document.createElement("p") ){
            count++
            document.getElementById("com").textContent=count
         }
   })
   
   let src=document.querySelector(".list")
  let  rc=document.querySelector(".blog")
  src.addEventListener("click",()=>{
    rc.classList.toggle("src")
    if ( rc.classList.contains("src")){
        src.src="list.svg"
         src.style.background="#ffff"
    }
    else{
       

          src.src="cancel_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
        src.style.background="#2d2d2d"

    }
  })