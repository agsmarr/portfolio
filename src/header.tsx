import moon from './assets/moon.jpg'
import headshot from './assets/headshot.jpg'
import './header.css'

function Header() {
    return (
        <div className = 'header'>
          <div className = 'left-header'>
            <div className = 'name-photo'>
              <div className = 'logo-name'>
                <div className = "name">
                  <div id = "first-name">Amanda</div>
                  <div id = "last-name">Smarr</div>
                </div>
                <img id = "moon-img" src= {moon}/>
              </div>
            </div>
              <div className = 'caption'>
                <div>Senior Computer Science Student</div>
                <div>at the University of Delaware</div>
              </div>
          </div>
          <div className = 'right-header'>
            <div className = 'headshot'>
              <img id = "headshot-img" src = {headshot}/>
            </div>
          </div>
        </div>
    )
}

export default Header;