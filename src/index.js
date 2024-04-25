import "./index.html";
import "../styles/styles.scss";


const navLink = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
burger.addEventListener('click', (e) => {
    if(nav.style.display === 'block') {
        nav.style.transform = "translateX(120%)";
        nav.style.display = 'none';
    } else {
        nav.style.transform = "translateX(0%)";
        nav.style.display = 'block';
    }
});
if(navLink.length) {
    navLink[navLink.length-1].classList.add('active');
    navLink.forEach((link) => {
        link.addEventListener('click', (e) => {
            navLink.forEach((link) => {
                link.classList.remove('active');
            });
            e.preventDefault();
            link.classList.add('active');
        });
    });
}


const menuItems = document.querySelectorAll('#mainNav ul li a');
menuItems.forEach(item => {
  item.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      // Execute the link's default action if Enter or Space is pressed
      event.preventDefault();
      window.location.href = this.href;
    }
  });
});