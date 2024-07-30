document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === 'admin' && password === 'admin') {
        errorMessage.textContent = '';
        alert('Login exitoso');
        window.location.href = 'index.html'; // Redirigir a la página de inicio
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});
