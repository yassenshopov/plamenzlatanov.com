function scrollRight() {
    let carousels = document.getElementsByClassName("carousel");
    console.log(carousels)
    for (let carousel=0; carousel<carousels.length; carousel++) {
        console.log(carousels[carousel])
        carousels[carousel].scrollLeft += 50;
    }
}