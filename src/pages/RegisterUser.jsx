import { useAuth } from "../utils/AuthContext.jsx";
import AuthForm from "../components/AuthForm";

function RegisterUser() {
  const { login } = useAuth();

  return (
    <AuthForm
      titulo="Registrar Conta"
      textoBotaoPrincipal="Criar Conta"
      textoBotaoAlternativo="Já tem uma conta? Fazer login"
      rotaBotaoAlternativo="/LoginUser"
      isLogin={false}
      login={login}
    />
  );
}

export default RegisterUser;
