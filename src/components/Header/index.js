// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="list-container">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <li>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
