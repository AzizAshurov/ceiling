document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('.js_form');
  
  async function handleSubmitForm(event) {
    event.preventDefault();

    // Берем текущую форму и кнопки отправки внутри нее
    const formNode = event.target;
    const submitButton = formNode.querySelector('button[type="submit"]');
    const submitButtonTextNode = submitButton.querySelector('.btn__text');

    // Запоминаем исходный текст кнопки
    const initialButtonText = submitButton.innerText;
    
    // Делаем кнопку некликабельной и меняем текст
    submitButton.classList.add('btn--loading');
    submitButtonTextNode.innerText = 'Отправляем...';

    //Осбираем данные из формы и отправляем их в mail.php
    const formData = new FormData(formNode)
    const response = await sendData(formData);

    // Меняем текст кнопки на галочку
    submitButtonTextNode.innerText = '✓';

    // Ждем 15 секунд, меняем текст кнопки на исходный и делаем кнопку кликабельной
    setTimeout(() => {
      submitButtonTextNode.innerText = initialButtonText;
      submitButton.classList.remove('btn--loading');
    }, 15000);

    // Чистим поля формы
    formNode.reset();

    /*
    ✓  0. При отправке формы заменить текст кнопки на «отправвляем» и сделать ее некликабельной.
    ✓    1. Запомнить иходный текст кнопки
    ✓  1. Получить все значения инпутов из форм
    ✓  2. отправить значения инпутов из формы на mail.php
    ✓  3. меняем текст кнопки на галочку ✓ на 15 секунд, а после возвращаем исходный текст кнопки
    ✓  4. очистим форму после успешной отправки
    ✓  5. отправим в яндекс мтерику событие отправки формы
    */
  }  

  async function sendData(data) {
    ym(94322465,'reachGoal','submit-form-thanks')
    const response = await fetch(window.location.origin + '/ceiling/php/mail.php', {
      method: 'POST',
      body: data,
    });

    return response;
  }

  function handleForms(form) {
    form.addEventListener('submit', handleSubmitForm);
  }
  forms.forEach(handleForms);
})


