import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl font-bold mb-4">
          Seja Bem-Vindo ao Horizon Hues!
        </h1>
        <p>Bem-vindo ao seu menu de usuário!</p>
      </Layout>
    </div>
  );
}

export default App;
