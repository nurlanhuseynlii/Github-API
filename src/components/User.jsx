import React, { Component } from 'react'

class User extends Component {
  render() {
    const {login,id,avatar_url,html_url} = this.props.istifadeci
    return (
      <div className="card col-12 col-sm-6 col-md-4">
      <img src={avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <p className="card-text">{id}</p>
        <a href={html_url} target="_blank" className="btn btn-info" rel="noreferrer">Go profile</a>
      </div>
    </div>
    )
  }
}

export default User