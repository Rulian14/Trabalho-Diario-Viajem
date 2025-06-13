import { useAuth } from "../utils/AuthContext.jsx";
import AuthForm from "../components/AuthForm";

function LoginUser() {
  const { login } = useAuth();

  return (
    <AuthForm
      titulo="Login"
      textoBotaoPrincipal="Entrar"
      textoBotaoAlternativo="Não tem uma conta? Crie aqui"
      rotaBotaoAlternativo="/RegisterUser"
      isLogin={true}
      login={login}
    />
  );
}

export default LoginUser;
