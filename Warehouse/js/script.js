

/*var container = document.getElementById("container");
var triangle = document.getElementById("testTriangl");
var container_width = container.offsetWidth;
var count = Math.ceil(container_width /1);
var elem = triangle.innerHTML;
for (var i = 0; i < 16; i++) {
    triangle.innerHTML += elem;
}*/


document.getElementById("subBtnHouse").addEventListener("click",showMenu);
document.getElementById("subBtnDiamon").addEventListener("click",showMenuDiamont);


function showMenu(){
    document.getElementById("navBoxDiamont").classList.toggle("navBoxDisplayNone");
    document.getElementById("navBoxHome").classList.toggle("navBoxDisplayFlex");
}
function showMenuDiamont() {
    document.getElementById("navBoxHome").classList.toggle("navBoxDisplayNone");
    document.getElementById("navBoxDiamont").classList.toggle("navBoxDisplayFlex");

}
