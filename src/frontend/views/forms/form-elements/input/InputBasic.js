import React from 'react'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'

const InputBasic = () => {
  return (
    <Card align = 'center'>
      <CardHeader>
        <CardTitle tag='h4'>Enter The Password</CardTitle>
      </CardHeader>

      <CardBody>

          <Col className='mb-1' xl='4' md='6' sm='12'>
            <FormGroup>
              <Input  type='password' id='basicInput' placeholder='Enter a Password' />
            </FormGroup>
          </Col>
      </CardBody>
    </Card>
  )
}
export default InputBasic
