const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (event)=>{
    
    const xSize = event.offsetX;
    const ySize = event.offsetY;
    const spanEl = document.createElement("span");
    
    spanEl.style.left = xSize+"px";
    spanEl.style.top = ySize +"px";
    const size = Math.random()*100;
    spanEl.style.height = size +"px";
    spanEl.style.width = size +"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 4000)

   

    
   
});
