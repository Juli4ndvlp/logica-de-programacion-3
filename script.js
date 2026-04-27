document.getElementById("formfactorial").addEventListener("submit", function (e) {
    e.preventDefault(); //evita que la pagina recarge, por que es el comportamiento normal de un form

    let num = Number(document.getElementById("numero").value);

    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        document.getElementById("resultado").innerHTML = "Error: ingresa un número entero positivo válido.";
        alert("Error: ingresa un número entero positivo válido.");
        return;
    }

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    let resultado = factorial(num);
    document.getElementById("resultado").innerHTML = `${num}! = ${resultado}`;
    console.log(`${num}! = ${resultado}`);
});