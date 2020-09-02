import React, { useState } from "react";

import "./Add_conteudo.css";

export default function App() {
  const [project, setProject] = useState("");
  return (
    <div className="add-conteudo">
      <h2>Para quem quiser ajudar :)</h2>
      <span>
        Essa é a área para caso você deseje adicionar algum conteúdo para poder
        ensinar e compartilhar sua experiência
      </span>
      <div>
        <form>
          <div>
            <label>Digite seu nome: </label>
            <input type="text" placeholder="Ronaldinho Gaúcho" required />
          </div>
          <div>
            <label>Digite seu email:</label>
            <input type="text" placeholder="ronaldinho7x1@yahoo.com" required />
          </div>
          <div>
            <label>Título do projeto: </label>
            <input
              type="text"
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Digite o link do seu github:</label>
            <input
              type="text"
              placeholder="https://github.com/ronaldo"
              required
            />
          </div>
          <div>
            <label>Digite o link do projeto no github:</label>
            <input type="text" placeholder="https://github.com/ronaldo/dados" />
          </div>
          <div>
            <label>
              Imagem do projeto <strong>(opcional)</strong>:{" "}
            </label>
            <input draggable="true" type="file" />
          </div>
          <div>
            <label>Breve descrição da imagem: </label>
            <input type="text" placeholder="Descrição" />
          </div>
          <div>
            <label>
              Segunda imagem do projeto <strong>(opcional)</strong>:{" "}
            </label>
            <input draggable="true" type="file" />
          </div>
          <div>
            <div>
              <label>Breve descrição da imagem: </label>
              <input type="text" placeholder="Descrição" />
            </div>
            <div>
              <label>
                Breve descrição do projeto: <strong>{project}</strong>
              </label>
              <input type="text" placeholder="Descrição" required />
            </div>
            <div>
              <label>Texto do projeto: </label>
              <textarea required />
            </div>
          </div>
          <button className="btn btn-danger">Enviar</button>
        </form>
      </div>
    </div>
  );
}
