
import React from 'react'
import { connect } from 'react-redux'

const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1
}

const Notification = (props) => {
  return props.notification ? <div style={style}>{props.notification}</div> : null;
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification