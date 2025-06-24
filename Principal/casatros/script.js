document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();                       // Impede o envio padrão

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Credenciais falsas
    const users = [
      { email: "admin@intermed.com",   senha: "admin123",   tipo: "admin"   },
      { email: "usuario@intermed.com", senha: "usuario123", tipo: "usuario" }
    ];

    const usuarioValido = users.find(
      user => user.email === email && user.senha === senha
    );

    if (usuarioValido) {
      // Mensagem opcional: pode comentar se não quiser o alerta
      alert(`Bem-vindo, ${usuarioValido.tipo === 'admin' ? 'administrador' : 'usuário'}!`);

      /* Redireciona para a página principal */
      window.location.href = "../index.html";
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  });
});
