import React, { Component } from 'react'
import { connect } from "react-redux"

class CreateTodo extends Component {
  state = {
    text: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      text: "",
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <label>add todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, (dispatch) => {
  return {
    addTodo: (formData) => {
      dispatch({
        type: "ADD_TODO",
        payload: formData,
      })
    },
  }
})(CreateTodo);
