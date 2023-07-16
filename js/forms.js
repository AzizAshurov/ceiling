document.addEventListener('DOMContentLoaded', function () {
  async function handleFormSubmit(event) {
    event.preventDefault()
  
    const data = serializeForm(event.target)
    const response = await sendData(data)
  }
  

  function serializeForm(formNode) {
    return new FormData(formNode)
  }
  
  async function sendData(data) {
    return await fetch('/ceiling/php/mail.php/', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    })
  }
  
  

  const applicantForm = document.getElementById('lead__form')
  applicantForm.addEventListener('submit', handleFormSubmit)
  
  
})


