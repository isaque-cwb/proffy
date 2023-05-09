import React, { FormEvent, useState } from 'react'

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacheItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



function TeacherList() {

    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeqchers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })
        
        setTeachers(response.data)
        console.log({
            subject,
                week_day,
                time,
        })
       
    }


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='São estes os Proffys disponíveis.'>
                <form id="search-teachers" onSubmit={searchTeqchers} >

                    <Select
                        name='subject'
                        label='Matéria'
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
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
                            { value: 'Quimica', label: 'Quimica' },
                        ]}
                    />
                    <Select
                        name='subject'
                        label='Dias da Semana'
                        value={week_day}
                        onChange={e => { setWeek_day(e.target.value) }}
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
                        label='Hora'
                        name='time'
                        type='time'
                        value={time}
                        onChange={e => { setTime(e.target.value) }}
                    />
                    <button type='submit'>
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher)=>{
                    return <TeacheItem key={teacher.id} teacher={teacher}/>
                })}
                
            </main>
        </div>
    )
}


export default TeacherList;

