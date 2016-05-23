import React, { PropTypes } from 'react'

export default class Token extends React.Component {
  static propTypes = {
    params: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)

    const token = this.getToken()
    this.state = { token }
  }

  getToken() {
    const { params } = this.props
    const token = params.access_token

    if (!token) {
      throw new Error('Authentication error: token not found')
    }

    return token
  }

  render() {
    return (
      <div>
        Successful login!
        <h3>Token: {this.state.token}</h3>
      </div>
    )
  }
}
