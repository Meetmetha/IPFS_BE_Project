import { Award } from 'react-feather'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
//import { ThemeColors } from '@src/utility/context/ThemeColors'


const UploadIpfs = () => {
  return (
    <Card className='card-congratulations'>
      <CardBody className='text-center'>
        {/* <img className='congratulations-img-left' src={decorationLeft} alt='decor-left' />
        <img className='congratulations-img-right' src={decorationRight} alt='decor-right' /> */}
        {/* <Avatar icon={<Award size={28} />} className='shadow' color='#7164f8' size='xl' /> */}
        <div className='text-center'>
          <h1 className='mb-1 text-black'>Upload file to Interplanetary File System (IPFS) </h1>
        </div>
      </CardBody>
    </Card>
  )
}

export default UploadIpfs
