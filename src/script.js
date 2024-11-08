document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    let page = 1;
    const limit = 4;

    async function loadImages() {
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
            const images = await response.json();
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.download_url;
                imgElement.alt = image.author;
                gallery.appendChild(imgElement);
            });
            page++;
        } catch (error) {
            console.error('Error loading images:', error);
        }
    }

    function clearGallery() {
        gallery.innerHTML = '';
    }

    function removeLastImage() {
        const lastImage = gallery.lastElementChild;
        if (lastImage) gallery.removeChild(lastImage);
    }

    function reverseGallery() {
        const images = Array.from(gallery.children);
        gallery.innerHTML = '';
        images.reverse().forEach(img => gallery.appendChild(img));
    }

    document.getElementById('loadMoreBtn').addEventListener('click', loadImages);
    document.getElementById('clearBtn').addEventListener('click', clearGallery);
    document.getElementById('removeLastBtn').addEventListener('click', removeLastImage);
    document.getElementById('reverseBtn').addEventListener('click', reverseGallery);

    loadImages();
});
