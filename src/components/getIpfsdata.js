import {  db } from "../firebase";

const useruid = localStorage.getItem('useruid')
const ipfsdataofuser = db.getalluseripfsdata(useruid)
console.log(ipfsdataofuser);