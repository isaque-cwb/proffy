import React from 'react'
import PageHeader from '../../components/PageHeader';
import './style.css'
import Input from '../../components/Input';


import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title='Que incrível que você quer dar aulas'
                description='O Primeiro passo é preencher esse formulário de inscrição'
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input  name='name' label='Nome Completo' /> 
                    <Input  name='avatar' label='Avatar' /> 
                    <Input  name='whatsapp' label='WhatsApp'  type='' /> 
                    <Textarea name='bio' label='Biografia' />
                    
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select  
                    name='subject' 
                    label='Matéria' 
                    options={[
                        {value: 'Artes', label: 'Artes'},
                        {value: 'Biologia', label: 'Biologia'},
                        {value: 'Ciências', label: 'Ciências'},
                        {value: 'Educação Física', label: 'Educação Física'},
                        {value: 'Física', label: 'Física'},
                        {value: 'Geografia', label: 'Geografia'},
                        {value: 'História', label: 'História'},
                        {value: 'Matemática', label: 'Matemática'},
                        {value: 'Português', label: 'Português'},
                        {value: 'Química', label: 'Química'},
                    ]}
                    /> 
                    <Input  name='cost' label='Custo da sua hora por aula' /> 
                    
                </fieldset>
                <fieldset>
                    <legend>
                        Horários Disponíveis
                    <button type='button'> + Novo Horário</button>
                    </legend>

                    <div className="schedule-item">
                    <Select  
                    name='subject' 
                    label='Dias da Semana' 
                    options={[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sábado'}
                       
                    ]}
                    /> 
                    <Input label='Das' name='from' type='time' />
                    <Input label='Até' name='to' type='time' />
                    </div>
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type='button'>
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}


export default TeacherForm;

