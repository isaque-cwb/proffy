import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacheItem() {
    return (

        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/57151930?v=4" alt="Isaque" />
                <div>
                    <strong>Isaque Lourenço</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de Quimica avançada.
                <br /><br />
                Apaixonado por explodir coisas do laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacheItem;


