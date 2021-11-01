var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var list = document.querySelector(".list-container");
var list_one = document.querySelector(".container-flex");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    list.classList.toggle("lager-list");
    list_one.classList.toggle("larger-flex");
}

// ----------------------- SHOW MORE-------------------------

function toggle(){
    var x = document.getElementById("showmore");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}