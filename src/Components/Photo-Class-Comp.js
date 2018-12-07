import React, { Component } from 'react'

class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = { post: props.post }
  }
  render() {
    // constructor above replaces the below method
    //const post = this.props.post
    // 9. 
    // If we used 'const post' instead of a 'constructor' button would be:
    /*  -   <button className='button remove-button' onClick={() => {
              props.onRemovePhoto(post)
            }}>Remove</button> */
    return (
      <figure className='figure'>
        <img
          className='photo'
          src={this.state.post.imageLink}
          title={this.state.post.description}
          alt={this.state.post.description} />
        <figcaption>
          <p>{this.state.post.description}</p>
        </figcaption>
        <div className='button-container'>
          <button className='button remove-button' onClick={() => {
            this.props.onRemovePhoto(this.state.post)
          }}>Remove</button>
        </div>
      </figure>
    )
  }
}

export default Photo