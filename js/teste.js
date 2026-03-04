$("#calcular").click(function() {
    // 1. Coleta os dados dos inputs
    var x = parseFloat($("#txtvalorX").val());
    var y = parseFloat($("#txtvalorY").val());
    var z = parseFloat($("#txtvalorZ").val());

    // 2. Validação (Se falhar, o 'return' para o código aqui)
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        $("#txtmsg").text("Mensagem: Por favor, preencha todos os campos!");
        $("#txtresultado").text("Resultado: "); // Limpa o resultado anterior
        return; 
    }

    // 3. Processamento (Só chega aqui se os números forem válidos)
    var lista = [x, y, z];
    lista.sort((a, b) => a - b);

    // 4. EXIBIÇÃO (O comando que faz aparecer na tela)
    // .join(" , ") transforma a lista [1, 2, 3] em "1 , 2 , 3"
    $("#txtresultado").text("Resultado: " + lista.join(" , "));
    
    // Limpa a mensagem de erro anterior
    $("#txtmsg").text("Mensagem: Números ordenados com sucesso!");
});