const lampada = document.getElementById('lampada')
const btnAlternar = document.getElementById("btn-alternar")
const basUrlImg = 'https://fluffy-sniffle-974j96p6g9p4f7qg7-5500.app.github.dev/aula/LampadaJavascript/'

// alert(lampada.src)
// alert(btnAlternar.textContent)

btnAlternar.addEventListener('click', function () {
    if (lampada.src == basUrlImg + 'lampada1.png'){
        lampada.src = 'lampada2.png'
        btnAlternar.textContent = "Lâmpada Acesa!"
        btnAlternar.style.backgroundcolor = 'yellow'
    } 
    else{
        lampada.src == 'lampada2.png'
            lampada.src = 'lampada1.png'
            btnAlternar.textContent = "Lâmpada apagada!"
            btnAlternar.style.backgroundcolor = "blue"
    }
})

btnAlternar.addEventListener('dblclick', function ()  {
        lampada.src = 'lampada0.png'
        btnAlternar.textContent = "Lampada queimada"
        btnAlternar.style.backgroundcolor = 'red'  
})

