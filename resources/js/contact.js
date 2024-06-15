


function vanillaTilt(element) {
    VanillaTilt.init(document.querySelector(element), {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
    });
}

vanillaTilt(".info1");
vanillaTilt(".info2");
vanillaTilt(".info3");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
let form_name = document.getElementById("fname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (
        form_name.value == "" &&
        email.value == "" &&
        message.value == ""
    ) {
        alert("All fields are required");
        return;
    } else {
        submitEmail();
    }
});

function submitEmail() {
    let param = {
        method: "POST",
        from_name: form_name.value,
        email: email.value,
        to_name: "Adapa!",
        message: message.value,
    };
    const serviceID = "service_hjiseqt";
    const templateID = "template_pfx6bj1";
    
    emailjs.send(serviceID, templateID, param).then(res=>{
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
