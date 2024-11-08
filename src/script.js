const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const clearBtn = document.getElementById('clearBtn');
const removeLastBtn = document.getElementById('removeLastBtn');
const reverseBtn = document.getElementById('reverseBtn');

const loadImages = async (count = 4) => {
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/200/300?random=${Math.random()}`;
        img.alt = 'Random image';
        gallery.appendChild(img);
    }
};

loadImages();

loadMoreBtn.addEventListener('click', () => loadImages());
clearBtn.addEventListener('click', () => gallery.innerHTML = '');
removeLastBtn.addEventListener('click', () => {
    if (gallery.lastElementChild) {
        gallery.removeChild(gallery.lastElementChild);
    }
});
reverseBtn.addEventListener('click', () => {
    const images = Array.from(gallery.children);
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
});
