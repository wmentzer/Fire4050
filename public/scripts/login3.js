(function() {
  
  // Get elements
  const txtEmail = document.getElementById('email_field');
  const txtPass = document.getElementById('password_field');
  const btnLogin = document.getElementById('btnLogin');
  const btnSubmit = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

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