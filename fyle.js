let x = document.querySelectorAll(".matter");
let y= document.querySelector(".matimg");

console.log(x);
for (const val of x) {
    console.log(val);
    val.addEventListener("click",()=>{
       
       
        
        let z = val.getAttribute("id");
        y.setAttribute("src",`${z}.jpeg`);
        
       
       
        
    });

  
    

}


let scrollbar = document.querySelector(".slider");
let button1= document.querySelector("#button1");
let button2= document.querySelector("#button2");
let button3= document.querySelector("#button3");

button1.addEventListener("click",()=>{
    scrollbar.style.scrollBehaviour = "smooth";
    scrollbar.scrollLeft -= 2000 ;
})
button2.addEventListener("click",()=>{
    scrollbar.style.scrollBehaviour = "slow";
    if(scrollbar.scrollLeft<1000)
        {
    scrollbar.scrollLeft += 1000 ;}
    if(scrollbar.scrollLeft>1000)
        {
    scrollbar.scrollLeft -= 1000 ;}
})
button3.addEventListener("click",()=>{
    scrollbar.style.scrollBehaviour = "smooth";
    scrollbar.scrollLeft += 2000 ;
})

let images = document.querySelectorAll(".img2");
let boxes = document.querySelectorAll(".img1");

for (const val of images)
     {
val.addEventListener("mouseover",()=>{
   val.style.display = "none";
})
val.addEventListener("mouseout",()=>{
    val.style.display="block";
})

    
}



 let contact = document.querySelector(".button");
  let popup = document.querySelector(".popup");
  let form=document.querySelector("form");

 contact.addEventListener("click",()=>{
    popup.style.display = "block";
 })


let space = document.querySelector(".cross");
space.addEventListener("click",()=>{
  
    popup.style.display = "none";
});





 let permission = document.querySelector(".tick");
 

 permission.addEventListener("click",()=>{
    
    permission.style="background-color: #FF3147 ";
    form.setAttribute("action","https://getform.io/f/nadozkxb") ;
    form.setAttribute("method","POST");


 })

 

