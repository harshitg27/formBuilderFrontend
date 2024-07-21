import React from 'react'
import styles from './LandingPage.module.css'
import logo from '../../assets/logo.png'
import chatbotimg from '../../assets/images/chatBotIntro.png'

function LandingPage() {
  return (
    <div className={styles.page} >
      <header className={styles.header} >
        <div className={styles.heading} >
            <img src={logo} alt="logo" />
            <h4>FormBot</h4>
        </div>
        <div className={styles.navbar} >
          <button className={styles.loginButton} >Sign in</button>
          <button className={styles.signupButton} >Create a FormBot</button>
        </div>
      </header>

      <div className={styles.container} >
        {/* introduction of chatbot part */}
        <section className={styles.chatbotIntroContainer} >
          <div className={styles.chatbotIntro} >
            <h2>Build advanced chatbots <br/> visually</h2>
            <p>Typebot gives you powerful blocks to create unique chat experiences. Embed them<br/>
            anywhere on your web/mobile apps and start collecting results like magic.</p>
            <button className={styles.signupButton} >Create a FormBot for free</button>
          </div>
          <div className={styles.introImage} style={{marginTop : '50px'}}>
            <img src={chatbotimg} alt="" />
          </div>
        </section>

        {/* Replace form  to new ChatBot section */}
      </div>
    </div>
  )
}

export default LandingPage
