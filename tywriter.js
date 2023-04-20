const textDisplay = document.getElementById('typew')
const text_hello = document.getElementById('hello')
const frases = ['Hey folks, My name is Henrique and im currently studying Communication Network Engineering and ill show here some Personal and Academics Projects.','Ola! meu nome é henrique, sou estudante de Engenharia de Redes e vou mostrar aqui alguns projetos pessoais e Academicos.']
let i = 0
let j = 0 
let frases_atual = []
let frase_deletando = false
let fim_frase = false
let hello

text_hello.innerHTML = `Hello World! &#x1F60E`;

function loop () {
  fim_frase = false
  textDisplay.innerHTML = frases_atual.join('')

  if (i < frases.length) {

    if (!frase_deletando && j <= frases[i].length) {
      frases_atual.push(frases[i][j])
      j++
      textDisplay.innerHTML = frases_atual.join('')
    }

    if(frase_deletando && j <= frases[i].length) {
      frases_atual.pop(frases[i][j])
      j--
      textDisplay.innerHTML = frases_atual.join('')
    }

    if (j == frases[i].length) {
      fim_frase = true
      frase_deletando = true
    }

    if (frase_deletando && j === 0) {
      frases_atual = []
      frase_deletando = false
      i++
      if (i === frases.length) {
        i = 0
      }
    }
  }

  setTimeout(loop, 130)
}

loop()