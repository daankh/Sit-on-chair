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
    var transportCheckbox = application.querySelector('#transport')
    var totalPriceEl = application.querySelector('.sum')
    var transportEl = application.querySelector('.summary_panel .transport')
    var prices = []
    var total = 0
    var sendButton = application.querySelector('[data-id="send"]')


    var chairsNames = []
    var colorsNames = []
    var fabricNames = []
    chairsElements.forEach(chair => chairsNames.push(chair.innerText))
    colorsElements.forEach(color => colorsNames.push(color.innerText))
    fabricsElements.forEach(fabric => fabricNames.push(fabric.innerText))
    var includesChairName = false
    var includesColorName = false
    var includesFabricName = false

    var showPrice = function (prices) {
        prices.forEach(price => total += price)
        totalPriceEl.textContent = total
    }

    var calculateTotalPrice = function () {
        total = 0;
        prices = []

        if (transportCheckbox.checked) {
            total += Number(transportCheckbox.dataset.transportPrice);
        }

        var choseChairName = application.querySelector('[data-id="chosenChair"]')
        var chosenColorName = application.querySelector('[data-id="chosenColor"]')
        var chosenFabricName = application.querySelector('[data-id="chosenFabric"]')


        //sprawdza, czy wybrano nazwę krzesła
        chairsNames.forEach((item) => {
            if (item === choseChairName.textContent) {
                includesChairName = true
            }
        })

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
        colorsNames.forEach((item) => {
            if (item === chosenColorName.textContent) {
                includesColorName = true
            }
        })

        if (includesColorName) {
            var colorNameEl = application.querySelector('.summary_panel .color')
            var priceColorEl = application.querySelector('.summary_panel .color.value')
            if (chosenColorName.textContent === "Czerwony") {
                price = 20
                prices.push(price)
                priceColorEl.textContent = price
                colorNameEl.textContent = chosenColorName.textContent
            } else if (chosenColorName.textContent === 'Czarny') {
                price = 0
                prices.push(price)
                priceColorEl.textContent = price
                colorNameEl.textContent = chosenColorName.textContent
            } else if (chosenColorName.textContent === 'Pomarańczowy') {
                price = 10
                prices.push(price)
                priceColorEl.textContent = price
                colorNameEl.textContent = chosenColorName.textContent
            }

        }

        //sprawdza, czy wybrano nazwę tkaninę
        fabricNames.forEach((item) => {
            if (item === chosenFabricName.textContent) {
                includesFabricName = true
            }
        })

        if (fabricNames) {
            var fabricNameEl = application.querySelector('.summary_panel .pattern')
            var priceFabricEl = application.querySelector('.summary_panel .pattern.value')
            if (chosenFabricName.textContent === "Tkanina") {
                price = 0
                prices.push(price)
                priceFabricEl.textContent = price
                fabricNameEl.textContent = chosenFabricName.textContent
            } else if (chosenFabricName.textContent === 'Skóra') {
                price = 100
                prices.push(price)
                priceFabricEl.textContent = price
                fabricNameEl.textContent = chosenFabricName.textContent
            }

        }

        showPrice(prices)
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

    transportCheckbox.addEventListener('change', function () {
        total = 0;
        if (transportCheckbox.checked) {
            total += Number(transportCheckbox.dataset.transportPrice);
            transportEl.textContent = "transport"
        } else {
            transportEl.textContent = ""
        }
        showPrice(prices)
    })


    sendButton.addEventListener('click', function (e) {

        if (!includesChairName || !includesColorName || !includesFabricName) {
            e.preventDefault();
        }
    })
})