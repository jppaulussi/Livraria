const btnCalcular = document.querySelector('#calcular');
console.log(btnCalcular);






btnCalcular.addEventListener('click', function(event) {
    event.preventDefault();




    let resultado = 0;


    const valor2 = Number(document.querySelector('#valor2').value);



    const operacao = document.querySelector('#operacao').value;



    if (operacao === "1") {
        resultado = (valor2);
    } else if (operacao === "2") {
        resultado = (0.85 * valor2);
    } else if (operacao === "3") {
        resultado = (0.9 * valor2);
    } else {
        resultado = (0.93 * valor2);
    }







    document.querySelector('#resultado').textContent = `Preco total do Livro: ${resultado}`;


    var txtAutor = document.getElementById("form-nome");
    console.log(txtAutor.value);

    var txtPreco = document.getElementById("valor2");
    console.log(txtPreco.value);

    var txtDesc = document.getElementById("operacao");
    console.log(txtDesc.value);




});