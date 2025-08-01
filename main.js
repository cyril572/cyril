 let x=document.querySelector("#cap")
 let y=document.querySelector("#none")
 let b=document.getElementById("btn")
  b.addEventListener("click" , ()=>{
    x.src="WhatsApp Image 2025-07-29 at 19.20.13_951c0cc2.jpg"
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