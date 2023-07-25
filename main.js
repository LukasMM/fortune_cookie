const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")

const message = document.querySelector(".screen2 #message")

const phrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'A vida trará coisas boas se tiveres paciência.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'O amor está mais próximo do que você imagina.',
  'Acredite em milagres, mas não dependa deles.',
  'A solidão é a sorte de todos os espíritos excepcionais.',
  'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
  'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
  'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.',
  'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
  'A perseverança é a mãe da boa sorte.'
]

let randomNumber = Math.round(Math.random() * 10)

btnOpen.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', handleResetClick)

function handleOpenClick() {
  toggleScreen()
  message.querySelector('p').innerText = phrases[randomNumber]
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  message.classList.toggle('animation')
}