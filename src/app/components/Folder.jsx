import React, { useState } from "react";
import fs from 'fs';
import Path from 'path';


const readdir = (path) =>
{
  try
  {
    return fs.readdirSync(path);
  }
  catch(e)
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

  const subfolders = readdir(path);

  return (
    <div className="root-folder" >
      <div onClick={toggleSubfolders}>
      <span  className="folder-icon">📁</span>
      {name}

      </div>
      {isOpen && (
        <div className="subfolders">
          {subfolders.map(subfolder =>
          {
           try{
            const p = Path.join(path,subfolder) 
            const pathresult = fs.statSync(p);
            if(pathresult.isDirectory())
            {
              
              return <Folder key={subfolder} name={subfolder} path={p}/>
            }
            return (
              // return file name in folder
              <div>{subfolder}</div>
            )
           } catch(e){
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

