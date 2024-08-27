import React, { useState } from "react";
import Todo from "../../pages/todo"; // Certifique-se que este caminho está correto
import Home from "../../pages/home/home";
import About from "../../pages/sobre/sobre";

enum EnumPaginas {
    'home' = 'home',
    'todo' = 'todo',
    'sobre' = 'sobre'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = useState<EnumPaginas>(EnumPaginas.home);

    const renderizarCabecalho = () => (
        <div>
            <button onClick={() => setPaginaAtual(EnumPaginas.home)}>Início</button>
            <button onClick={() => setPaginaAtual(EnumPaginas.todo)}>Todo</button>
            <button onClick={() => setPaginaAtual(EnumPaginas.sobre)}>Sobre</button>
        </div>
    );

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case EnumPaginas.home:
                return <Home />; 
            case EnumPaginas.todo:
                return <Todo />;
            case EnumPaginas.sobre:
                return <About />; 
            default:
                return <Home />; 
        }
    };

    return (
        <div>
            {renderizarCabecalho()}
            {renderizarPagina()}
        </div>
    );
}

export default Router;
