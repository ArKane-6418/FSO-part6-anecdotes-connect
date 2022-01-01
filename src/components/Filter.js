import React from "react"
import { updateFilter } from "../reducers/filterReducer";
import { connect } from "react-redux";

const style = {
  marginBottom: 10
}

const Filter = (props) => {

  const handleChange = (event) => {
    const filter = event.target.value
    props.updateFilter(filter)
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange}/>
    </div>
  )
}

const mapDispatchToProps = { updateFilter }

export default connect(null, mapDispatchToProps)(Filter)