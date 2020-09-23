import React from 'react'
class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
    }
  }
  componentDidMount() {
    // go out to this url and grab the json
  }
  render() {
    let { courses } = this.state
    if (courses.length === 0) {
      return <>Loading...</>
    }
    return (
      <>
        <h2>Short Courses</h2>
        <div className="course-section">
          {courses.map((item, index) => {
            return <p>{item.title}</p>
          })}
        </div>
      </>
    )
  }
}
export default Courses