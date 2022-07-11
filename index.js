function handleSubmit(e) {
  const formData = new FormData(e.target)
  const userFirstName = formData.get('firstName')
  const updatedHtmlContent = `<h2>Congratulations, ${userFirstName}</h2>
            <p>You're on your way to becoming a BBQ master!</p>
            <p class="fine-print">
              We'll never share your information without your permission
          </p>`
  const mainContentEl = document.getElementById('main-content')
  mainContentEl.innerHTML = updatedHtmlContent
}
