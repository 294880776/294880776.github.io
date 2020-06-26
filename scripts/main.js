let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/2.png');
    } else {
      myImage.setAttribute('src', 'images/2-icon.png');
    }
}
