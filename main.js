const {app, BrowserWindow} = require('electron');

//Função para criar a janela principal
function createWindow() {

    // Criar uma nova instancia do BrowserWindow
    const window = new BrowserWindow({

        width: 800,
        height: 600,
    })

    //Carregar o arquivo HTML na janela
    window.loadFile('src/views/index.html');
}


// Evento que é acionado quando o Electron está pronto
app.whenReady().then(() => {
    createWindow(); //Chama a função de criar a janela
})