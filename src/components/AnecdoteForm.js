import React from 'react'
import { addAnecdote } from "../reducers/anecdoteReducer";
import { setNotificationMessage } from "../reducers/notificationReducer"
import { connect } from "react-redux";

const AnecdoteForm = (props) => {

  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdote(content)
    props.setNotificationMessage(`Created new anecdote: ${content}`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => createAnecdote(event)}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = { addAnecdote, setNotificationMessage }

export default connect(null, mapDispatchToProps)(AnecdoteForm)