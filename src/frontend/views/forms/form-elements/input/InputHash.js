import React from 'react'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'

const InputHash = () => {
  return (
    <Card align = 'center'>
      <CardHeader>
        <CardTitle tag='h4'>Enter IPFS HASH</CardTitle>
      </CardHeader>

      <CardBody>

          <Col className='mb-1' xl='4' md='6' sm='12'>
            <FormGroup>
              <Input  type='text' id='basicInput' placeHolder='E.g. QmfWyGyMYHqqzEFUmfoUJyPQ6EzGnoB18v9CNbPjczXGgH' />
            </FormGroup>
          </Col>
      </CardBody>
    </Card>
  )
}
export default InputHash
