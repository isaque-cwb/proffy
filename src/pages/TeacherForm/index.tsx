import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import './style.css';
import Input from '../../components/Input';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherForm() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }



    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })
        setScheduleItems(updatedScheduleItems)
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault()

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {

            toast.success('Cadastrado!', {
                position: toast.POSITION.TOP_CENTER,
                style: {

                }
            })

            setName('')
            setAvatar('')
            setWhatsapp('')
            setBio('')
            setSubject('')
            setCost('')
            setScheduleItems([{ week_day: -1, from: '', to: '' }])

            setTimeout(() => {

                navigate('/')
            }, 3000);

        }).catch(() => {
            toast.error('Erro no Cadastro', {
                position: toast.POSITION.TOP_CENTER,
                style: {

                }
            });


        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title='Que incrível que você quer dar aulas'
                description='O Primeiro passo é preencher esse formulário de inscrição'
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset >
                        <legend>Seus Dados</legend>

                        <Input
                            name='name'
                            label='Nome Completo'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name='avatar'
                            label='Avatar'
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name='whatsapp'
                            label='WhatsApp'
                            type='tel'
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea
                            name='bio'
                            label='Biografia'
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name='subject'
                            label='Matéria'
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: '', label: '' },
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />
                        <Input
                            name='cost'
                            label='Custo da sua hora por aula'
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button
                                type='button'
                                onClick={addNewScheduleItem}
                            > + Novo Horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name='subject'
                                    label='Dias da Semana'
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                        { value: '', label: '' },
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sábado' }
                                    ]}
                                />
                                <Input
                                    label='Das'
                                    name='from'
                                    type='time'
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <Input
                                    label='Até'
                                    name='to'
                                    type='time'
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        ))}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button
                            type='submit'
                        >
                            Salvar Cadastro
                            <ToastContainer
                                autoClose={2500}
                                closeButton={false}
                                transition={Flip}
                                closeOnClick={false}
                            />
                        </button>

                    </footer>
                </form>
            </main>
        </div>
    )
}


export default TeacherForm;

