const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

let isOpen = false;

menuBtn.addEventListener("click", () => {

    if (!isOpen) {
        menu.classList.remove("max-h-0");
        menu.classList.add("max-h-[400px]");
    } else {
        menu.classList.remove("max-h-[400px]");
        menu.classList.add("max-h-0");
    }

    isOpen = !isOpen;
});
// ////////////////////////////////////////////////////////

const container = document.querySelector('.bb');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // حجم عشوائي
    const size = Math.random() * 60 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // موقع عشوائي
    bubble.style.left = Math.random() * 100 + '%';

    // مدة عشوائية
    bubble.style.animationDuration = (Math.random() * 5 + 4) + 's';

    container.appendChild(bubble);

    // حذف بعد انتهاء الأنيميشن
    setTimeout(() => {
        bubble.remove();
    }, 9000);
}

// توليد فقاعات بشكل مستمر
setInterval(createBubble, 500);
