import React from "react";
import Card from "../style/card/Card";

import Projects from "../../data/projects";

import "./Content.css";

function Content() {
  const projetos = Projects.map((project) => {
    return (
      <Card
        id={project.id}
        name_author={project.name}
        name_project={project.project_name}
        content={project.content}
        github={project.github}
        describe={project.describe}
        lenguages={project.lenguages}
        img1={project.img1}
        img2={project.img2}
        type_img1={project.type_img1}
        type_img2={project.type_img2}
        img_description1={project.img_description1}
        img_description2={project.img_description2}
      />
    );
  });

  return (
    <div className="content">
      <h1>Projetos Data Science</h1>
      <p>
        Bem vindo a Data Science inc©. Sua plataforma para visualização de dados
      </p>
      <hr color="red" />
      {projetos}
    </div>
  );
}

export default Content;
