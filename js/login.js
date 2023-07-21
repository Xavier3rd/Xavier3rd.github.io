function pacienteValido(username, password) {
    const paciente = username === "mirtita" && password === "123"
    return paciente 
}  

function doctorValido(username, password) {
    const doctor = username === "house" && password === "123"
    return doctor
}

document.getElementById("loginForm").addEventListener("submit",function(event) {
    event.preventDefault();   
    
    let username = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;
    let urlPaciente = "paciente.html?usuario=" + username
    let urlDoctor = "doctor.html?usuario=" + username

        if(pacienteValido(username, password)) {
            console.log("Correcto");
            
            window.open(urlPaciente, '_blank');
        }
        else if(doctorValido(username, password)) {
            console.log("Correcto");
             
            window.open(urlDoctor, '_blank');
        }
        else {
            alert("El usuario o la contraseña son incorrectos")
        }
    }
);


