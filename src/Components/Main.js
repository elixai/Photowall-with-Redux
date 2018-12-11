import React, { Component } from "react"
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
// S6.L33.5.
import { Route } from 'react-router-dom'

// 5.
// move the posts into the state object
/*const posts = [{
  id: "0",
  description: "beautiful landscape",
  imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
}, {
  id: "1",
  description: "Aliens???",
  imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
    "08323785_735653395_n.jpg"
}, {
  id: "2",
  description: "On a vacation!",
  imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
}]*/

class Main extends Component {
// 4.
// use state instead, to manage updates and changes to our post array
  // A Lifecycle Method
  constructor(props) {
    super(props)
// 13.
// only declare state.posts as an empty array, so remove the posts and
// use this.state = { posts: [] } instead
    /*this.state = {
      posts: [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg"
      }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
          "08323785_735653395_n.jpg"
      }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }]
    }*/
    this.state = {
      posts: []
    }
    this.removePhoto = this.removePhoto.bind(this)
    //console.log('constructor')
  }

// 7.
// Updating State: using a method to remove a photo from the Photowall.
  // photo to be removed (postRemoved param) will be used to update our state
  removePhoto(postRemoved) {
    //console.log('postRemoved', postRemoved)
    // Inside of this.setState we pass in a function ('() => {object}') and that function will
    // return a new object. Need to pass in our current state as the first argument. We intend
    // to update/filter this state such that it removes the photo we clicked on. To do that we 
    // return a new list of posts
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))
  }

// S6.L39.3.
// to update the state of posts, we want to update the Component state with the newly added
// photo (postSubmitted). Simply return the updated posts, such that we are going to get the 
// current state of the posts (state.posts) and add the post that was just submitted by the 
// form (concat([postSubmitted])).
  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted])
    }))
  }

// 15.
// componentDidMount() is involked immediately after the component is being 
// inserted into the DOM. Call the fetch function then set the state of the 
// returned data to posts.
// If fetching data from a Database, make sure to fetch from componentDidMount
  // A Lifecycle Method
  componentDidMount() {
    const data = SimulateFetchFromDatabase()
    // here we know the previous state of posts is empty so we can just set the new state
    // equal to the data we fetch from the web (ie. from SimulateFetchFromDatabase)
    this.setState({
      posts: data
    })
    //console.log('componentDidMount')
  }

  // involked before the component is inserted into the DOM, before the render()
  // method gets involked
  // A Lifecycle Method
  componentWillMount() { }

  // involked whenever a component is re-rendered -- whenever we update the state
  // of our component to trigger a re-render
  // A Lifecycle Method
  componentDidUpdate(prevProps, prevState) {
    //console.log('componentDidUpdate: prevState', prevState.posts)
    //console.log('componentDidUpdate: state', this.state)
  }

  render() {
    //console.log('render')
// 6.
// <Photowall posts={posts} /> becomes <Photowall posts={this.state.posts} />
// 8.
// Pass updated state down to all components (from Main to Photowall to Photo)
//  - onRemovePhoto={this.removePhoto}
// S6.L33.6.
    // we will declare route components with
      // - Homepage: path='/'
      // - AddPhoto: path='/AddPhoto'
// S6.L39.5.
    // need need to involk the addPhoto method inside of the AddPhoto Constructor by 
    // passing it down as props using the render() method. The arrow function is going
    // to return our addPhoto Component. We pass props down to our Component via 
    // <AddPhoto onAddPhoto={() => {}} /> with an arrow function. When we access the prop,
    // inside the AddPhoto Component, we want it to trigger an arrow function. It's set
    // equal to an arrow function that will return a block of code. The arrow function will
    // also take in, as an argument, the addedPost (which is passed in from our AddPhoto Component, 
    // 'AddPhoto.js page) -- we pass it in by accessing the prop inside the event handler 
    // (handleSubmit) as soon as we submit the form (ie. his.props.onAddPhoto(post)).
// S6.L39.7.
    // inside if the onAddPhoto arrow function we can involke the addPhoto method and pass in
    // the post that was just submitted. By doing so we can update the state of our component
    // to include the new post.
      // - this.addPhoto(addedPost)
// S6.L40.3.
    // console.log()
    console.log(this.state.posts)
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <Title title={'Photowall'} />
            <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
          </div>
        )}/>
        <Route path='/AddPhoto' render={({history}) => (
          <AddPhoto onAddPhoto={(addedPost) => {
            this.addPhoto(addedPost)
            history.push('/')
          }}/>
        )}/>
      </div>
    )
  }
}

// 14.
// calls to fetch any data should done in 'componentDidMount()'
// S6.L40.2.
// change the 'id's from strings to numbers
function SimulateFetchFromDatabase() {
  return [{
    id: 0,
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
  }, {
    id: 1,
    description: "Aliens???",
    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
      "08323785_735653395_n.jpg"
  }, {
    id: 2,
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
  }]
}

export default Main