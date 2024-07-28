import React from 'react'
import styles from './Workspace.module.css'
import { bubbles, inputs } from '../../assets/data/inputTypes'
import { GrFlagFill } from 'react-icons/gr'
import TemplateBox from '../../components/FormTemplatesPage/TemplateBox'

function Workspace({templates, setTemplates}) {
    const setValue = ( value , idx) =>{
        // const obj = templates[idx]
        setTemplates([...templates.slice(0 , idx) , {...templates[idx] , value} ,  ...templates.slice(idx+1)])
    }
    const deleteTemplate = ( idx) =>{
        setTemplates([...templates.slice(0 , idx) ,  ...templates.slice(idx+1)])
    }
    const addBubbles = (num , name) =>{
        const obj = {
            type:'Bubble',
            required : true,
            inputType : name ,
            iName : `${name} ${num}`,
            value : ''
        }
        setTemplates([...templates , obj])
    }
    const addInputs = (num , name) =>{
        let hint ;
        if(name == 'Rating'){
            hint = 'User will tap to rate out of 5'
        }else if(name == 'Date'){
            hint = 'User Will select a date'
        }else{
            hint = `User will input a ${name} on his form`
        }
        const obj = {
            type:'Input',
            required : name == 'Button',
            inputType : name ,
            iName : `Input ${name} ${num}`,
        }
        name == 'Button' ? obj.value = '' : obj.hint = hint
        setTemplates([...templates , obj])
    }
    return (
        <div className={styles.page}>
            <div className={styles.inputIconContainer}>
                <h4>Bubbles</h4>
                <div className={styles.bubblesDiv}>
                    {bubbles && bubbles.map((bubble, index) => {
                        return <div className={styles.inputButton} key={index} onClick={() =>{addBubbles(bubble.num , bubble.name)
                            bubble.num += 1
                        }} >
                            <img src={bubble.icons} alt="bubble" />
                            <p>{bubble.name}</p>
                        </div>
                    })}
                </div>
                <h4>Inputs</h4>
                <div className={styles.inputsDiv}>
                    {inputs && inputs.map((input, index) => {
                        return <div className={styles.inputButton} key={index} onClick={() =>{addInputs(input.num , input.name)
                            input.num = input.num + 1
                        }} >
                            <img src={input.icons} alt="bubble" />
                            <p>{input.name}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className={styles.templatesDiv}>
                <div className={styles.templateHeading}>
                    <GrFlagFill style={{color:'white'}}/> <h3>Start</h3>
                </div>
                {templates.map((template , index) => <TemplateBox key={index} template={template} index={index} setValue={setValue} deleteTemplate={deleteTemplate} />)}
            </div>

        </div>
    )
}

export default Workspace
