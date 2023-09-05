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
