import React, { Component } from 'react'

class AddPhoto extends Component {
// S6.L39.2.
  // set up the Constructor so we can bind the handleSubmit method
  //  - don't need 'props', but need 'super()' since we are extending
  //  to another class.
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

// S6.L39.1.
  // functionality of posting images to our photowall
  // trigger this method upon pressing the button inside our form
  //  - 'this' loses its context and becomes undefined, so set in
  //  the Constructor by binding it.
  //  - to disable the page from refreshing everytime the button is
  //  clicked, pass 'event' and then prevent the rerendering of the
  //  entire page with 'event.preventDefault()'
  handleSubmit(event) {
    event.preventDefault()
    const imageLink = event.target.elements.link.value
    const description = event.target.elements.description.value
// S6.L40.1.
    // give the 'id' a value of the current date
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink
    }
    if (imageLink && description) {
      //console.log('post', post)
// S6.L39.6.
      // the newly created post is passed in to the onAddPhoto method found in 
      // the Main Component 
      this.props.onAddPhoto(post)
    }
  }

  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Link' name='link' />
            <input type='text' placeholder='Description' name='description' />
            <button>Post</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPhoto