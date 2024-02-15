document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'digitalvjti' && password === '8nhL09UYxNexus245k') {
        alert('Your Flag is eX3bnexus241c#589Nh');
    } else {
        alert('Invalid username or password');
    }
});
