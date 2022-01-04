//celecting container DIV which is in HTML file
const mainContainer = document.querySelector(".mainContainer");
console.log(mainContainer);

//creating 1 line container for main container
const container = document.createElement('div');
container.classList.add('container')

//creating child element and giving some random value to fill for now
const child = document.createElement('div');
child.id = "test"
child.classList.add("box")
child.textContent = ""

//how many row columns there are


//adding element to the 1 line container for 16 times
for (let i = 0; i < 16; i++){
    container.appendChild(child.cloneNode(true));
};

//adding 1 line container 16 times in main container
for (let i = 0; i < 16; i++){
    mainContainer.appendChild(container.cloneNode(true));
};

//selecting every little box
let children = document.querySelectorAll('#test')

let poPup =''
// making button which will reset everything
const clearAuto = document.querySelector('#clearAuto');
clearAuto.addEventListener('click', function(){
    children.forEach(element => element.classList.remove('changeBlack'));
    popUp = parseInt(prompt("What kind of greed you want? for eg if 10x10 enter - 10"))
    removeGrid();
});


//changing grid function

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
    addContainer()
} 

function addContainer() {
    for (let i = 0; i < popUp; i++){
        container.appendChild(child.cloneNode(true));
    }
    addMainContainer()
}

function addMainContainer() {
    for (let i = 0; i < popUp; i++){
        mainContainer.appendChild(container.cloneNode(true));
    }
    state = 'black'
    children = document.querySelectorAll('#test')
    makeItBlack2()
}

//no other way i have to try with this function
function makeItBlack2(){
    if(state === 'black'){
        console.log(children)
        children.forEach((child) => {
            // and for each one we add a 'click' listener
            child.addEventListener('mouseover', () => {
                child.classList.add('changeBlack');
            });
        });
    }
} 


//Clear manual button changes state to white
const clearManual = document.querySelector('#clearManual');

//declaring default state
let state = 'black'

//making every little box black upon mouseover, considering state
if(state === 'black'){
    children.forEach((event) => {

        // and for each one we add a 'click' listener
        event.addEventListener('mouseover', () => {
            event.classList.add('changeBlack');
        });
    });
}

//changing state to white while clicking Clear Manual and 
//calligng function to change white
clearManual.addEventListener('click', function(){
    state = 'white'
    clearing()
})

//declaring function to change to white
function clearing() {
    if(state === 'white'){
        children.forEach((event) => {

            // and for each one we add a 'click' listener
            event.addEventListener('mouseover', () => {
                event.classList.add('changeWhite');
            });
        });
    }
}