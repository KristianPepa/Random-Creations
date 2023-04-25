const instagram = document.getElementById('instagram')
const twitter = document.getElementById('twitter')
const snapchat = document.getElementById('snapchat')
const share = document.getElementById('shareButton')
var buttonStatus = true

function changeStatus(){
    if(instagram.className.endsWith('insta') || instagram.className.endsWith('show')){
        // Change Position
        share.src = "./images/share.svg"
        instagram.className = "insta instagram-hide"
        twitter.className = "twitter twitter-hide"
        snapchat.className = "snapchat snapchat-hide"
    }else{
        // Change Position
        share.src = "./images/close.svg"
        instagram.className = "insta"
        twitter.className = "twitter twitter-show"
        snapchat.className = "snapchat snapchat-show"
    }
}

function instaImage1(img){
    img.src= "./images/instagram-white.svg"
}

function instaImage2(img){
    img.src= "./images/instagram-black.svg"
}

function twitterImage1(img){
    img.src= "./images/twitter.svg"
}

function twitterImage2(img){
    img.src= "./images/twitter-border.svg"
}
