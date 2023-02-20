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

  if (password == verify_password) {
    result.innerHTML = "Passwords match"
    result.style.color = "green"
  } else {
    result.innerHTML = "Passwords do not match"
    result.style.color = "red"
  }
}
