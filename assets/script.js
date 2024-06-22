document.addEventListener('DOMContentLoaded', () => {
  // Real-time Input Handling and Validation
  const emailInput = document.querySelector('#email-input');
  const emailFeedback = document.querySelector('#email-feedback');

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const email = emailInput.value;
      if (validateEmail(email)) {
        emailFeedback.textContent = 'Valid Email';
        emailFeedback.style.color = 'green';
      } else {
        emailFeedback.textContent = 'Invalid Email';
        emailFeedback.style.color = 'red';
      }
    });
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Form submission
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', onFormSubmit);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email-input').value;
    const subject = document.getElementById('subject').value;

    console.log(firstname, lastname, email, subject);

    const formData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      subject: subject,
    };

    const apiEndpoint = 'https://reqres.in/api/users';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    fetch(apiEndpoint, requestOptions)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        showCustomModal("Thank You! I'll get back to you soon.");
      })
      .catch(err => {
        console.error(`Error occurred: ${err}`);
        showCustomModal('Something went wrong. Please try again later.');
      });
  }

  function showCustomModal(message) {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal', 'fade');
    modalElement.id = 'customModal';
    modalElement.tabIndex = '-1';
    modalElement.setAttribute('aria-labelledby', 'customModalLabel');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="customModalLabel">Thank You!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">${message}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalElement);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  // Dropdown Event Handling with Animation
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const img = dropdown.querySelector('img');
    const dropdownContent = dropdown.querySelector('.dropdown_content');

    img.addEventListener('mouseover', () => {
      dropdownContent.style.display = 'block';
      dropdownContent.style.opacity = '1';
      dropdownContent.style.transition = 'opacity 0.5s';
    });

    img.addEventListener('mouseout', () => {
      dropdownContent.style.opacity = '0';
      setTimeout(() => {
        dropdownContent.style.display = 'none';
      }, 500);
    });
  });

  function displayData(data) {
    dataDisplay.textContent = JSON.stringify(data, null, 2);
  }

  // Animated Transitions
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    section.style.opacity = '0.3';
    section.style.transition = 'opacity 5s';

    window.addEventListener('mouseover', () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        section.style.opacity = '0.9';
      }
    });
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((c, i) => {
        if (i !== index) {
          c.style.transform = `translateY(-10px) rotateY(-10deg)`;
        }
      });
    });

    card.addEventListener('mouseleave', () => {
      cards.forEach(c => {
        c.style.transform = '';
      });
    });
  });

  const portfolioTitle = document.getElementById('portfolioTitle');
  setTimeout(() => {
    portfolioTitle.style.opacity = '1';
    portfolioTitle.style.transform = 'translateX(0)';
  }, 500);
});
