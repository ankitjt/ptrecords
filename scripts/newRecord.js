let nrpType = document.querySelector(".nrpType"),
    nrpFirstName = document.querySelector(".nrpFirstName"),
    nrpLastName = document.querySelector(".nrpLastName"),
    nrpEmail = document.querySelector(".nrpEmail"),
    nrpAddress = document.querySelector(".nrpAddress"),
    nrpMobileNumber = document.querySelector(".nrpMobileNumber"),
    nrpStartTime = document.querySelector(".nrpStartTime"),
    nrpRegister = document.querySelector(".nrpRegister"),
    nrpFee = document.querySelector(".nrpFee"),
    nrpForm = document.querySelector(".nrpForm"),
    successNotification = document.querySelector(".successNotification")
    failNotification = document.querySelector(".failNotification")

firebase.initializeApp({
    apiKey: "AIzaSyBzaI2_yeVQDSw6XI3CjLTS0DPZNGgaI2E",
    authDomain: "ptrecords-5b6a8.firebaseapp.com",
    projectId: "ptrecords-5b6a8",
    storageBucket: "ptrecords-5b6a8.appspot.com",
    messagingSenderId: "756775079284",
    appId: "1:756775079284:web:91f32dcab5720b6e373021"
    });
const db = firebase.firestore();

nrpRegister.onclick = (e) => {
    e.preventDefault();
    if(nrpType.value === "" || nrpFirstName.value === "" || nrpLastName.value=== "" || nrpEmail.value === "" || nrpAddress.value=== "" || nrpMobileNumber.value === "" || nrpStartTime.value === "" || nrpFee.value === "") {
        failNotification.classList.remove("hidden")
        failNotification.classList.add("block")
        successNotification.classList.remove("block")
        successNotification.classList.add("hidden")
    }
    else {
        db.collection("newRecords").add({
            ptType: nrpType.value,
            ptFirstName: nrpFirstName.value,
            ptLastName: nrpLastName.value,
            ptEmail: nrpEmail.value,
            ptMobileNumber: nrpMobileNumber.value,
            ptAddress: nrpAddress.value,
            ptStartTime: nrpStartTime.value,
            ptFee: nrpFee.value
        })
        console.table([nrpType.value, nrpFirstName.value, nrpLastName.value, nrpEmail.value, nrpMobileNumber.value, nrpAddress.value, nrpStartTime.value, nrpFee.value])
        failNotification.classList.remove("block")
        failNotification.classList.add("hidden")
        successNotification.classList.add("block")
        successNotification.classList.remove("hidden")
        nrpForm.reset()
    }
}