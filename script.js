// img Auto slider

let img = document.getElementById("img")


let images = [
  "https://picsum.photos/id/217/1000/500",
  "https://picsum.photos/id/257/1000/500",
  "https://picsum.photos/id/297/1000/500",
  "https://picsum.photos/id/227/1000/500",
  "https://picsum.photos/id/247/1000/500",

]


let count = 0

function show() {
  img.src = images[count]
  img.style.width = "100%";
  img.style.height = "100%";

}

show()


setInterval(() => {
  count++
  if (count === images.length)
    count = 0

  show()

}, 3000)