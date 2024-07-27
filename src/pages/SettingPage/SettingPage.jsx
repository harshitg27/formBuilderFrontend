import React, { useEffect, useState } from 'react'
import { UserData } from '../../api/User'

import styles from './SettingPage.module.css'
import { GrHide, GrLock, GrLogout, GrMail, GrUser, GrView } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

function SettingPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldPasswordType, setOldPasswordType] = useState('password');
    const [newPasswordType, setNewPasswordType] = useState('password');

    const Logout = () => {
        localStorage.removeItem('userToken')
        navigate('/')
    }
    const fetchUser = async () => {
        const response = await UserData()
        if (response.status == 200) {
            console.log(response.data.user)
        } else if (response.status == 400 || response.status == 401) {
            Logout()
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className={styles.page} >
            <h4 style={{ fontWeight: '600', fontSize: '1.37rem' }}>Settings</h4>

            <div className={styles.Logout} onClick={Logout} >
                <GrLogout style={{ height: '1.5rem', width: '1.5rem' }} />
                <p>Log out</p>
            </div>

            <div className={styles.updateForm}>
                <form onSubmit={Logout}>
                    <div>
                        <GrUser />
                        <input
                            type="text"
                            value={username}
                            placeholder='Enter a Upadated username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <GrMail />
                        <input
                            type="email"
                            value={email}
                            placeholder='Enter your Updated email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <GrLock />
                        <input
                            type={oldPasswordType}
                            value={oldPassword}
                            placeholder='Old password'
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        {oldPasswordType == 'text' ?
                            <GrHide onClick={() => setOldPasswordType('password')} /> :
                            <GrView onClick={() => setOldPasswordType('text')} />}
                    </div>
                    <div>
                        <GrLock />
                        <input
                            type={newPasswordType}
                            value={newPassword}
                            placeholder='New password'
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {newPasswordType == 'text' ?
                            <GrHide onClick={() => setNewPasswordType('password')} /> :
                            <GrView onClick={() => setNewPasswordType('text')} />}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SettingPage
