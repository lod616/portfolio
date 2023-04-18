
function showHeaderMenu () {
  const headerBurger = document.querySelector('.header-burger')
  const headerMenu = document.querySelector('.header-menu')
  headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('header-burger--active')
    headerMenu.classList.toggle('header-menu--active')
  })
} showHeaderMenu()

const tabs = document.querySelector('.tabs')
const btns = tabs.querySelectorAll('.tabs__btn')
const items = tabs.querySelectorAll('.tabs__item')

function change (arr, i) {
  arr.forEach(item => {
    item.forEach(i => { i.classList.remove('is-active') })
    item[i].classList.add('is-active')
  })
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    change([btns, items], i)
  })
}
