let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
var count = 0;

window.onscroll = () => {
    sections.forEach(sec => {
        console.log('Sec:', sec.getAttribute('id'));
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                console.log('Sec:', sec.getAttribute('id'));
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href="#' + id + '"]');
                if (targetLink) {
                    console.log("Ok");
                    targetLink.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('resize', function () {
    if (window.innerWidth <= 1600) {
        const container = document.querySelector('.text-animation');
        if (!document.querySelector('.dynamic-br')) {
            const br = document.createElement('br');
            br.className = 'dynamic-br'; // ใส่ class เพื่อง่ายต่อการลบหรือจัดการ
            container.insertBefore(br, container.children[0]); // เพิ่ม <br> ก่อน element ที่สอง
        }
    } else {
        const dynamicBr = document.querySelector('.dynamic-br');
        if (dynamicBr) {
            dynamicBr.remove(); // ลบ <br> หากหน้าจอกว้างกว่า 991px
        }
    }
});

function updateText() {
    const element = document.querySelector('#big-text'); // เลือก element ที่ต้องการเปลี่ยนคำ
    if (window.innerWidth < 1182) {
        element.textContent = 'CV'; // ข้อความใหม่
    } else {
        element.textContent = 'CV or Resume'; // ข้อความเดิม
    }
}

// เรียกใช้ครั้งแรกเมื่อโหลดหน้าเว็บ
updateText();

// เพิ่ม event listener เพื่อตรวจสอบเมื่อมีการปรับขนาดหน้าจอ
window.addEventListener('resize', updateText);



/* menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}); */


menuIcon.onclick = () => {

    if (count == 0) {
        navbar.style.display = 'block';
        count = count + 1;
    } else if (count == 1) {
        navbar.style.display = 'none';
        count = count - 1;
    }

    /* menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.style.display = 'block'; */
}