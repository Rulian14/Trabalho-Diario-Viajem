import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <div className="h-full bg-slate-600">
          <div className=" h-full w-[850px]">
            <h1 className="text-3xl p-4 font-bold mb-4">
              Seja Bem-Vindo ao Horizon Hues!
            </h1>
            <p className="p-4">
              🌍 Sobre a Horizon Hues
              <br />
              Horizon Hues é uma plataforma para apaixonados por viagens! Aqui,
              você pode compartilhar fotos, registrar lugares incríveis que
              visitou e reviver suas aventuras pelo mundo. É como um Instagram,
              mas totalmente voltado para diários de viagem, onde cada postagem
              conta uma história, um destino e uma experiência inesquecível.
              Crie seu perfil, publique suas memórias e inspire outros viajantes
              com suas paisagens favoritas. 🌅✈️📍
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
