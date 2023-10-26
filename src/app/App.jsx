
import { Sidebar } from "./components/Sidebar";
import { Folder } from "./components/Folder";
import {UrlBar} from "./components/UrlBar";
import fs from 'fs';



export const App = () =>
{

	return (
		
		<div className="app">
			<UrlBar currentPath={""} />


			<Sidebar>
				
						<Folder name={"c:/"} path={"c:/"} />

			</Sidebar>
		</div>

	);
}
