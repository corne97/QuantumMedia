import ReactDOM from "react-dom/client";
import { App } from "./App";

function getOrCreateRoot()
{
	let el = document.getElementById("root");
	if(!el)
	{
		el = document.createElement("div");
		el.id = "root";
		document.body.append(el);
	}
	return el;
}

const rootElement = getOrCreateRoot();

ReactDOM.createRoot(rootElement).render(<App />);
