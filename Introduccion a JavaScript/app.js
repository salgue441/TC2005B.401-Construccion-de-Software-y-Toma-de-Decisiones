// Primera pregunta
/**
 * @brief
 * Recibe un numero de pedido con un prompt.
 * @param {} tabla Una tabla con los números del 1 al número
 * dado con sus cuadrados y cubos.
 */
function tabla() {
  let numero = prompt("Ingresa un número")
  let tabla = document.getElementById("tabla")

  for (let i = 1; i <= numero; i++) {
    tabla.innerHTML += `<tr><td>${i}</td><td>${i ** 2}</td><td>${
      i ** 3
    }</td></tr>`

    if (i == numero) {
      tabla.innerHTML += `<tr><td colspan="3">Fin de la tabla</td></tr>`
    }
  }
}

// Segunda pregunta
/**
 * @brief
 * Usando un prompt, pide al usuario el resultado
 * de la suma de 2 números generados de maneria
 * aleatoria.
 * @return {Boolean} Regresa true si el resultado
 * @return {Text} time El tiempo que tardó el usuario
 * en responder.
 */
function suma() {
  let num1 = Math.floor(Math.random() * 10)
  let num2 = Math.floor(Math.random() * 10)
  let resultado = num1 + num2

  let time = new Date()
  let respuesta = prompt(`¿Cuánto es ${num1} + ${num2}?`)
  let endTime = new Date()

  let timeDiff = endTime - time

  if (respuesta == resultado) {
    alert(`¡Correcto! Te tomó ${timeDiff / 1000} segundos`)
    return true
  } else {
    alert("¡Incorrecto!")
    return false
  }
}

// Tercera pregunta
/**
 *
 * @brief
 * Regresa la cantidad de numeros negativos,
 * la cantida de 0s y la cantidad de valores
 * mayores a 0 en el arreglo
 * @param {Array} num_array Arreglo de numeros
 * @return {Array} Arreglo con la cantidad de
 * numeros negativos, la cantida de 0s y la cantidad
 * de valores mayores a 0
 */
function contador(num_array) {
  let negativos = 0
  let ceros = 0
  let positivos = 0

  for (let i = 0; i < num_array.length; i++) {
    if (num_array[i] < 0) {
      negativos++
    } else if (num_array[i] == 0) {
      ceros++
    } else {
      positivos++
    }
  }

  return [negativos, ceros, positivos]
}

/**
 * @brief
 * Funcion auxiliar. Regresa la cantidad de numeros
 * negativos, la cantida de 0s y la cantidad de valores
 * mayores a 0 en el arreglo
 * @return {Void} No regresa nada.
 */
const tercer__form = document.getElementById("tercer__form")
tercer__form.addEventListener("submit", (e) => {
  e.preventDefault()

  const input = document.getElementById("numeros")
  const numeros = input.value.split(",").map((num) => parseInt(num))

  const resultado = contador(numeros)
  const output = document.createElement("p")

  output.textContent = `Negativos: ${resultado[0]}, Ceros: ${resultado[1]}, Positivos: ${resultado[2]}`

  tercer__form.appendChild(output)
})

// Cuarta pregunta
/**
 * @brief
 * Regresa un arreglo con los promedios de cada uno de
 * los renglones de la matriz.
 * @param {Array} matriz Matriz de numeros
 * @return {Array} Arreglo con los promedios de cada uno
 * de los renglones de la matriz.
 */
function promedio(matriz) {
  const promedios = []

  matriz.forEach((fila) => {
    promedios.push(fila.reduce((numero, suma) => numero + suma) / fila.length)
  })

  return promedios
}

/**
 * @brief
 * Funcion auxiliar. Calcula el promedio de cada uno
 * de los renglones de la matriz.
 * @return {Void} No regresa nada.
 */
calcula_promedio = () => {
  const matrix_str = document.getElementById("matrix").value.trim()
  const matrix_rows = matrix_str.split("\n")
  const matrix = matrix_rows.map((row) =>
    row.split(",").map((num) => parseInt(num))
  )

  const promedios = promedio(matrix)
  const result = promedios.join(", ")
  const output = document.createElement("p")
  output.textContent = `Promedios de la matriz: ${result}`

  document.getElementById("result").appendChild(output)
}

// Quinta pregunta
/**
 * @brief
 * Invierte la secuencia de numeros del arreglo.
 * @param {Array} num_array Arreglo de numeros
 * @return {Array} Arreglo con la secuencia de
 * numeros invertida
 */
function inverso(num_array) {
  let nuevo_array = []

  for (let i = num_array.length - 1; i >= 0; i--) {
    nuevo_array.push(num_array[i])
  }

  return nuevo_array
}

/**
 * @brief
 * Funcion auxiliar. Invierte la secuencia de numeros
 * del arreglo.
 * @return {Void} No regresa nada.
 */
const quinto__form = document.getElementById("quinto__form")
quinto__form.addEventListener("submit", (e) => {
  e.preventDefault()

  const input = document.getElementById("arreglo")
  const arreglo = input.value.split(",").map((num) => parseInt(num))

  const resultado = inverso(arreglo)
  const output = document.createElement("p")

  output.textContent = `Inverso: ${resultado}`

  quinto__form.appendChild(output)
})

// Sexta pregunta
/**
 * @brief
 * Maneja el movimiento de los memes en el contenedor
 * @return {Void} No regresa nada.
 */
function memeCarousel() {
  const memes = [
    {
      url: "https://miro.medium.com/max/500/1*ZhYNqU2y96_f3QkWq9oiWQ.jpeg",
      title: "Primer meme",
    },
    {
      url: "https://media.makeameme.org/created/data-is-all.jpg",
      title: "Segundo meme",
    },
    {
      url: "https://www.kidscodecs.com/wp-content/uploads/2020/02/History_TS_ProgrammingMemes_image4.png",
      title: "Tercer meme",
    },
    {
      url: "https://i.imgflip.com/5qikpc.jpg",
      title: "Cuarto meme",
    },
    {
      url: "https://i.pinimg.com/originals/25/d1/31/25d131d65382d36c6698d7c891fdbae0.jpg",
      title: "Quinto meme",
    },
  ]

  const memeContainer = document.getElementById("meme-container")
  const prevButton = document.getElementById("prev-btn")
  const nextButton = document.getElementById("next-btn")

  let currentMeme = 0

  const meme = memes[currentMeme]
  const img = document.createElement("img")

  img.src = meme.url
  img.alt = meme.title
  img.classList.add("active-meme")

  memeContainer.appendChild(img)

  prevButton.addEventListener("click", () => {
    memeContainer.removeChild(memeContainer.firstChild)
    currentMeme = (currentMeme - 1 + memes.length) % memes.length

    const meme = memes[currentMeme]
    const img = document.createElement("img")

    img.src = meme.url
    img.alt = meme.title
    img.classList.add("active-meme")

    memeContainer.appendChild(img)
  })

  nextButton.addEventListener("click", () => {
    memeContainer.removeChild(memeContainer.firstChild)
    currentMeme = (currentMeme + 1) % memes.length

    const meme = memes[currentMeme]
    const img = document.createElement("img")

    img.src = meme.url
    img.alt = meme.title
    img.classList.add("active-meme")

    memeContainer.appendChild(img)
  })
}

memeCarousel()
