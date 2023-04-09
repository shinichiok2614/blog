let section=document.querySelector(".section");
console.log(section);
let body=document.querySelector("body");
console.log(body);
function showSection() {
    if(this.window.innerWidth<1000){
        section.style.display="none";
        body.style.marginLeft="100px";
    }else{
        section.style.display="block";
        body.style.marginLeft="400px";
    }
}
window.addEventListener('load', showSection);
window.addEventListener('resize', showSection);
