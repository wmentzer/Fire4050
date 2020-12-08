window.onload = function() {
    // Get elements
  const txtEmail = document.getElementById('txt_email');
  const txtPass = document.getElementById('txt_pass');
  const login = document.getElementById('login');
  const signup = document.getElementById('btnSignUp');
  const logout = document.getElementById('btnLogout');
  const success = document.getElementById('logged-in')

  // Add login events
  login.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPass.value;

    console.log(email + " " + pass);

    const auth = firebase.auth();

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add signup events
  signup.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPass.value;

    console.log(email + " " + pass);

    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add logout events
  logout.addEventListener('click', e => {
    firebase.auth().signOut();
    console.log("SIGNED OUT");
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      logout.style.display = "block";
      success.style.display = "block";
      login.style.display = "none";
    } else {
      success.style.display = "none";
      logout.style.display = "none";
      login.style.display = "block";
    }
  });
}