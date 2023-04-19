
function showHeaderMenu () {
  const headerBurger = document.querySelector('.header-burger')
  const headerMenu = document.querySelector('.header-menu')
  headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('header-burger--active')
    headerMenu.classList.toggle('header-menu--active')
  })
} showHeaderMenu()

const tabSlider = () => {
  const tabs = document.querySelector('.tabs')
  if (!tabs) { return };
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
}

tabSlider()

const changeColorBlock = () => {
  const colorBlock = document.querySelector('.colorBlock')

  function changeBackground (color) {
    colorBlock.style.backgroundColor = color
  }

  function getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF)
    return '#' + ('000000' + hex.toString(16)).substr(-6)
  }

  colorBlock.addEventListener('mouseenter', () => {
    colorBlock.classList.remove('trs')
    console.log('1')
    changeBackground(getRandomColor())
    setTimeout(() => { colorBlock.classList.add('trs') }, 100)
  })

  setInterval(() => {
    changeBackground(getRandomColor())
  }, 2500)
}
changeColorBlock()
