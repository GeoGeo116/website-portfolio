function openNav(){
    document.getElementById("sidenav").style.left = "0px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.93)";
    document.getElementById("sidenav").style.boxShadow = "0px 0px 10px 0px #2DD4BF";
}

function closeNav(){
    document.getElementById("sidenav").style.left = "-180px";
    document.body.style.backgroundColor = "#0F172A";
    document.getElementById("sidenav").style.boxShadow = "none";
}

function toSection(Section){
    closeNav();
}