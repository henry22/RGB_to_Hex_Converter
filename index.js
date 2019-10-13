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
})()