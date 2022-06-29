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

nrpRegister.onclick = (e) => {
    e.preventDefault();
    if(nrpType.value === "" || nrpFirstName.value === "" || nrpLastName.value=== "" || nrpEmail.value === "" || nrpAddress.value=== "" || nrpMobileNumber.value === "" || nrpStartTime.value === "" || nrpFee.value === "") {
        failNotification.classList.remove("hidden")
        failNotification.classList.add("block")
        successNotification.classList.remove("block")
        successNotification.classList.add("hidden")
    }
    else {
        console.table([nrpType.value, nrpFirstName.value, nrpLastName.value, nrpEmail.value, nrpMobileNumber.value, nrpAddress.value, nrpStartTime.value, nrpFee.value])
        failNotification.classList.remove("block")
        failNotification.classList.add("hidden")
        successNotification.classList.add("block")
        successNotification.classList.remove("hidden")
        nrpForm.reset()
    }
}