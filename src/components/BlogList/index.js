import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const API_URL = 'https://apis.ccbp.in/blogs'
    const response = await fetch(API_URL)
    const blogsList = await response.json()
    const updatedBlogsData = blogsList.map(item => ({
      author: item.author,
      avatarUrl: item.avatar_url,
      id: item.id,
      imageUrl: item.image_url,
      title: item.title,
      topic: item.topic,
    }))

    this.setState({blogsData: updatedBlogsData, isLoading: false})
  }

  render() {
    const {isLoading, blogsData} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          blogsData.map(blogData => (
            <BlogItem key={blogData.id} blogItem={blogData} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
