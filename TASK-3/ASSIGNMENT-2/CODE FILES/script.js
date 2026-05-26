// Dummy Certificate Database

const certificates = {

  "24691A2850": {
    name: "Gopi Chand",
    course: "Frontend Development Internship",
    issued: "May 2026",
    status: "Verified"
  },

  "22691A05L4": {
    name: "Bandi Sree Kumar",
    course: "Cyber Security Internship",
    issued: "April 2026",
    status: "Verified"
  }

};

function validateCertificate(){

  const certId = document.getElementById("certificateId").value.trim();

  const resultBox = document.getElementById("resultBox");

  const resultTitle = document.getElementById("resultTitle");

  const resultMessage = document.getElementById("resultMessage");

  const certificateDetails = document.getElementById("certificateDetails");

  resultBox.style.display = "block";

  if(certificates[certId]){

    const data = certificates[certId];

    resultBox.className = "result success";

    resultTitle.innerHTML = "✅ Certificate Verified";

    resultMessage.innerHTML =
      "The certificate is authentic and officially issued.";

    certificateDetails.innerHTML = `
      <p><strong>Student Name:</strong> ${data.name}</p>

      <p><strong>Course:</strong> ${data.course}</p>

      <p><strong>Issued On:</strong> ${data.issued}</p>

      <p><strong>Status:</strong> ${data.status}</p>
    `;

  }else{

    resultBox.className = "result error";

    resultTitle.innerHTML = "❌ Invalid Certificate";

    resultMessage.innerHTML =
      "No certificate found with this ID.";

    certificateDetails.innerHTML = "";
  }
}