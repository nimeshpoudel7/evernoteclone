import React from 'react'
import Note from './Note'
const NoteList = ({noteValue}) => {
    return (
        <div className='notelist'>
            Note_list
            {noteValue?(noteValue.map((notepara)=>{

                return <Note notevaluefromlist={notepara} key={notepara.id}/>
            })):('hey nothig foune')}
            
        </div>
    )
}

export default NoteList
