
import { Sidebar } from "./components/Sidebar";
import { Folder } from "./components/Folder"
import fs from 'fs';






export const App = () =>
{


	return (
		
		<div className="app">
			{/* <urlBar /> */}
			<Sidebar>
				
						<Folder name={"c:/"} path={"c:/"} />

			</Sidebar>
		</div>

	);
}
