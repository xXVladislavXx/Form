jQuery( document ).ready(function() {
jQuery('.contactForm select').on('change', function() {
    if (jQuery(this).val() === "") {
        jQuery(this).addClass('placeholder').removeClass('others');
    } else {
        jQuery(this).addClass('others').removeClass('placeholder');
    }
  });
  jQuery('#tel').inputmask("+38(099)999-99-99", {
    showMaskOnHover: false  
  });

});


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var password = document.getElementById('password').value;
    var city = document.getElementById('city').value;
    var policy = document.getElementById('policy');

    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('telError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('cityError').innerHTML = '';
    document.getElementById('policyError').innerHTML = '';

    var elements = document.querySelectorAll('.contactForm input,.contactForm select'); 
      elements.forEach(function(element) {
        element.classList.remove('errorInput');
      });


    if (name.trim() === '') {
        document.getElementById('name').classList.add("errorInput");
        document.getElementById('nameError').innerHTML = 'The field cannot be empty';
        return false;
      }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add("errorInput");
      document.getElementById('emailError').innerHTML = 'Enter a correct email';
      return false;
    }

    if (tel.trim() === '') {
        document.getElementById('tel').classList.add("errorInput");
        document.getElementById('telError').innerHTML = 'Enter a correct phone number';
        return false;
      } 

    if (password.trim() === '') {
        document.getElementById('password').classList.add("errorInput");
        document.getElementById('passwordError').innerHTML = 'The field cannot be empty';
        return false;
      }
    
      if (city === '') {
        document.getElementById('city').classList.add("errorInput");
        document.getElementById('cityError').innerHTML = 'The field cannot be empty';
        return false;
      }

      if (!policy.checked) {
        document.getElementById('policyError').innerHTML = 'Required field';
        return false;
      }

      jQuery.ajax({
        type: 'POST',
        url: './form.php',
        data: jQuery('#contactForm').serialize(),
        success: function(response) {
          document.getElementById('contactForm').style.display = 'none';
          document.getElementById('afterForm').innerHTML = response;
          document.getElementById('afterForm').style.display = 'block';
        },
        error: function(error) {
          console.error('Error:', error);
        }
      });

      return false;
  }


  function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggle = document.getElementById('passwordToggle');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggle.classList.add("open");
    } else {
      passwordInput.type = 'password'; 
      toggle.classList.remove("open");
    }
  }

  function highlightOnChange() {
    var passwordInput = document.getElementById('password');
    var toggle = document.getElementById('passwordToggle');
    
    if (passwordInput.value.trim() !== '') {
        toggle.classList.add('full');
    } else {
        toggle.classList.remove('full');
    }
  }
  
  function toggleSelect(selectElement) {
    selectElement.classList.toggle('open');
  }