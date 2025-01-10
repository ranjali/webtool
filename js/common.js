
function toggleSidebar() {
    var sidebar = document.getElementsByClassName("sidebar")[0];
    var main = document.getElementsByClassName("main")[0];
    
    // Handle resize for desktop and mobile
    if (window.innerWidth > 768) {
        // Desktop behavior (resize horizontally)
        sidebar.style.width = 
        sidebar.style.width == "250px" ? "0" : "250px";
        main.style.marginLeft = 
        main.style.marginLeft == "250px" ? "0" : "250px";
    } else {
        // Mobile behavior (resize vertically)
        sidebar.style.width = 
        sidebar.style.width == "250px" ? "0" : "250px";
        main.style.marginTop = 
        main.style.marginTop == "250px" ? "0" : "250px";
    }
}
