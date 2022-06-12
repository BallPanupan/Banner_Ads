const bannerBottom = document.getElementById('banner-bottom');
let bannerbackground = document.getElementsByClassName('in-banner');
let bannerLeft = document.getElementsByClassName('banner-left');
let bannerCenter = document.getElementsByClassName('banner-center');
let bannerRight = document.getElementsByClassName('banner-right');
let bannerUrl = document.getElementsByClassName('banner-center');

function hidBannerBottom() {
    bannerBottom.style.display = "none";
}

function updateForm(){
    let dataForm  = {
        background : document.getElementById('banner_input_background').value,
        bannerLeft : document.getElementById('banner_input_left').value,
        bannerCenter : document.getElementById('banner_input_center').value,
        bannerright : document.getElementById('banner_input_right').value,
        bannerUrl : document.getElementById('banner_input_url').value
    }

    console.log(dataForm)

    // bannerbackground.style.backgroundimage = document.getElementById('banner_input_background').value;
    
    for (let index = 0; index < bannerbackground.length; index++) {
        bannerbackground[index].style.backgroundImage = "url('"+ dataForm.background +"')";
        bannerbackground[index].href = dataForm.bannerUrl
    }

    for (let index = 0; index < bannerLeft.length; index++) {
        bannerLeft[index].children[0].src = dataForm.bannerLeft;
    }
    for (let index = 0; index < bannerCenter.length; index++) {
        bannerCenter[index].children[0].src = dataForm.bannerCenter;
    }
    for (let index = 0; index < bannerRight.length; index++) {
        bannerRight[index].children[0].src = dataForm.bannerright;
    }

}
