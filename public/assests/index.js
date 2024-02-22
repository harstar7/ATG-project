document.addEventListener('DOMContentLoaded', function () {

    var openButton = document.getElementById('openButton');
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));

    openButton.addEventListener('click', function () {
        modal.show();
        console.log('Modal is open');
    });

 
    var closeButton = document.querySelector('#exampleModal .close');
    closeButton.addEventListener('click', function () {
        modal.hide();
    });

 
    var signInButton = document.querySelector('#exampleModal .btn-sign-in');
    signInButton.addEventListener('click', function () {
        // Handle sign-in logic or redirect to the sign-in page
        console.log('Redirect to sign-in page');
    });


    var createAccountButton = document.querySelector('#exampleModal .btn-create-account');
    createAccountButton.addEventListener('click', function () {
        // Handle create account logic
        console.log('Create account logic');
    
    });
});
