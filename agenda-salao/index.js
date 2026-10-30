function agendar(){
    const cliente = document.getElementById("cliente").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    if(cliente==="" || servico==="" || data==="" || horario===""){
        alert("Preencha todos os campos!");
        return;
    }

    const dataBR = data.split("-").reverse().join("/");

    const item = document.createElement("li");
    item.textContent = cliente + " - " + servico + " - " + dataBR + " às " + horario;

    const botaoCancelar = document.createElement("button");
    botaoCancelar.textContent = "Cancelar";
    botaoCancelar.className = "btn-cancelar";

    botaoCancelar.onclick = function () {
        item.remove();
    };

    item.appendChild(botaoCancelar);

    document.getElementById("listaAgendamentos").appendChild(item);

    document.getElementById("cliente").value="";
    document.getElementById("servico").value="";
    document.getElementById("data").value="";
    document.getElementById("horario").value="";
}