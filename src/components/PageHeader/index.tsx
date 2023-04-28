import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps{
    children?: ReactNode; 
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to ='/'>
                <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoimg} alt="logo Proffy" />
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
        {props.children}
        </div>
    </header>
    )
}

export default PageHeader;

