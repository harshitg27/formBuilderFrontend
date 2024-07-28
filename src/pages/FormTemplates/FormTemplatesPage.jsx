import React, { useEffect, useState } from 'react'
import styles from './FormTemplatesPage.module.css'
import Workspace from './Workspace'
import ThemesPage from './ThemesPage'
import Analytics from './Analytics'

function FormTemplatesPage() {
  const [formName, setFormName] = useState('')
  const [formTheme, setFormTheme] = useState('Dark')
  const [formType, setFormType] = useState('')
  const [selectedNav, setSelectedNav] = useState('Flow')
  const [formTemplates , setFormTemplates] = useState([])
  useEffect(() => {
    // console.log(localStorage.getItem('selectedFolde'))
    localStorage.getItem('selectedFormId') ? setFormType('update') : setFormType('create')
  }, [])
  useEffect(()=>{
    console.log(formTemplates)
  },[formTemplates])

  const selectedStyles = {
    color: '#7EA6FF',
    border: 'solid #7EA6FF 1px'
  }
  return (
    <div className={styles.page}>
      <header>
        <div className={styles.formNameInput}>
          {selectedNav === 'Flow' && <input type="text" value={formName} placeholder='Enter Form Name' onChange={(e) => setFormName(e.target.value)} />}
        </div>
        <div className={styles.navBar}>
          <h5 style={selectedNav === 'Flow' ? selectedStyles : {}} onClick={() => setSelectedNav('Flow')} >Flow</h5>
          <h5 style={selectedNav === 'Theme' ? selectedStyles : {}} onClick={() => setSelectedNav('Theme')}>Theme</h5>
          <h5 style={selectedNav === 'Response' ? selectedStyles : {}} onClick={() => setSelectedNav('Response')}>Response</h5>
        </div>
        <div className={styles.actions}>
          <button> Share</button>
          <button style={{ background: 'rgba(74 , 222 , 128 , .8)' }}> Save</button>
          <p>X</p>
        </div>
      </header>

      {selectedNav === 'Flow' && <Workspace templates={formTemplates} setTemplates={setFormTemplates}/>}
      {selectedNav === 'Theme' && <ThemesPage/>}
      {selectedNav === 'Response' && <Analytics/>}
    </div>
  )
}

export default FormTemplatesPage
