document.onscroll = function moveTitles(){
    let moveX = ((4 * window.scrollX) / 570) + 40;
    let moveY = window.scrollY / 10;
    document.getElementById('name').style.backgroundPosition = `${moveX}%${moveY}%`;
    
    let navbar = document.getElementById('navbar');
    if(window.scrollY >= 300){
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
}