export function validarLogin(nome, senha) {
  const contemNumero = /\d/.test(nome);
  let nomeValido = true;
  let senhaValida = true;

  const resultado = {
    nomeMensagem: "",
    senhaMensagem: "",
    valido: false,
  };

  if (nome.length < 3 || contemNumero) {
    resultado.nomeMensagem = "Nome inválido (mín. 3 letras e sem números)";
    nomeValido = false;
  } else {
    resultado.nomeMensagem = "Nome válido";
  }

  if (senha.length < 8) {
    resultado.senhaMensagem = "Senha muito curta (mín. 8 caracteres)";
    senhaValida = false;
  } else {
    resultado.senhaMensagem = "Senha válida";
  }

  resultado.valido = nomeValido && senhaValida;

  return resultado;
}
