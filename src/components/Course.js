import React from 'react'

// const App = ({ notes }) => {
//   const rows = () => notes.map(note =>
//     <Note
//       key={note.id}
//       note={note}
//     />
//   )

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {rows()}
//       </ul>
//     </div>
//   )
// }

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
  var totalAmount = props.parts.reduce(function(sum, part) {
    return sum + part.exercises
  }, 0)

  return <p><b>HI! Total of {totalAmount} exercises </b></p>
}

const Course = (props) => {
  // console.log(props)
  const { course } = props
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default Course