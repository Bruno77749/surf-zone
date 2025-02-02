let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 9000); // Muda de slide a cada 9 segundos
}

function plusSlides(n) {
    slideIndex += n - 1; // Ajusta o índice para o próximo slide
    showSlides();
}