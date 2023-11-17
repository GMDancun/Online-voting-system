// endpoint
// const canisterId= "ajuq4-ruaaa-aaaaa-qaaga-cai";
import {votingapp_backend} from "../../declarations/votingapp_backend";


window.addEventListener("load", function () {
    console.log("Loaded")
})


// async function createVoter(username, firstname) {
//   const response = await fetch(`${votingapp_backend}/create_voter`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, firstname }),
//   });
//
//   const result = await response.json();
//   console.log(result);
//
//   // Display the result or perform additional actions as needed
// }
//
// document.querySelector("form").addEventListener("submit", async function(event) {
//   event.preventDefault();
//
//   const inputUsername = document.getElementById("username").value;
//   const inputFirstname = document.getElementById("firstname").value;
//
//   await createVoter(inputUsername, inputFirstname);
// });


// document.querySelector("form").addEventListener("submit", async function(event){
//   event.preventDefault()
//   // console.log("Submitted")
//
//   const inputUsername = document.getElementById("username").value;
//   const inputFirstname = document.getElementById("firstname").value;
//
//   await `${votingapp_backend}/create_voter`(inputUsername, inputFirstname);
//
// })


document.querySelector("form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const inputUsername = document.getElementById("username").value;
        const inputFirstname = document.getElementById("firstname").value;

        const apiUrl = "votingapp_backend"

        try {
            console.log("Request Body:", JSON.stringify({
                username: inputUsername,
                firstname: inputFirstname,
            }));

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    username: inputUsername,
                    firstname: inputFirstname,
                }),
            });
            if (response.ok) {
                console.log("Voter registered successfully!");
                // Display a success message to the user
            } else {
                const errorResponse = await response.json();
                console.error("Failed to register voter:", errorResponse.error);
                // Display an error message to the user
            }
        } catch
            (error) {
            console.error("Error creating voter:", error);
            // Handle any errors that occur during the communication with the backend
        }
    }
)
;
