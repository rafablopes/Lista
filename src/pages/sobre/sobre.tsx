import React from 'react';
import avatar from '../../assets/images/avatar.jpeg';

const About: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <img src={avatar} alt="Avatar" style={{ borderRadius: '50%', width: '150px' }} />
            <h1>Rafaela Boldrini Lopes</h1>
            <h2>Estudante que busca uma chance na área de programação...kkk</h2>
            <p>
             Meu nome é Rafaela e eu sou estudante de engenharia de Software, to tentando buscar maiores aprendizados na programação, um passo de cada vez...
            </p>
            <p>Confira meu GitHub: <a href="https://github.com/rafablopes" target="_blank" rel="noopener noreferrer">Rafaela</a></p>
        </div>
    );
};

export default About;
