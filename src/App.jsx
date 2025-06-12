import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ImagemGlobo from "./assets/ImagemGlobo.png";
import IrFeedPost from "./components/IrFeedPost.jsx";

function App() {
  return (
    <div>
      <Layout>
        <div className="h-full bg-slate-600 flex justify-center ">
          <div className="h-[80vh] w-[850px] flex flex-col">
            <h1 className="text-3xl p-4 font-bold mb-4 text-white">
              Seja Bem-Vindo ao Horizon Hues!
            </h1>
            <div className="flex items-center gap-6 p-4">
              <p className="text-white max-w-[60%]">
                🌍 <strong>Sobre a Horizon Hues</strong>
                <br />
                Horizon Hues é uma plataforma para apaixonados por viagens!
                Aqui, você pode compartilhar fotos, registrar lugares incríveis
                que visitou e reviver suas aventuras pelo mundo. É como um
                Instagram, mas totalmente voltado para diários de viagem, onde
                cada postagem conta uma história, um destino e uma experiência
                inesquecível. Crie seu perfil, publique suas memórias e inspire
                outros viajantes com suas paisagens favoritas. 🌅✈️📍
              </p>
              <div className="border-2 border-white flex justify-center items-center w-[250px] h-[250px] rounded-full overflow-hidden">
                <img
                  src={ImagemGlobo}
                  alt="Globo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <IrFeedPost />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
