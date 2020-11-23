(function() {
  
  // Get elements
  const txtEmail = document.querySelector('email_field');
  const txtPass = document.querySelector('password_field');
  const btnLogin = document.querySelector('btnLogin');
  const btnSubmit = document.querySelector('btnSignUp');
  const btnLogout = document.querySelector('btnLogout');

  // Add login events
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPass.value;

    console.log(email + " " + pass);

    const auth = firebase.auth();

    console.log("Success");
    
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });


}());