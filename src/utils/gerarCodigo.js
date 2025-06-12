//Gera um codigo com base na senha e nome de usuário
export function gerarCodigo(nome, senha) {
  return btoa(`${nome}:${senha}`);
}
