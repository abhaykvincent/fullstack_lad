import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="username">fullstack_lad</p>
      </header>
      <div className="profile">
        <div className="photo"></div>
        <p className="website">abhayvincent.com</p>
      </div>
      <div className="buttons">
        <a href="http://www.abhayvincent.com" className="button primary">Portfolio</a>  
        <a href="http://www.abhayvincent.com" className="button "><p>Visit Website</p> </a>  
      </div>
      <div className="links">
        <div className="label">Links</div>
        <div className="thumbnails">
          <p className="month">July</p>
          <div className="thumbnail-month_wrap">
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">1</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">2</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">3</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
          </div>
          
          <p className="month">August</p>
          <div className="thumbnail-month_wrap">
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">1</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">2</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
          </div>
          
          <p className="month">September</p>
          <div className="thumbnail-month_wrap">
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">1</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">2</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">3</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
            <div className="thumbnail">
              <div className="no">
                <div className="no_wrap">
                  <p className="link_label">Link</p>
                  <p className="link_number">4</p>
                </div>
              </div>
              <div className="link">
                <p className="link-label">Lorem ipsum dolor sit.</p>
                <p className="link-ref">Story</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="diclaimer">
        <p><span class="bold ">Diclaimer : </span>This webpage serves a  list of links for instagram page <span class="bold">fullstack_lad</span> for a fine follower experiance. Since Instagram isnt allowing to post multiple website links in Bio, follower can visit websites mentioned in Stories and posts from this webpage. This Website is not a part of Instagram App or instagram.com</p>
      </div>
      <div className="footer">
        <p className="developer">Developed By <a href="http://www.abhayvincent.com">Abhay Vincent</a></p>
      </div>
    </div>
  );
}

export default App;
