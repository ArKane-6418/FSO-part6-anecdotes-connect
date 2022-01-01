import React from 'react'
import { addVote } from "../reducers/anecdoteReducer";
import { setNotificationMessage } from "../reducers/notificationReducer"
import { connect } from "react-redux";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    props.addVote(anecdote)
    props.setNotificationMessage(`You voted for: ${anecdote.content}`, 5)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id}
          anecdote={anecdote} handleClick={() => vote(anecdote)}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => { 
  let res = state.anecdotes
  if (state.filter) {
    res = state.anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
  }
  return { 'anecdotes': res }
}

const mapDispatchToProps = { addVote, setNotificationMessage }
export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)