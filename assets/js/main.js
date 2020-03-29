document.getElementById("aside-btn").addEventListener("click", () => {
    document.getElementById("aside").style.display = "block";
    document.getElementById("not-aside").style.display = "none";
})
document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("aside").style.display = "none";
    document.getElementById("not-aside").style.display = "block";
})

let menuFlag = 0;
document.getElementById("hamburgerMenu").addEventListener("click", () => {
    if (menuFlag == 0) {
        document.querySelector(".index-nav-menu > ul").style.height = "20vh";
        menuFlag = 1;
    } else {
        document.querySelector(".index-nav-menu > ul").style.height = "0vh";
        menuFlag = 0;
    }
})

document.getElementById("aside")

let div = document.querySelectorAll(".about-sec-gallery > div > div");
div = Array.from(div);

let counterForGallery = 0;
function btnGallery(para) {
    if (para == 1) {
        counterForGallery++;
    } else if (para == 0) {
        counterForGallery--;
    }
    if (counterForGallery == -1) {
        counterForGallery = 3;
    } else if (counterForGallery == 4) {
        counterForGallery = 0
    }

    for (let i of div) {
        i.style.zIndex = "0";
        i.style.opacity = "0.2";
    }
    div[counterForGallery].style.zIndex = "10";
    div[counterForGallery].style.opacity = "1";
}