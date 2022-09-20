/* Menu Scroll Hide */
let lastScrollTop = 0;
function menuScroll(menu) {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const menuHeight = menu.current.offsetHeight;
  if (scrollTop > lastScrollTop && scrollTop > menuHeight)
    menu.current.style.top = "-10vh";
  else menu.current.style.top = 0;
  lastScrollTop = scrollTop;
}

module.exports = { menuScroll };
