import React, { useEffect, useState } from 'react'
import { getFormById } from '../../api/Form'
import bubbleIcon from '../../assets/images/chatIcon.png'
import sendIcon from '../../assets/images/send.png'
import styles from './FormResponsePage.module.css'
import 'video-react/dist/video-react.css'; // import css
import { Player } from 'video-react'

function FormResponsePage() {
    const [formId, setFormId] = useState('')
    const [formTheme, setFormTheme] = useState('Dark')
    const [formTemplates, setFormTemplates] = useState([])
    const path = window.location.pathname.split('/')
    const fetchForm = async (id) => {
        const response = await getFormById(id)
        if (response.status == 200) {
            // console.log(response.data.form)
            setFormTheme(response.data.form.formTheme)
            setFormTemplates(response.data.form.formTemplate)
        } else {
            alert('Invalid Url Please Enter Correct Url')
        }
    }

    useEffect(() => {
        setFormId(path[path.length - 1])
        fetchForm(path[path.length - 1])
    }, [])
    useEffect(()=>{
        // console.log(formTemplates)
    } , [formTemplates])
    return (
        <div className={styles.page} style={formTheme == 'Dark' ? { background: '#1F1F23' } : formTheme == 'TailBlue' ? { background: '#508C9B' } : { background: '#ffffff' }}>
            {formTemplates && formTemplates.map((template, index) => {
                return template.type == 'Bubble' ? <Bubble key={index} template={template} /> : <InputBox key={index} template={template} />
            })}
            {/* <Bubble /> */}
            {/* <div className={styles.applyTheme} style={formTheme == 'Dark' ? {background:'#1F1F23'} : formTheme == 'TailBlue' ? {background:'#508C9B'} : {background:'#ffffff'} }>
        <div className={styles.bubble}>
          <img src={bubbleIcon} alt="Bubble" />
          <p>Hello</p>
        </div>
        <div className={styles.input}>
          <p>Hi</p>
          <div></div>
        </div>
      </div> */}
        </div>
    )
}

export default FormResponsePage

function Bubble({template}) {
    return (
        <div className={styles.bubble}>
            <img className={styles.bubbleIcon} src={bubbleIcon} alt="Bubble" />
            {template.inputType == 'Text' && <p>{template.value}</p>}
            {template.inputType == 'Image' && <img src={template.value} alt={template.iName} />}
            {template.inputType == 'GIF' && <img src={template.value} alt={template.iName} />}
            {/* {template.inputType == 'Video' && <Player >
                <source src={template.value} />
                </Player>} */}
        </div>
    )
}
function InputBox({template}) {
    console.log(template)
    return (
        <div className={styles.input}>
            {template.inputType == 'Button' ? <p>{template.value}</p> :
            <div>
                <input type={template.inputType.toLowerCase()} />
                <div><img src={sendIcon} alt="" width='40px' height='40px' /></div>
            </div>}
        </div>
    )
}
