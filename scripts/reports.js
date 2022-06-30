let tableBodyAllRecords = document.querySelector(".tableBodyAllRecords")
firebase.initializeApp({
    apiKey: "AIzaSyBzaI2_yeVQDSw6XI3CjLTS0DPZNGgaI2E",
    authDomain: "ptrecords-5b6a8.firebaseapp.com",
    projectId: "ptrecords-5b6a8",
    storageBucket: "ptrecords-5b6a8.appspot.com",
    messagingSenderId: "756775079284",
    appId: "1:756775079284:web:91f32dcab5720b6e373021"
    });
const db = firebase.firestore();


(() => {
    db.collection("newRecords").onSnapshot((querySnapshot) => {
        let delRows = document.querySelectorAll(".tableRows")
        for(const delPill of delRows) {
            delPill.remove()
        }
        querySnapshot.forEach((doc) => {
            let rowData = `
                <tr class="odd:bg-blue-200 tableRows">
                    <td class="px-0 py-4 text-center select-all"><span>${doc.data().ptFirstName + " " + doc.data().ptLastName}  </span></td>
                    <td class="px-0 py-4 text-center select-all "><span>${doc.data().ptType} </span></td>
                    <td class="px-0 py-4 text-center  select-all lowercase"><span>${doc.data().ptEmail} </span></td>
                    <td class="px-0 py-4 text-center  select-all tracking-widest"><span>${doc.data().ptMobileNumber} </span></td>
                    <td class="px-0 py-4 text-center  select-all"><span>${doc.data().ptAddress} </span></td>
                    <td class="px-0 py-4 text-center  select-all "><span>${doc.data().ptStartTime} </span></td>
                    <td class="px-0 py-4 text-center  select-all "><span>${"&#x20b9;" + " " + doc.data().ptFee} </span></td>
                </tr>
                `
                
                tableBodyAllRecords.innerHTML += rowData   
                // pillsCountUpdate()    
                // deletePill() 
        })
    })
})()

//To delete a record.
const deletePill = () => {
    let pillToDel = document.querySelectorAll(".deletePill")
    for (let deletePill of pillToDel) {
        deletePill.onclick = () => {
            let pillDataID = deletePill.parentElement.getAttribute("data-id")
            db.collection("trackers").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if(doc.id === pillDataID) {
                        db.collection("trackers").doc(pillDataID).delete()
                        message.style.left = '45%'
                        message.innerText = "Record Deleted"
                    } 
                })
            })
        }
    }
}
