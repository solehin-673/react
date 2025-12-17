import React from 'react'
import Container from './container'
import {BrowserRouter} from 'react-router-dom';

const Parent = () => {
  return (
    <div>
        <BrowserRouter>
        <Container/>
        </BrowserRouter>
    </div>
  )
}

export default Parent