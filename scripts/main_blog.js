// 添加滚动事件
window.addEventListener('scroll', function() {
  //获取元素
  var header = document.querySelector("header");
  // 添加类
  header.classList.toggle("sticky", window.scrollY > 0 )
});
