const button =  document.getElementById("oninside");
const body = document.body;

const colors = ['#2D2D2A', '#848FA5']
button.addEventListener('click', changeBackground)


function changeBackground(){

    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]


}
