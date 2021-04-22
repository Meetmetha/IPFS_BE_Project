
import React from 'react'
export const filledButtons = (
    <pre>
      <code className='language-jsx'>
        {`
  
  import { Button } from 'reactstrap'
  
  const FilledButtons = () => {
    return (
      <React.Fragment>
        <Button.Ripple color='primary'>Primary</Button.Ripple>
        <Button.Ripple color='secondary'>Secondary</Button.Ripple>
        <Button.Ripple color='success'>Success</Button.Ripple>
        <Button.Ripple color='danger'>Danger</Button.Ripple>
        <Button.Ripple color='warning'>Warning</Button.Ripple>
        <Button.Ripple color='info'>Info</Button.Ripple>
        <Button.Ripple color='dark'>Dark</Button.Ripple>
      </React.Fragment>
    )
  }
  export default FilledButtons
  `}
      </code>
    </pre>
  )