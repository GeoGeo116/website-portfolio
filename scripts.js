function openNav(){
    document.getElementById("sidenav").style.left = "0px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.93)";
}

function closeNav(){
    document.getElementById("sidenav").style.left = "-180px";
    document.body.style.backgroundColor = "#0F172A";
}

function toSection(Section){
    closeNav();
}