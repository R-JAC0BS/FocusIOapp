import { app, BrowserWindow, nativeTheme } from 'electron';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// recria __dirname no ambiente ESModule
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    backgroundColor: '#181818', // Cor de fundo da janela
    darkTheme: true, // Força tema escuro no Linux
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL('http://localhost:5173/');

  // Abre o DevTools automaticamente
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  // Força o tema escuro
  nativeTheme.themeSource = 'dark';

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
