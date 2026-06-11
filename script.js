// === ANO NO FOOTER ===
document.querySelectorAll('#ano').forEach(el => {
  el.textContent = new Date().getFullYear()
})

// === SCROLL SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const destino = document.querySelector(this.getAttribute('href'))
    if (destino) {
      e.preventDefault()
      destino.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// === TV LIGA AO CARREGAR ===
const tvEstatica = document.querySelector('#tv-estatica')
const tvFoto = document.querySelector('#tv-foto')

if (tvEstatica && tvFoto) {
  tvFoto.style.opacity = '0'
  tvEstatica.style.opacity = '1'

  setTimeout(() => {
    tvEstatica.style.transition = 'opacity 0.2s'
    tvFoto.style.transition = 'opacity 1s'

    let piscadas = 0
    const piscar = setInterval(() => {
      tvEstatica.style.opacity = tvEstatica.style.opacity === '0' ? '1' : '0'
      piscadas++
      if (piscadas >= 11) {
        clearInterval(piscar)
        tvEstatica.style.opacity = '0'
        setTimeout(() => { tvFoto.style.opacity = '1' }, 200)
      }
    }, 200)
  }, 800)
}

// === EFEITO DE DIGITAÇÃO ===
const titulo = document.querySelector('#titulo-digitado')

if (titulo) {
  const linhas = ['Carlos', 'Henrique.']
  titulo.innerHTML = ''
  let linha = 0
  let char = 0

  function digitar() {
    if (linha >= linhas.length) return
    if (char < linhas[linha].length) {
      if (char === 0 && linha > 0) titulo.innerHTML += '<br>'
      titulo.innerHTML += linhas[linha][char]
      char++
      setTimeout(digitar, 85)
    } else {
      linha++
      char = 0
      setTimeout(digitar, 150)
    }
  }

  setTimeout(digitar, 1200)
}
