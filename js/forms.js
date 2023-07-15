document.addEventListener('DOMContentLoaded', function () {
    function handleFormSubmit(event) {
        // Просим форму не отправлять данные самостоятельно
        event.preventDefault()
        console.log('Отправка!')
        event.preventDefault()
        serializeForm(applicantForm)
    }

    function serializeForm(formNode) {
        console.log(formNode.elements)

        const { elements } = formNode

        const data = Array.from(elements)
            .filter((item) => !!item.name)
            .map((element) => {
            const { name, value } = element

            return { name, value }
            })

        console.log(data)

        Array.from(elements)
            .forEach((element) => {
            const { name, value } = element
            console.log({ name, value })
        })
        
        return new FormData(formNode)
        
        console.log(Array.from(data.entries()))
      }
      
      async function sendData(data) {
        return await fetch(window.location.origin + '/mail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          body: data,
        })
      }

    async function handleFormSubmit(event) {
        event.preventDefault()
      
        const data = serializeForm(event.target)
        const response = await sendData(data)
      }





    const applicantForm = document.getElementById('lead__form')
    applicantForm.addEventListener('submit', handleFormSubmit)
      
      
      
})


