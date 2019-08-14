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

    //--------------------------
    //Chair price calculator


    var application = document.querySelector('#app')
    var dropdownArrows = application.querySelectorAll('.list_arrow')
    var chairsElements = application.querySelectorAll('[data-type="chair"] li')
    var colorsElements = application.querySelectorAll('[data-type="color"] li')
    var fabricsElements = application.querySelectorAll('[data-type="fabric"] li')
    var listItems = application.querySelectorAll('.list_panel li')

    var chairsNames = []
    var colorsNames = []
    var fabricNames = []
    chairsElements.forEach(chair => chairsNames.push(chair.innerText))
    colorsElements.forEach(color => colorsNames.push(color.innerText))
    fabricsElements.forEach(fabric => fabricNames.push(fabric.innerText))

    var calculateTotalPrice = function () {
        var prices = []
        var includesChairName = false
        var includesColorName = false
        var includesFabricName = false

        //sprawdza, czy wybrano nazwę krzesła
        for (var i = 0; i < chairsElements.length; i++) {
            if (chairsNames.includes(chairsElements[i].textContent)) {
                includesChairName = true
            }
        }

        if (includesChairName) {
            var chairNameEl = application.querySelector('.summary_panel h4.title')
            var chairName = application.querySelector('[data-type="chair"').parentElement.querySelector('.list_label').textContent
            chairNameEl.textContent = `Chair ${chairName}`;

            var priceChairEl = application.querySelector('.summary_panel .title.value')
            if (chairName === "Margarita") {
                price = 200
            } else if (chairName === 'Clair') {
                price = 150
            } else if (chairName === 'Selena') {
                price = 300
            } else {
                price = 'N/A'
            }
            prices.push(price)
            priceChairEl.textContent = price
        }

        //sprawdza, czy wybrano kolor
        for (var i = 0; i < colorsElements.length; i++) {
            if (colorsNames.includes(colorsElements[i].textContent)) {
                includesColorName = true
            }
        }

        if (includesColorName) {}

        //sprawdza, czy wybrano nazwę tkaninę
        for (var i = 0; i < fabricsElements.length; i++) {
            if (fabricNames.includes(fabricsElements[i].textContent)) {
                includesFabricName = true
            }
        }

        var totalPriceEl = application.querySelector('.sum')
        total = 0
        prices.forEach(price => total += price)
        totalPriceEl.textContent = total
    }

    dropdownArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            this.parentElement.querySelector('.list_panel').classList.toggle('show')
        })
    })

    listItems.forEach(listItem => {
        listItem.addEventListener('click', function (e) {
            var dropDownList = e.target.parentElement
            var targetEl = dropDownList.parentElement.querySelector('.list_label');

            targetEl.innerText = e.target.innerText;
            dropDownList.classList.toggle('show')
            calculateTotalPrice()
        })
    })

})