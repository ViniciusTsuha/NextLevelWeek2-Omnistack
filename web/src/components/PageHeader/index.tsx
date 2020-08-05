import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps{
    title: string;
}

// colocando : React.FC ele vira uma Function Component(ver documentação!!), <> dentro das setas são os compontentes da função
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                    <img src={logoImg} alt="Proffy" />
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>

                    {props.children}
                </div>

            </header>
    );
}

export default PageHeader;