(function () {
  const container = document.querySelector('.container')
  const sliders = document.querySelectorAll('input[type="range"]')
  const redSliderValue = document.querySelector('.red-slider-value')
  const greenSliderValue = document.querySelector('.green-slider-value')
  const blueSliderValue = document.querySelector('.blue-slider-value')
  const hexValue = document.querySelector('.hex-value')
  let redHexColor = '00'
  let greenHexColor = '00'
  let blueHexColor = '00'
  let hexColor = '#000000'

  container.style.background = hexColor

  function rgbToHex(event) {
    let sliderValue = 0

    switch (event.target.id) {
      case 'red': 
        sliderValue = Number(event.target.value)

        redSliderValue.innerHTML = sliderValue
        redHexColor = hexConverter(sliderValue)
        break
      case 'green':
        sliderValue = Number(event.target.value)

        greenSliderValue.innerHTML = sliderValue
        greenHexColor = hexConverter(sliderValue)
        break
      case 'blue':
        sliderValue = Number(event.target.value)

        blueSliderValue.innerHTML = sliderValue
        blueHexColor = hexConverter(sliderValue)
        break
    }

    hexColor = `#${redHexColor}${greenHexColor}${blueHexColor}`

    hexValue.innerHTML = hexColor
    container.style.background = hexColor
  }

  function hexConverter(rgbValue) {
    let hex = rgbValue.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener('input', rgbToHex)
  }
})()