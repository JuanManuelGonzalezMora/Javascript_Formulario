const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userCelular = document.getElementById("userCelular");
const userApellido = document.getElementById("userApellido");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail =
        /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const regNum = /^[0-9]+$/;

    if (!regUserName.test(userName.value)) {
        return alert("Nombre: \nSolo letras");
    }

    if (!regUserName.test(userApellido.value)) {
        return alert("Apellido: \nSolo letras");
    }

    if (!regUserEmail.test(userEmail.value)) {
        return alert("Correo Electronico: \nFormato email no válido");
    }
    if (!regNum.test(userEdad.value)) {
        return alert("Celular: \nIngrese solo numeros");
    }

    console.log("Nombre: " + userName.value);
    console.log("Correo Electronico: " + userEmail.value);
    console.log("Edad: " + userEdad.value);

    console.log("Formulario enviado con éxito");
});