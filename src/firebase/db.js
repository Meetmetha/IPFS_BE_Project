//this is going to store Firebase realtime database API code
import { db } from "./firebase";

//##########3 user API

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, username, email) =>
  db.collection("users").add({
    userUid : id,
    userName: username,
    mailId: email
  });

export const CreateUserIPFSRecord = (id, ipfshash, passwordhint) =>
db.collection("ipfslist").add({
  userUid : id,
  hash: ipfshash,
  passhint: passwordhint
});

export const doGetAnUnser = (id) => {
}
//returns all users from firebase realtime db
export const onceGetUsers = () => db.collection("users");

const ipfsarray = []
export const getalluseripfsdata = (id) =>
db.collection("ipfslist").where("userUid", "==", id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    export const getalluseripfsdataCopy = (id) =>
    db.collection("ipfslist").where("userUid", "==", id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
                            <td>${data.hash}</td>
                            <td>${data.passhint}</td>
                      </tr>`;
            let table = document.getElementById('myTable')
            table.innerHTML += row
        })
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    });

//export const doGetAnUnser = (uuid) => 
//console.log(uuid)
//db.collection("users").doc(uuid);

// other APIs could come below
