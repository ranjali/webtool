function toggleSidebar() {
    document.getElementsByClassName("sidebar")[0].style.width = 
    document.getElementsByClassName("sidebar")[0].style.width == "250px" ? "0" : "250px";
    document.getElementsByClassName("main")[0].style.marginLeft = 
    document.getElementsByClassName("main")[0].style.marginLeft == "250px" ? "0" : "250px";
}