let section=document.querySelector(".section");
let body=document.querySelector("body");
let row=document.querySelector(".row");
let row2=document.querySelector(".part2")
let theStickySidebar=document.getElementById("theStickySidebar");
console.log(section);
console.log(body);
console.log(row);
console.log(row2);
console.log(theStickySidebar); 

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
function theSideBarmove() {
    // let a=row2.offsetTop-theStickySidebar.offsetTop-theStickySidebar.offsetHeight;
    let a=row2.offsetTop-234-theStickySidebar.offsetHeight;
    // console.log("window.scrollY:"+window.scrollY);
    // console.log("a:"+a);
    // console.log("a:"+theStickySidebar.offsetTop);
    // console.log("a:"+theStickySidebar.offsetHeight);
    if(window.scrollY<a){
        theStickySidebar.style.position="fixed";
    }else{
        theStickySidebar.style.position="static";
    }
}
window.addEventListener('scroll', theSideBarmove);