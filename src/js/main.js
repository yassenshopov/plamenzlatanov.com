let carousels = document.getElementsByClassName("carousel");
let temp_dict = {}
for (let i=0; i<carousels.length; i++) {
    temp_dict[i] = []
}

// const isHover = h => h.parentElement.querySelector(':hover') === h;    

// function checkHover() {
//     const hovered = isHover(myDiv);
//     if (hovered !== checkHover.hovered) {
//       // alert(hovered ? 'hovered' : 'not hovered')
//       if (hovered) {
//           // alert("!")
//           myDiv.style.border = "5px solid white"
//       } else {
//           // alert("!")
//           myDiv.style.border = "0px solid white"
//       }
  
//       // console.log(hovered ? 'hovered' : 'not hovered');
//       checkHover.hovered = hovered;
//     }
// }

// const myDiv = document.getElementById('hero');
// document.addEventListener('mousemove', checkHover);

function scrollRight() {
    // console.log(carousels)
    for (let carousel=0; carousel<carousels.length; carousel++) {
        carousels[carousel].scrollLeft += 2;
        if (!(temp_dict[carousel].includes(carousels[carousel].scrollLeft))) {
            temp_dict[carousel].push(carousels[carousel].scrollLeft)
        } else {
            carousels[carousel].scrollLeft = 0;
            temp_dict[carousel] = []
        }
    }
}

let t = setInterval(() => {
    scrollRight();
}, 16);