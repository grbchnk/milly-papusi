let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)

$(".gallery").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1800,
  variableWidth: true,
})

const gallery = document.querySelector(".gallery-pc")
const images = document.querySelectorAll(".gallery__img-pc")

window.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX
  const mouseY = e.clientY

  const galleryHeight = gallery.clientHeight
  const galleryWidth = gallery.clientWidth

  const rotateXPercentage = (mouseY / -galleryHeight / 5) * 30
  const rotateYPercentage = (mouseX / galleryWidth) * 30 - 15

  images.forEach(function (image) {
    image.style.transform =
      `rotateX(` +
      rotateXPercentage +
      `deg) rotateY(` +
      rotateYPercentage * 2 +
      `deg)`
    image.style.boxShadow =
      -rotateYPercentage +
      `px ` +
      rotateXPercentage / 2 +
      `px 20px 0px rgba(0, 0, 0, 0.35)`
  })
})

let smilies = [
  "\uD83D\uDE18",
  "\uD83C\uDF52",
  "\uD83E\uDD70",
  "\u2764\uFE0F",
  "\uD83D\uDC96",
  "\uD83D\uDE3B",
  "\uD83D\uDC8B",
]
let imag2 = document.querySelectorAll(".gallery__img")

imag2.forEach(function (image) {
  image.addEventListener("click", function (event) {
    let smiley = document.createElement("span")
    smiley.textContent = randomSmiley()
    smiley.style.top =
      randomPosition(window.innerHeight, smiley.clientHeight) + "px"
    smiley.style.left =
      randomPosition(window.innerWidth, smiley.clientWidth) + "px"
    smiley.style.fontSize = randomSize() + "px"
    smiley.classList.add("smiley")

    document.body.appendChild(smiley)

    setTimeout(function () {
      smiley.classList.add("fade-out")

      setTimeout(function () {
        smiley.remove()
      }, 500)
    }, 1000)
  })
})

function randomSmiley() {
  let index = Math.floor(Math.random() * smilies.length)
  return smilies[index]
}

function randomPosition(max, size) {
  return Math.random() * (max - size)
}

function randomSize() {
  return Math.floor(Math.random() * 50) + 20
}
