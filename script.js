const changeBtn = document.querySelector(".change")
const autoBtn = document.querySelector(".automatic")
let myInterval
let repeat = false
changeBtn.addEventListener("click", () => {
  changeColor()
  clearInterval(myInterval)
  repeat = false
})

autoBtn.addEventListener("click", () => {
  if (!repeat) {
    myInterval = setInterval(changeColor, 100)
    repeat = true
  } else {
    clearInterval(myInterval)
    repeat = false
  }
})

function changeColor() {
  let randomNum = `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
      )`
  document.documentElement.style.setProperty("--background", randomNum)
}
