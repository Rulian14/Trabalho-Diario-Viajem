import AuthForm from "../components/AuthForm";
import { useAuth } from "../utils/AuthContext.jsx";

function LoginArea() {
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

export default LoginArea;
