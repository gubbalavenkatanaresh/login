// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', wrong: false}

  failedMessage = () => {
    const message = "*Username and Password didn't match"
    return <p className="wrong">{message}</p>
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === '') {
      this.setState({wrong: true})
    }
    if (password === '') {
      this.setState({wrong: true})
    }
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok) {
      this.onLoginSuccess()
    } else {
      this.setState({wrong: true})
    }
  }

  render() {
    const {username, password, wrong} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="input">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="input">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {wrong && this.failedMessage()}
        </form>
      </div>
    )
  }
}

export default LoginForm
