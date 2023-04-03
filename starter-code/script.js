
  const form = document.querySelector('form');
  const emailInput = document.querySelector('#e-mail');
  const errorSpan = document.querySelector('.container > span');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents form from submitting by default
    
    const email = emailInput.value;
    
    if (email.includes("@") && email.includes(".")) {
        errorSpan.style.display ='none'
    } else {
      errorSpan.style.display = 'block'; // Shows error message if email is invalid
    }
  });
  

