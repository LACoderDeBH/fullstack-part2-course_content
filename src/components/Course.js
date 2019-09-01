import React from 'react'

const Header = props =>
  <h1>{props.course}</h1>

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = props => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return <p>Total Number of exercises {total}</p>
}
  

const Course = (props) => {
  console.log(props)
  const { course } = props
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
      {/* <Total parts={course.parts} /> */}
    </div>
  )
}

export default Course