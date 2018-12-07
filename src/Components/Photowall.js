import React from 'react'
// 9.
import PropTypes from 'prop-types'
// 3.
// using Stateless Functional Component instead so don't need 
// to import the Component library
//import Component from 'react'
import Photo from './Photo'

// 1. 
// RULE OF THUMB: if you're only using the render() method in your Class
// you can convert your Class to Stateless Functional Component.
// Initially we began by using Class Components...
/*class Photowall extends Component {
  render() {
    return (
      <div className='photoGrid'>
        {this.props.posts.map((post,index) => <Photo key={index} post={post} /> )}
      </div>
    )
  }
}*/

// 2.
// ...instead we can use Stateless Functional Components method
function Photowall(props) {
// 8.a.
// Pass updated state down to all components (from Main to Photowall to Photo)
//  - onRemovePhoto={props.onRemovePhoto}
  return (
    <div className='photoGrid'>
      {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
    </div>
  )
}

// 10.
// give our functional component a property type
Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall