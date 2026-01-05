const but=document.querySelector("button")
but.addEventListener("click",()=>{
    let h1=document.createElement("h1")
    h1.innerText="joyeux Hob Hyeti"
    h1.classList.toggle("centr")
    const body=document.querySelector("body")
    body.append(h1)
})