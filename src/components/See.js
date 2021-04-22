import React, { Component } from 'react'
import { connect } from 'react-redux'
import Seein from '../containers/seein'
import Toast from 'react-bootstrap/Toast'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
//import Toast from 'grommet/components/Toast'
import Box from 'grommet/components/Box'
import Select from 'grommet/components/Select'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Form from 'grommet/components/Form'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'
import InputBasic from '../frontend/views/forms/form-elements/input/InputBasic'
import InputHash from '../frontend/views/forms/form-elements/input/InputHash'
import CardCongratulations from '../frontend/views/ui-elements/cards/advance/CardCongratulations'
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { auth, db } from "../firebase";
var CryptoJS = require("crypto-js");
const IPFS = require('ipfs-mini');
const FileSaver = require('file-saver');

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      success: '',
      failure: '',
      modalOpen: false,
      hash: '',
      data: '',
      loading: false,
      password: '',
      passwordhint: '',
      useruid: '',
      filetype:'image',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.decrytPassword = this.decrytPassword.bind(this)
    this.handleFiletype = this.handleFiletype.bind(this)
  }

  handleFiletype(event){
    const filetype = event.target.value
    if(filetype == 'image')
    {}
    this.setState({
      filetype: filetype
    })
  }


  handleChange(event) {
    const value = event.target.value ? event.target.value : ''
    
    this.setState({
      [event.target.name]: value
    })
  }

  decrytPassword(event){
    const password = event.target.value
    this.setState({
      password: password
    })
  }

  decryptfile(encrypteddata,password){
    //console.log(typeof(encrypteddata))
    //var str = this.uintToString(encrypteddata)
    console.log("IPFSFileData",encrypteddata)
    try{
      const decrypted = CryptoJS.AES.decrypt(encrypteddata, password);
      console.log("DecryptedData",decrypted)

      const instr = decrypted.toString(CryptoJS.enc.Utf8);
      console.log("DecryptedDataToString",instr)

      const wordArray = CryptoJS.enc.Hex.parse(instr);
      console.log("DecryptedStringToWordArray",wordArray)

      const Arraybuf = this.CryptJsWordArrayToUint8Array(wordArray)
      //const BaText = this.wordToByteArray(wordArray, wordArray.length);
      console.log("WordarrayToArrayBuffer",Arraybuf)
      var blob = new Blob( [ Arraybuf ], { type: "image/jpeg" } );
      FileSaver.saveAs(blob,"filename.jpg");
      return(Arraybuf);

    }catch(error){
      return null
    }
  }
  CryptJsWordArrayToUint8Array(wordArray) {                                                                                       
    const l = wordArray.sigBytes;                                                                                                        
    const words = wordArray.words;                                                                                                       
    const result = new Uint8Array(l);                                                                                                    
    var i=0 /*dst*/, j=0 /*src*/;
    while(true) {
        // here i is a multiple of 4
        if (i===l)
            break;
        var w = words[j++];
        result[i++] = (w & 0xff000000) >>> 24;
        if (i===l)
            break;
        result[i++] = (w & 0x00ff0000) >>> 16;                                                                                            
        if (i===l)                                                                                                                        
            break;                                                                                                                       
        result[i++] = (w & 0x0000ff00) >>> 8;
        if (i===l)
            break;
        result[i++] = (w & 0x000000ff);                                                                                                  
    }
    return result;
}
  toString(words){
    return CryptoJS.enc.Utf8.stringify(words);
  }

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

    if (this.state.hash !== '') {
      ipfs.cat(this.state.hash, async (err, data) => {
        if(err) {
          // console.log(err)
          this.setState({
            modalOpen: true,
            failure: `Error occured: ${err.message}`
          })
        } else {
          const OriginalFile = this.decryptfile(data,this.state.password)
          if(OriginalFile==null)
          {
            db.getalluseripfsdataCopy(localStorage.getItem('useruid'))
            this.setState({
              modalOpen: true,
              failure: `You Entered Wrong Password`
            })
          }else{
            this.setState({
              data: OriginalFile,
              password: ''
            })
          }
        }
      })
    } else {
      this.setState({
        modalOpen: true,
        failure: `You need to enter IPFS hash.`
      })
    }

    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <Box>
        <Box align="center">
          {/* <Heading align="center">Load data from IPFS</Heading> */}
          <CardCongratulations />
          <Form onSubmit={this.handleSubmit}>
            {/* <Box pad='small' align='center'>
              <Label labelFor="hash">Enter IPFS hash:</Label>
            </Box> */}
            <Box pad='small' align='center'>
            <Card align='center'><CardHeader><CardTitle>Enter IPFS Hash</CardTitle></CardHeader>
            <CardBody>
            <TextInput id='hash'
                type='text'
                name='hash'
                onDOMChange={this.handleChange}
                value={this.state.hash}
                placeHolder='E.g. QmfWyGyMYHqqzEFUmfoUJyPQ6EzGnoB18v9CNbPjczXGgH' />
            </CardBody>
            </Card>
            <Card align='center'><CardHeader><CardTitle>Enter password</CardTitle></CardHeader>
            <CardBody>
            <input id='password' name='password' type='password' placeholder='Enter your password' onChange={this.decrytPassword} />
            </CardBody></Card>
            </Box>
            <Box pad='small' align='center'>
              { this.state.loading ? 'Loading...' : <Button className='btn btn-primary btn-block' primary={true} type='submit' label='Get File' /> }
            </Box>
          </Form>
          <Card align='center'>
        { this.state.modalOpen && <Alert variant='primary'
            status={this.state.success ? 'ok' : 'critical' }>
              <p>{ this.state.success ? this.state.success : null }</p>
              <p>{ this.state.failure ? this.state.failure : null }</p>
            </Alert>
          }
        </Card>
          <Box align="center">
            <Card align='center'>
            <CardHeader>
            {/* <CardTitle> If you want to add this view file on IPFS, use this url:</CardTitle> */}
              <CardTitle> https://ipfs.infura.io:5001/api/v0/cat/{this.state.hash}</CardTitle>
              <CardBody> If you want to add this view file on IPFS, use this above url</CardBody>
            </CardHeader>
             
            </Card>
          </Box>
        </Box>
        <Box align="center">
        <Card align='center'>
        <table>
        <thead>
        <tr>
            <th>IPFSHash</th>
            <th>PasswordHint</th>
        </tr>
        </thead>
        <tbody id="myTable">
        </tbody>
        </table>
        </Card>
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

export default connect(mapStateToProps)(Home)
