import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";
import Layout from "../components/Layout";

/** Converte um File em Base64 (promessa). */
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

function UploadDiary() {
  const { user } = useAuth(); // ← nome do autor
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fotos, setFotos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Você precisa estar logado.");

    /* Converte cada foto em Base64 ‒ aguarda todas antes de salvar */
    const fotosBase64 = await Promise.all(
      Array.from(fotos).map((f) => toBase64(f))
    );

    const novaAventura = {
      titulo,
      descricao,
      fotos: fotosBase64,
      autor: user.name, // ← associação
      createdAt: Date.now(),
    };

    await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaAventura),
    });

    navigate("/MenuUser");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-white mb-4">Subir Aventura</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Título da aventura"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          className="w-full p-2 rounded bg-slate-200 text-black"
        />

        <textarea
          placeholder="Descrição da aventura"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          rows={4}
          required
          className="w-full p-2 rounded bg-slate-200 text-black"
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setFotos(e.target.files)}
          className="w-full text-white"
        />

        <button
          type="submit"
          className="bg-amber-400 text-black px-4 py-2 rounded hover:bg-amber-500"
        >
          Enviar Aventura
        </button>
      </form>
    </Layout>
  );
}

export default UploadDiary;
