import React, { useEffect, useState } from 'react'
import { updateUser, UserData } from '../../api/User'
import styles from './SettingPage.module.css'
import { GrHide, GrLock, GrLogout, GrMail, GrUser, GrView } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

function SettingPage() {
    const navigate = useNavigate()
    const [error, setError] = useState({ username: '', oldPassword: '', newPassword: '' })
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldPasswordType, setOldPasswordType] = useState('password');
    const [newPasswordType, setNewPasswordType] = useState('password');

  return (
    <div>
        <div className={styles.updateForm}>
                <form >
                    <div className={styles.inputBox}>
                        <GrUser className={styles.leftIcon} />
                        <input
                            type="text"
                            value={username}
                            placeholder='Enter a Upadated username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {error.username && <p>{error.username}</p>}
                    </div>
                    <div className={styles.inputBox}>
                        <GrMail className={styles.leftIcon} />
                        <input
                            type="email"
                            value={email}
                            placeholder='Enter your Updated email'
                            readOnly
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <GrLock className={styles.leftIcon} />
                        <input
                            type={oldPasswordType}
                            value={oldPassword}
                            placeholder='Old password'
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        {error.oldPassword && <p>{error.oldPassword}</p>}
                        {oldPasswordType == 'text' ?
                            <GrHide className={styles.rightIcon} onClick={() => setOldPasswordType('password')} /> :
                            <GrView className={styles.rightIcon} onClick={() => setOldPasswordType('text')} />}
                    </div>
                    <div className={styles.inputBox}>
                        <GrLock className={styles.leftIcon} />
                        <input
                            type={newPasswordType}
                            value={newPassword}
                            placeholder='New password'
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {error.newPassword && <p>{error.newPassword}</p>}
                        {newPasswordType == 'text' ?
                            <GrHide className={styles.rightIcon} onClick={() => setNewPasswordType('password')} /> :
                            <GrView className={styles.rightIcon} onClick={() => setNewPasswordType('text')} />}
                    </div>

                </form>
                
                <button onClick={()=>console.log('btn Click')}>Sign Up</button>
            </div>
      
      <button onClick={()=>console.log('btn Click')}>Sign Up</button>
    </div>
  )
}

export default SettingPage
