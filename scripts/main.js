let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2.jpg') {
      myImage.setAttribute('src', 'images/1.jpg');
    } else {
      myImage.setAttribute('src', 'images/2.jpg');
    }
};

// 添加滚动事件
window.addEventListener('scroll', function() {
  //获取元素
  var header = document.querySelector("header");
  // 添加类
  header.classList.toggle("sticky", window.scrollY > 0 )
});

