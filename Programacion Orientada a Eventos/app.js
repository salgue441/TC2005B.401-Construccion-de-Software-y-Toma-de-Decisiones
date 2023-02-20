/**
 * @description
 * This function is called when the user clicks the submit button
 */
var form = document.getElementById("formID")

form.addEventListener("submit", function (event) {
  event.preventDefault()
  verify_data()
})

/**
 * @description
 * Verifies the user's credentials
 */
verify_data = () => {
  let password = document.getElementById("password").value
  let verify_password = document.getElementById("verify_password").value
  let result = document.getElementById("result")
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g

  if (password === verify_password) {
    if (regex.test(password)) {
      result.innerHTML = "Password is accepted"
      result.style.color = "#77DD77"
    } else {
      result.innerHTML = "Password is weak"
      result.style.color = "#FF6961"
    }
  } else {
    result.innerHTML = "Passwords do not match"
    result.style.color = "#FF6961"
  }
}
