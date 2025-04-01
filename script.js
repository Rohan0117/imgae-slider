const slides = document.querySelectorAll(".slide");
console.log(slides);
let count = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`;
    }
)

const goPrev = () => {
    count--;
    if(count < 0){
        count = slides.length-1;
    }
    slideImage();
}

const goNext = () => {
    count++;
    if(count === slides.length){
        count = 0;
    }
    slideImage();
}

function slideImage() {
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${count * 100}%)`;
        }
    )
}