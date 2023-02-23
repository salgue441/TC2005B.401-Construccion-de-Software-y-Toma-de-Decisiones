/**
 * @brief
 * Recibe un arreglo de numeros y retorna el promedio de los mismos
 * @param {Array} numbers - Arreglo de numeros a promediar
 * @returns {Number} average - Promedio de los numeros del arreglo
 * @example
 * average([1, 2, 3, 4, 5]) // 3
 */
average = (numbers) => {
  let sum = 0

  numbers.forEach((number) => {
    sum += number
  })

  return sum / numbers.length
}

/**
 * @brief
 * Recibe un string y lo escribe en un archivo de texto.
 * @dependency fs - modulo nativo de nodejs para manejo de archivos de texto
 * @param {String} text - Texto a escribir en el archivo
 * @returns {Boolean} true - Si el archivo fue escrito correctamente
 */
write_text = (text) => {
  const filesys = require("fs")

  filesys.writeFileSync("text.txt", text)
}

/**
 * @brief
 * Recibe un string y lo invierte.
 * @param {String} text - Texto a invertir
 * @returns {String} inverted_text - Texto invertido
 * @example
 * reverse_text("Hola") // aloH
 */
reverse_text = (text) => {
  let inverted_text = ""

  for (let i = text.length - 1; i >= 0; i--) {
    inverted_text += text[i]
  }

  return inverted_text
}

// User functionaliy
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("Ingrese numeros separados por coma: ", (numbers) => {
  numbers = numbers.split(",").map((number) => parseInt(number))
  console.log(`El promedio es: ${average(numbers)}`)

  readline.question("Ingrese texto a escribir en el archivo: ", (text) => {
    write_text(text)
    console.log("Archivo escrito correctamente")

    readline.question("Ingrese texto a invertir: ", (text) => {
      console.log(`Texto invertido: ${reverse_text(text)}`)
      readline.close()
    })
  })
})
