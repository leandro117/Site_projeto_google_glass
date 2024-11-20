function mudaImagem(valor) {
    document.getElementById("google-glass-img").src = valor;
}

function mudarvalor() {
    var qnt = parseInt(document.getElementById('iqtd').value);
    var tot = qnt * 1500;
    document.getElementById('ipreco').value = tot;
}

function clicou() {
    document.getElementById("iframeSpac").style.display = "block";
}