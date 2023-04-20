var buttonStatus = true

function changeStatus(){
    const insta = document.getElementById('instagram')
    buttonStatus = !buttonStatus
    if(buttonStatus === false && (insta.className.endsWith('insta') || insta.className.endsWith('show'))){
        // Change Position
        document.getElementById('shareButton').src = "./images/share.svg"
        document.getElementById('instagram').className = "insta instagram-hide"
        document.getElementById('twitter').className = "twitter twitter-hide"
        document.getElementById('snapchat').className = "snapchat snapchat-hide"
    }else{
        // Change Position
        document.getElementById('shareButton').src = "./images/close.svg"
        document.getElementById('instagram').className = "insta instagram-show"
        document.getElementById('twitter').className = "twitter twitter-show"
        document.getElementById('snapchat').className = "snapchat snapchat-show"
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
