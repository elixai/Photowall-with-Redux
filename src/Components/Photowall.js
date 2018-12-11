import React from 'react'
// 9.
import PropTypes from 'prop-types'
// S6.L33.3.
// Link will be used instead of an href
import { Link } from 'react-router-dom'
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
// ...instead of the Class above, we can use a Stateless Functional Component 
function Photowall(props) {
// 8.a.
// Pass updated state down to all components (from Main to Photowall to Photo)
//  - onRemovePhoto={props.onRemovePhoto}
// S6.L33.4.
  // to link to the AddPhoto page using BrowserRouter 
  //  - <Link className='addIcon' to='/AddPhoto'> </Link>
// S6.L40.4.
  // before where we map over each photo we need to sort the array first. Sort
  // it in descending order using sort(). Sort takes in an ES5 function with 2
  // arguements, and will return a ruleset. We are sorting based on the id of 
  // each element. To sort in descending order, take 2nd element minus the 1st.
  return (
    <div>
      <Link className='addIcon' to='/AddPhoto'> </Link>
      <div className='photoGrid'>
        {
          //props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)
          props.posts
          .sort(function(x, y) {
            return y.id - x.id
          })
          .map((post, index) => <Photo key={post.id} post={post} onRemovePhoto={props.onRemovePhoto} />)
        }
      </div>
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