import { data } from './data.js'

const arrTitles = []
const arrSpecializedSubjects = []

for (let i = 0; i <= 100; i += 4) {
  arrTitles.push(data.data[i].title)
  arrSpecializedSubjects.push(data.data[i].specializedSubjects)
}

const titles = document.querySelectorAll('.program__title')

for (let i = 0; i < 5; i++) {
  titles[i].innerHTML = arrTitles[i]
}

const modulesFirst = document.querySelectorAll('.moduleFirst')
const modulesSecond = document.querySelectorAll('.moduleSecond')
const btns = document.querySelectorAll('.btn')
const buttonsFirstModule = document.querySelectorAll('.buttonFirstModule')
const buttonsSecondModule = document.querySelectorAll('.buttonSecondModule')

for (let i = 0; i < modulesFirst.length; i++) {
  for (let j = 0, k = 1; j < 10; j += 2, k += 2) {
    const li1 = document.createElement('li')
    const span1 = document.createElement('span')
    span1.innerHTML = arrSpecializedSubjects[i][j]
    li1.append(span1)
    modulesFirst[i].append(li1)

    const li2 = document.createElement('li')
    const span2 = document.createElement('span')
    span2.innerHTML = arrSpecializedSubjects[i][k]
    li2.append(span2)
    modulesSecond[i].append(li2)
  }
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    btns[i].classList.toggle('active')

    if (btns[i].classList.contains('active') === true) {
      btns[i].firstElementChild.innerHTML = '&ndash;'
    } else {
      btns[i].firstElementChild.innerHTML = '&#43;'
    }
  })
}

for (let i = 0; i < buttonsFirstModule.length; i++) {
  buttonsFirstModule[i].addEventListener('click', () => {
    buttonsFirstModule[i].after(modulesFirst[i])
    modulesFirst[i].classList.toggle('active')
  })
}

for (let i = 0; i < buttonsSecondModule.length; i++) {
  buttonsSecondModule[i].addEventListener('click', () => {
    buttonsSecondModule[i].after(modulesSecond[i])
    modulesSecond[i].classList.toggle('active')
  })
}
