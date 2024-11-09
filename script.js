function User(photo, name, mobile, dob, address1, address2) {
    this.photo = photo;
    this.name = name;
    this.mobile = mobile;
    this.dob = dob;
    this.address1 = address1;
    this.address2 = address2;
}


function displayImage(fileInput, imgElement) {
    const reader = new FileReader();
    reader.onload = function(e) {
        imgElement.src = e.target.result;
    };
    reader.readAsDataURL(fileInput);
}

const users = [];


function generateCard() {
    
    const photoInput = document.getElementById("photo").files[0];
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;

    const user = new User(photoInput, name, mobile, dob, address1, address2);
    users.push(user);

    const outputPhoto = document.getElementById("outputPhoto");
    const outputName = document.getElementById("outputName");
    const outputMobile = document.getElementById("outputMobile");
    const outputDob = document.getElementById("outputDob");
    const outputAddress1 = document.getElementById("outputAddress1");
    const outputAddress2 = document.getElementById("outputAddress2");


    displayImage(user.photo, outputPhoto);
    outputName.textContent = user.name;
    outputMobile.textContent = "Mobile: " + user.mobile;
    outputDob.textContent = "Date of Birth: " + user.dob;
    outputAddress1.textContent = user.address1;
    outputAddress2.textContent = user.address2;

    document.querySelector(".outputCard").classList.remove("hidden");
    document.getElementById("arrow").classList.remove("hidden");
}
