(function() {
  // Sourced from: https://emailregex.com/
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const form = document.getElementById('contact');
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const messageTextarea = form.querySelector('#message');
  const fields = [ nameInput, emailInput, messageTextarea ];

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let emptyField = false;

    fields.forEach(field => {
      if (field.value.length === 0) {
        // It's empty, so display error
        applyErrorStyles(field, 'Required');
        emptyField = true;
      }
    });

    if (emptyField) {
      showMessage('One or more required fields are empty', 'error');
      return;
    }

    if (!emailInput.value.match(emailRegex)) {
      applyErrorStyles(emailInput, 'Invalid email address');
      showMessage('Please enter a valid email address', 'error');
      return;
    }

    // All fields have valid input, so remove error styles:
    fields.forEach(field => {
      removeErrorStyles(field);
    });

    clearMessage();

    submitForm();
  });

  form.addEventListener('reset', (event) => {
    fields.forEach(field => {
      removeErrorStyles(field);
    });

    clearMessage();
  });

  fields.forEach(field => {
    field.addEventListener('blur', (event) => {
      if (field.value.length === 0) {
        // It's empty, so display error
        applyErrorStyles(field, 'Required');
      } else {
        removeErrorStyles(field);
      }
    });
  });

  function applyErrorStyles(element, placeholder) {
    element.closest('fieldset').classList.add('error');
    element.setAttribute('placeholder', placeholder);
  }

  function removeErrorStyles(element) {
    element.closest('fieldset').classList.remove('error');
    element.setAttribute('placeholder', '');
  }

  function showMessage(message, type) {
    clearMessage();

    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');

    let imgSrc;

    switch (type) {
      case 'success':
        messageCard.classList.add('success');
        imgSrc = '/assets/close-16A085.svg';  
        break;
      case 'warning':
        messageCard.classList.add('warning');
        break;
      case 'error':
        messageCard.classList.add('error');
        imgSrc = '/assets/close-C0392B.svg';
        break;
    }

    messageCard.innerHTML = message;

    const closeButton = document.createElement('button');
    closeButton.addEventListener('click', () => {
      messageCard.remove();
    });
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Close icon';
    closeButton.appendChild(img);

    messageCard.appendChild(closeButton);
    
    const buttonsFieldset = form.querySelector('.buttons');
    form.insertBefore(messageCard, buttonsFieldset);
  }

  function clearMessage() {
    const visibleMessage = document.querySelector('.message-card');
    if (visibleMessage) {
      visibleMessage.remove();
    }
  }

  function showSendingSpinner() {
    form.style.display = 'none';

    const sendingDiv = document.createElement('div');
    sendingDiv.classList.add('sending');
    
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    sendingDiv.appendChild(spinner);

    const spinnerImg = document.createElement('img');
    spinnerImg.src = '/assets/scribble-1B2631.svg';
    spinner.appendChild(spinnerImg);

    const message = document.createElement('span');
    message.classList.add('message');
    message.innerHTML = 'Sending...';
    sendingDiv.appendChild(message);

    form.closest('section').append(sendingDiv);
  }

  function hideSendingSpinner() {
    document.querySelector('.sending').remove();
    form.style.display = 'block';
  }

  function submitForm() {
    const body = new URLSearchParams(new FormData(form));

    showSendingSpinner();

    fetch(form.action, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      body
    })
    .then(response => {
      if (!response.ok) {
        hideSendingSpinner();
        showMessage('Sorry, there was a problem sending your message', 'error');
      } else {
        return response.json();
      }
    })
    .then(data => {
      hideSendingSpinner();
      if (data.error) {
        showMessage(data.error, 'error');
      } else {
        showMessage(data.message, 'success');
        resetForm();
      }
    })
    .catch(error => {
      hideSendingSpinner();
      console.log(error);
      showMessage('Sorry, there was a problem communicating with the server', 'error');
    });
  }

  function resetForm() {
    fields.forEach(field => {
      removeErrorStyles(field);
      field.value = '';
    });
  }

})();