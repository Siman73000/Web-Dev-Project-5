const mainImageElement = document.getElementById("carousel-image");
const prevImageElement = document.getElementById("prev-image").getElementsByTagName("img")[0];
const nextImageElement = document.getElementById("next-image").getElementsByTagName("img")[0];

const images = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5"
];

let currentIndex = 1;

function updateImages() {
    // Update main image
    mainImageElement.src = images[currentIndex];
    
    prevImageElement.src = images[(currentIndex - 1 + images.length) % images.length];
    nextImageElement.src = images[(currentIndex + 1) % images.length];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImages();
}

document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);

updateImages();
