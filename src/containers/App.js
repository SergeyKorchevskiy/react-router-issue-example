/* eslint react/prefer-stateless-function:0 */
import React, { PropTypes } from 'react'

class App extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
