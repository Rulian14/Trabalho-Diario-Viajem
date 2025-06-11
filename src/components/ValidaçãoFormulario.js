// src/utils/processarLogin.js
export function processarLogin(event, navigate) {
  event.preventDefault();

  const nome = event.target.username.value;
  const senha = event.target.password.value;
  const isAdmin = event.target["LOGAR COMO ADMIN"].checked;

  const SenhaCurta = document.getElementById("Teste");
  const NomeCurto = document.getElementById("Teste2");

  const contemNumero = /\d/.test(nome);

  let nomeValido = true;
  let senhaValida = true;

  if (nome.length < 3 || contemNumero) {
    NomeCurto.innerHTML = "Nome inválido (mín. 3 letras e sem números)";
    NomeCurto.style.color = "red";
    nomeValido = false;
  } else {
    NomeCurto.innerHTML = "Nome válido";
    NomeCurto.style.color = "green";
  }

  if (senha.length < 8) {
    SenhaCurta.innerHTML = "Senha muito curta (mín. 8 caracteres)";
    SenhaCurta.style.color = "red";
    senhaValida = false;
  } else {
    SenhaCurta.innerHTML = "Senha válida";
    SenhaCurta.style.color = "green";
  }

  if (!nomeValido || !senhaValida) {
    return;
  }

  localStorage.setItem("nome", nome);
  sessionStorage.setItem("senha", senha);
  localStorage.setItem("isAdmin", isAdmin);

  navigate("/MenuUser");
}
