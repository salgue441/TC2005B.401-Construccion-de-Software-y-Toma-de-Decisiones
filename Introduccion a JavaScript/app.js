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

/**
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
