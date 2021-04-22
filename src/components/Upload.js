import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import Toast from 'grommet/components/Toast'
import Alert from 'react-bootstrap/Alert'
// import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
// import Label  from 'grommet/components/Label'
import Form  from 'grommet/components/Form'
import Uploadin from '../containers/Uploadin'
import {DropzoneArea} from 'material-ui-dropzone'
import UploadIpfs from '../frontend/views/ui-elements/cards/advance/UploadIpfs'
import { Card, CardHeader, CardTitle , CardBody} from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import {  db } from "../firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const IPFS = require('ipfs-mini');
//import Login from './login'
var CryptoJS = require("crypto-js");
class Put extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: null,
      username: "",
      success: '',
      failure: '',
      modalOpen: false,
      hash: '',
      data: '',
      loading: false,
      password: '',
      passwordhint: '',
      useruid: ''
    };


    this.handleUploadFile = this.handleUploadFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.encryptPassword = this.encryptPassword.bind(this)
    this.encrytPasswordHint = this.encrytPasswordHint.bind(this)
    this.endModel = this.endModel.bind(this)
  }

endModel(event){
  this.setState({
    modalOpen: false
  })

}
encryptPassword(event){
    const password = event.target.value
    this.setState({
      password: password
    })
  };
encrytPasswordHint(event){
    const passwordhint = event.target.value
    this.setState({
      passwordhint: passwordhint
    })
  };
handleUploadFile(event) {
    const data = event.target.files[0]
    const name = event.target.name
    const useruid = localStorage.getItem('useruid')
    const ipfsdataofuser = db.getalluseripfsdata(useruid)
    console.log(ipfsdataofuser);
    if (data.type.match('text.*|image.*|application.*')) {
      const reader = new FileReader()
      reader.onload = (function(theFile) {
        return function(e) {
          this.setState({
            [name]: e.target.result
          })
        }.bind(this)
    }.bind(this))(data)
    reader.readAsArrayBuffer(data)
    } else {
      this.setState({
        modalOpen: true,
        failure: `We can accept only text.*|image.*|application.* files.`
      })
    }
  };

  encryptthisfile(data,password){
    console.log("OriginalData",data)
    const wordArray = CryptoJS.lib.WordArray.create(data);
    console.log("ArrayBufferTowordarray",wordArray)
    const str = CryptoJS.enc.Hex.stringify(wordArray);
    console.log("WordArrayToString",str)
    var ct = CryptoJS.AES.encrypt(str, password);
    console.log("EncryptedData",ct)
    var ctstr = ct.toString();
    console.log("EncryptedDataToString",ctstr)
    //let ipfsBuffer = new Buffer(ctstr);
    //console.log("IPFSData",typeof)
    return ctstr
  }

  //handleClose = () => modalOpen(false);
  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      loading: true
    })
    const ipfs = new IPFS({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https'
    })

    if (this.state.document !== '' & this.state.password !== '' & this.state.passwordhint !== '') {
      const encrypteddata = this.encryptthisfile(this.state.document,this.state.password) //password from input to be passed here
      ipfs.add(encrypteddata, async (err, _hash) => {
        if (err) {
          this.setState({
            failure: `Error occured: ${err.message}`
          })
        } else {
          this.setState({
            modalOpen: true,
            hash: _hash,
            password: '',
            success: `Success! Your hash: ${_hash}`
          })
          if (firebase.auth().currentUser !== null) {
            const useruidhere = firebase.auth().currentUser.uid
            this.setState({
              useruid : useruidhere
            })
          }
          db.CreateUserIPFSRecord(this.state.useruid,this.state.hash,this.state.passwordhint);
        }
      })
    } else {
      this.setState({
        modalOpen: true,
        failure: `Add Image and Corresponding Password and Hint`
      })
    }

    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <Box align="center">
        {/* <Heading align="center">Upload file to Interplanetary File System (IPFS)</Heading> */}
        <UploadIpfs />
        {/* <DropzoneArea /> */}
        <Box align='center'>
          <Form onSubmit={this.handleSubmit}>
            <Box pad='small' align='center'>
            <Card align = 'center'>
            <CardHeader>
            <CardTitle>Please attach your file:</CardTitle>
            <CardBody><input id='file' name='document' type='file' onChange={this.handleUploadFile} /></CardBody>
            </CardHeader>
              </Card>
              <Card>
            <CardHeader align='center'>
              <CardTitle>Enter The Password</CardTitle>
             <CardBody><input id='password' name='password' type='password'  onChange={this.encryptPassword} /></CardBody>
            </CardHeader>
          </Card>
          <Card align='center'>
            <CardHeader>
              <CardTitle>Enter The PasswordHint</CardTitle>
             <CardBody><input id='passwordhint' name='passwordhint' type='text'  onChange={this.encrytPasswordHint} /></CardBody>
            </CardHeader>
          </Card>
          
              {/* <InputBasic id='password' name='password' type='password'  onChange={this.encryptPassword} /> */}
              {/* <PasswordHint id='passwordhint' name='passwordhint' type='password'  onChange={this.encrytPasswordHint} /> */}
            </Box>
            <Card align='center'>
        { this.state.modalOpen && <Alert variant='primary'
            status={this.state.success ? 'ok' : 'critical' }>
              <p>{ this.state.success ? this.state.success : null }</p>
              <p>{ this.state.failure ? this.state.failure : null }</p>
            </Alert>
          }
        </Card>
            <Box pad='small' align='center'>
              { this.state.loading ? 'Loading...' : <Button className='btn btn-primary btn-block' primary={true} type='submit' label='Upload' /> }
            </Box>
          </Form>
        </Box>
      </Box>
    )
  }
}

function mapStateToProps(state) {
  return {
    ipfs: state.ipfs
  }
}

export default connect(mapStateToProps)(Put)
