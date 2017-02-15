var dimensions = {}

function calculate() {
  dimensions.width = Math.min(document.documentElement.clientWidth, window.innerWidth)
  dimensions.height = Math.min(document.documentElement.clientHeight, window.innerHeight)
  dimensions.scale = window.devicePixelRatio || 1
}

calculate()
window.addEventListener('resize', calculate)

export default dimensions
