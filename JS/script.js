//////////////////////////////////////////////////////////// ALL BUTTON //////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let butt = document.getElementById("files");
let pop = document.body;

let colors = ['#542344', '#808080', '#D8BFAA', '#E2DACC', '#BFD1E5', '#EBF5EE', '#004777', '#a30000', '#ff7700', '#F7A547', '#F7A547', '#00afb5', '#4B3B47', '#6A6262', '#9c9990', '#CFD2B2', '#E0D8DE']
butt.addEventListener('click', Background)


function Background() {

   let colorsIndex = Math.floor(Math.random() * colors.length)
   pop.style.backgroundColor = colors[colorsIndex]


}

/////////////// teste

// let tr = document.getElementById("bts1");
// let tr2 = document.getElementById("inside1");
// let pop = document.body;

// let colorr = ['#542344'];
// tr.addEventListener('click', Background)
// tr2.addEventListener('click', Background)

// function bkg(){

//     let change = Math.floor([0] * colorr.length)
//     pop.style.backgroundColor = colorr[change];

// }

// let trr = document.getElementById("bts2");
// let trr2 = document.getElementById("inside2");

// let colorrr = ['#808080'];
// trr.addEventListener('click', Background)
// trr2.addEventListener('click', Background)

// function bkg(){

//     let change = Math.floor(1 * colorrr.length)
//     pop.style.backgroundColor = colorrr[change];

// }
///////////////////////////

//////////////////////////////////////////////////////////// ON BUTTON ///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let button = document.getElementById("on");
let body = document.body;

let color = ['#191919', '#E6E8E6']
button.addEventListener('click', changeBackground)


function changeBackground() {

    let colorsIndex = Math.floor(Math.random() * color.length)
    body.style.backgroundColor = color[colorsIndex]


}

