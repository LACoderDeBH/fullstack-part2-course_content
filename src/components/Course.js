import React from 'react'

const Header = ({course}) => (
  <h1>{course}</h1>
);

const Part = ({name, exercises}) => (
  <p>{name} {exercises}</p>
);

const Content = ({parts}) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

const Course = (props) => {
  // console.log(props)
  const { course } = props
  const totalAmount = course.parts.reduce((first, second) =>
    ({exercises: first.exercises + second.exercises }));

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <strong> total of {totalAmount.exercises} exercises </strong>
    </div>
  )
}

export default Course