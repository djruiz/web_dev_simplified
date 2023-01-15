const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

console.log(grandparent, parent, child);


//Bubbling  and Capturing examples
//process of going from closest to furthest away element
grandparent.addEventListener('click', (e) => {
    console.log('Grandparent Capture');
}, {capture: true})

grandparent.addEventListener('click', (e) => {
    console.log('Grandparent Click');
})


parent.addEventListener('click', (e) => {
    console.log('Parent Capture');
}, {capture: true})


parent.addEventListener('click', (e) => {
    console.log('Parent 1 time');
}, {once: true} )

child.addEventListener('click', (e) => {
    console.log('Child Capture');
}, {capture: true})


child.addEventListener('click', (e) => {
    console.log('Child 1');
})

document.addEventListener('click', (e) => {
    console.log('Document 1');
})

document.addEventListener('click', (e) => {
    console.log('Document Capture');
}, {capture: true})


const divs = document.querySelectorAll('div')

divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("hi")
    })
})

const newDiv = document.createElement("div")
newDiv.style.width = "500px";
newDiv.style.height = "500px";
newDiv.style.backgroundColor = "purple"
document.body.append(newDiv);

//new div does nto get the event listener bc it is created after the event listeners are added


function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}