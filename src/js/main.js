let carousels = document.getElementsByClassName("carousel");
let temp_dict = {}
for (let i=0; i<carousels.length; i++) {
    temp_dict[i] = []
}

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