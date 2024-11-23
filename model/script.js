let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
var count = 0;

window.onscroll = () => {
    sections.forEach(sec => {
        console.log('Sec:',sec.getAttribute('id'));
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                console.log('Sec:',sec.getAttribute('id'));
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href="#' + id + '"]');
                if(targetLink){
                    console.log("Ok");
                    targetLink.classList.add('active');
                }
            });
        }
    });
};


/* menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}); */


menuIcon.onclick = () => {

    if( count == 0){
        navbar.style.display = 'block';
        count = count +1 ;
    }else if (count == 1) {
        navbar.style.display = 'none';
        count = count -1 ;
    }

    /* menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.style.display = 'block'; */
}