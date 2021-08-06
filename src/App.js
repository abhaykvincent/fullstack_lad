import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <div className="lets-chat">
        <div className="lets-chat-BOX">
          <div className="abhay-bot">
            <div className="bot-head">Head</div>
            <div className="bot-chat">
              <div className="messages">
                <div className="message bot-message">
                  <div className="profile"></div>
                  <div className="text-message">Hi Im Abhay Bøt</div>
                </div>
                <div className="message bot-message">
                  <div className="profile"></div>
                  <div className="text-message">I’m just like Abhay, but a far better
conversationalist 😉</div>
                </div>
                <div className="message user-message">
                  <div className="profile"></div>
                  <div className="text-message">👋  I just wanted to say hello</div>
                </div>
              </div>
              <div className="options">
                <div className="option">👋  I just wanted to say hello</div>
                <div className="option">🖥  I have an exciting project!</div>
                <div className="option">💼  I’d like to hire you!</div>
              </div>
              <div className="input-message">
                <input type="text" className="user-message-input"/>
              </div>
            </div>
          </div>
          
        </div>
        <div className="lets-chat-button"></div>
        <div className="screen-cover"></div>
      </div> */}
      <div className="header">
        <div className="logo">Fullstack Lad</div>
      </div>
      <div className="splash">

        <div className="splash-image"></div>
        <div className="splash-title">
          <p>Hi,</p>
          <p>I’m Abhay,</p>
          <p>Web Developer</p>
        </div>
        <div className="splash-buttons">
          <div className="links-from-bio_button">Links from Bio</div>
          <div className="splash-social">
            <div className="social-icons">F</div>
            <div className="social-icons">G</div>
            <div className="social-icons">T</div>
          </div>
        </div>
      
      </div>
      <div className="post signal">
        <div className="post-header">
          <p className="date-posted">7, January 2020</p>
        </div>
        <div className="post-wrap post-signal">

          <div className="post-signal-title">“Hey there! I am using Signal”</div>
          <div className="post-signal-image"></div>

          <div className="post-signal-context">As Whatsapp is changing their policy which is forcing users to share personal data with Facebook, Im switching to Signal which focus on privacy, combined with all of the features from Whatsapp</div>

          <div className="post-signal-cta">
            <div className="signal-me-label"><div class="signal-logo-single"></div> <div className="label-text"> Signal Me on</div> </div>
            <div className="signal-me-number">+1 365 688 2276</div>
          </div>


        </div>
      </div>
      <div className="footer">
        <div className="footer-logo">
          <div className="footer-logo-image">Fullstack Lad</div>
          <div className="footer-author-name">Abhay Vincent</div>
        </div>
        <div className="footer-contacts">
          <div className="socials">
            <div className="social">Instagram</div>
            <div className="social">GitHub</div>
          </div>
          <div className="directs">
            <div className="direct">abhaykvincent@gmail.com</div>
            <div className="direct">+1 365 688 2276</div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright 2020 | Abhay Vincent</p>
        </div>
      </div>
    </div>
  );
}

export default App;
