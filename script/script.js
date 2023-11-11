  const inputs = document.querySelectorAll('input');

  const patterns = {
    phoneNumber: /^[\d]{11}$/,
    email: /^([a-z\d\.\-_]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@\-]{8,20}$/,
    confirmPassword: /^[\w@\-]{8,20}$/
  }

  function validate(field, pattern) {
    if (pattern.test(field.value)) {
      field.className = 'valid';
    } else {
      field.className = 'invalid';
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      if (e.target.name != 'first-name' && e.target.name != 'last-name') {
        validate(e.target, patterns[e.target.attributes.name.value]);
      }
    })
  })

  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');

  confirmPassword.addEventListener('keyup', (e) => {
    if (confirmPassword.value != password.value) {
      document.querySelector('.error-message')
        .removeAttribute('hidden');
      document.querySelector('.no-error')
        .setAttribute('hidden', true);
    } else {
      document.querySelector('.error-message')
        .setAttribute('hidden', true);
      document.querySelector('.no-error')
        .removeAttribute('hidden');
    }
  })
  
