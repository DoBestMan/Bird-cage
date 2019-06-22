import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    this.props.store.addBird(this.bird.value)
    this.bird.value = ""
  }  

  render() {
    const { store } = this.props

    return (
      <div className="App">
        <h2>You have {store.birdCount} birds.</h2>

        <form onSubmit = {e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter Bird" ref={input => this.bird = input} />
          <button>Add Bird</button>
        </form>

        <ul>
          {store.birds.map((bird, index) => (
            <li key={index}>
              {bird}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
