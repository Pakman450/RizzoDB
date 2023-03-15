// const { list } = require("postcss")

console.log('start')

const externalPath = "external"


//To load up external HTML files
function loadHTML(filename){
    console.log(`filename id: ${filename}`)
    let xhttp
    let element = document.getElementById('replace')

    let file = filename
    if (file){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) { element.innerHTML = this.responseText}
                if ( this.status == 400) { element.innerHTML = "<h1> PAGE NOT FOUND. </h1>"}
            }
        }
        xhttp.open("GET",`${filename}`,true)
        xhttp.send()
        return
    }
}

function checkIfEmpty(){
    const replace = document.getElementById('replace')
    
    if(replace.innerHTML==""){
        return true
    }
    return false
}
function emptyHome(){
    var div=document.getElementById("homePage").children


    for (let i=0;i<div.length;i++){
        div[i].innerHTML=""
        div[i].removeAttribute('class')
    }
    homePage=document.getElementById("homePage")
    homePage.innerHTML=""
    homePage.removeAttribute('class')
}


//this is where it gets complicated
//if hover, shows the relevant steps to get a docking goign
//planning to show Prepare Files then Let's Dock!
function toLetsDockSecNavBar(e){

    var secNavBar = document.getElementById('secNavBar')

    //if the secondary nav bar contains hidden properties
    //remove those propertie and add transition effect and show 
    //the bar, else hide them
    if (secNavBar.classList.contains('scale-95','opacity-0') ){
        secNavBar.classList.remove('opacity-0','scale-95','transition','ease-in')
        secNavBar.classList.add('transition','ease-out','duration-500','opacity-100','scale-100')
    

    }else if (secNavBar.classList.contains('opacity-100','scale-100') ) {
        secNavBar.classList.remove('opacity-100','scale-100','transition','ease-out','duration-500')
        secNavBar.classList.add('opacity-0','scale-95','transition','ease-in','duration-500')
   

    }

    

}


//this is where if you hover above the about button it will
//show..[INCOMPLETE]
function toAbout(){

}

//this is where if you click on it, you will go to the member's page
function toMembers(){

}


// function toDOCK() {
//     var DOCK = document.getElementById("replace")

//     DOCK.innerHTML = '<object data="./letsDOCK/letsDOCKcopy.html" style="min-height:100vh;width:100%"></object>'

//     emptyHome()

// }
// function toPrepareFiles() {
//     var Prepare = document.getElementById("replace")

//     Prepare.innerHTML = '<object data="./prepare_file/prepareFile.html" style="min-height:100vh;width:100%"></object>'
//     emptyHome()
  
// }

function ifButtonPress(e,btn){
    var DOCK = document.getElementById("replace")

    if (btn.innerText === "Let's dock!"){
        toLetsDockSecNavBar()
    } else if (btn.innerText === "Pose Reproduction") {
        loadHTML(`./${externalPath}/poseReproduction.html`)
        emptyHome()
    } else if (btn.innerText === "Prepare Files"){
        // DOCK.innerHTML = '<iframe type="text/html"  src="./prepare_file/prepareFile.html" style="min-height:100vh;width:100%" scrolling="no" frameborder="0"></iframe>'
        loadHTML(`./${externalPath}/prepareFile.html`)
        emptyHome()

    } else if (btn.innerText === "DOCK!"){
        // DOCK.innerHTML = '<iframe type="text/html"  src="./letsDOCK/letsDOCKcopy.html" style="min-height:100vh;width:100%" scrolling="no" frameborder="0"></iframe>'
        loadHTML(`./${externalPath}/letsDockcopy.html`)
        emptyHome()

    } else if (btn.innerText === "DOCK6"){
        window.open('./index.html','_self')
    }

}

//For the first tier navbar
const navButtons = document.querySelectorAll('#button-menu a')
var list_Button = Array.from(navButtons)
list_Button.forEach(btn => btn.addEventListener('click',(e)=> ifButtonPress(e,btn)))

//For the second tier navbar
const secNavButtons = document.querySelectorAll('#secNavBar a')
var secList_Button = Array.from(secNavButtons)
secList_Button.forEach(btn => btn.addEventListener('click',(e)=> ifButtonPress(e,btn)))



console.log('end')
