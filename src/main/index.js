import { BrowserWindow, app } from "electron";
import path from "path";

app.whenReady().then(createWindow);

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

let window = null;

function createWindow()
{
	if (window !== null)
	{
		window.focus();
		return;
	}

	window = new BrowserWindow({
		title: "Electron React template",
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		},
	});

	window.setMenu(null);

	window.loadFile(path.resolve(__dirname, "../../index.html"));

	window.once("ready-to-show", () => 
	{
		window.maximize();
		window.webContents.openDevTools();
	});
}
