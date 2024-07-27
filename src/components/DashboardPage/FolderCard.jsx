import React, { useEffect, useState } from 'react'
import { foldersDataById } from '../../api/Folder'
import deleteIcon from '../../assets/images/delete.png'

function FolderCard({folderId , index , removeFolder}) {
    const [folderName , setFolderName] = useState('Folder Name')
    const fetchfolder = async () =>{
        const response = await foldersDataById(folderId)
        if(response.status == 200){
            setFolderName(response.data.folder.folderName)
        }
    }
    useEffect(()=>{
        fetchfolder()
    },[])

    const deleteFolder = async() =>{
        removeFolder(index)
    }
  return (
    <div style={{justifyContent:'space-between'}} >
      <h5>{folderName}</h5>
      <span onClick={deleteFolder}><img src={deleteIcon} alt="X" /></span>
    </div>
  )
}

export default FolderCard
