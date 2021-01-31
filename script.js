var menu = document.getElementById("menu");
var icon = document.getElementById("menuIcon");

icon.onclick = function(){
    if(menu.getAttribute("class") == "showMenu"){
        menu.setAttribute("class", "")
    }
    else {
    menu.setAttribute("class", "showMenu")
    }
}



