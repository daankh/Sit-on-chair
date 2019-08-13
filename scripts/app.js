document.addEventListener('DOMContentLoaded', function () {
    //--------------------------
    //Slider

    var slider = document.querySelector('.header__slider')
    var sliderImages = slider.querySelectorAll('.slider__img img')
    // var sliderArrows = slider.querySelectorAll('.slider__arrow')
    var arrowLeft = slider.querySelector('[data-arrow="left"]')
    var arrowRight = slider.querySelector('[data-arrow="right"]')

    //left arrow
    arrowLeft.addEventListener('click', function () {
        sliderImages.forEach(image => {
            image.classList.toggle('hidden')
        })
    })

    //right arrow
    arrowRight.addEventListener('click', function () {
        sliderImages.forEach(image => {
            image.classList.toggle('hidden')
        })
    })
    //--------------------------
})