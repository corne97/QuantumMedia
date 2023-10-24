import React, { useState } from "react";
import fs from 'fs';
import Path from 'path';

const { shell } = window.require('electron');

const readdir = (path) =>
{
	try
	{
		return fs.readdirSync(path);
	}
	catch (e)
	{
		return [];
	}
}

export const Folder = ({ name, path }) =>
{	
	const [isOpen, setIsOpen] = useState(false);
	const toggleSubfolders = () =>
	{
		setIsOpen(!isOpen);
	};

	const openFile = async (p) =>
	{
		shell.openPath(p);
		const error = await shell.openPath(path);

	if (error)
		console.error(error);

	};

	const subfolders = readdir(path);

	return (
		<div className="root-folder" >
			<div onClick={toggleSubfolders}>
				<span className="folder-icon">📁</span>
				{name}

			</div>
			{/*  check if folder is opened */}
			{isOpen && (
				<div className="subfolders">
					{subfolders.map(subfolder =>
					{
						try
						{
							let p = Path.join(path, subfolder)
							const pathresult = fs.statSync(p);
							if (pathresult.isDirectory())
							{
								console.log(p);

								return <Folder key={subfolder} name={subfolder} path={p} />
							}
							return (
								// return file name in folder and make the file executable
								<div onClick={() => openFile(p)}>{subfolder}</div>


							)
						} catch (e)
						{
							// console.error(e)
							return null;
						}
					}

					)}
				</div>
			)}
		</div>
	);
}

