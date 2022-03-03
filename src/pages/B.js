import React from 'react'
import C from './C'


//RFC
export default function B(props) { //Props is a formal argument
  return (
    <div>B {props.mybestfriend}  <C friend={props.mybestfriend} /> </div>
  )
}
