import React, { useState, useEffect } from 'react';
import TweetForm from './TweetForm';
import fire from '../config/fire';

import {
    EditOutlined,
    DeleteOutlined,
  } from '@ant-design/icons';
  


const TweetPost = () =>{
    
    

    const getMode = ()=>{
        return JSON.parse(localStorage.getItem("mode")) || false
    }

    const [dark, setMode]  = useState(getMode)
    useEffect(()=>{
        localStorage.setItem("mode", JSON.stringify(dark))
    },[dark])
   

    var [messageObjects, setProductObjects] = useState({})
    var[currentId, setCurrentId] = useState('')

    
    useEffect(()=>{
        fire.database().ref().child('message').on('value', snapshot=>{
            
            if(snapshot.val()!=null){
           
                setProductObjects({
                    ...snapshot.val()
                   
                })}
           
            
            else
                setProductObjects({})

        })

    },[])
    const Edit = obj =>{
        if(currentId == '')
        fire.database().ref().child('message').push(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            }
        )
        else
            fire.database().ref().child(`message/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')

                    
                }
            )
        

    }


  
    

    const onDelete =  key=>{
        if(window.confirm('Are You sure to delete this record?')){
            fire.database().ref().child(`message/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')

                    
                }
            )
        
        }
    }


  
    return(

        <>

 

        <div className="row" align="center" style={{padding:20}}>
            <div className="col-md-4">
                <TweetForm {...({Edit,currentId,messageObjects})}/>
                    
            </div>
<br></br>
<br></br>
            <div className="col-md-8">
               <table className="table table-borderless table-stripped" border="2">
                   <thead className="thead-light">
                       <tr>
                           <th>Twitte Message</th>
                           <th>Message Delete Name</th>
                        
                           <th>Actions</th>
                           
                       </tr>
                   </thead>
                   <tbody style={{background:"#cfd1d4"}}>
                       {Object.keys(messageObjects).map(id=>{
                            
                           return <tr key={id}>
                               
                               <td>{messageObjects[id].message}</td>
                                <td>{messageObjects[id].messageDate}</td>
                             

                               <td>
                                   <a className="btn text-primary" onClick={()=>{setCurrentId(id) }}>
                                   <EditOutlined />
                                   </a> &nbsp;
                                   <a className="btn text-danger" onClick={()=>{ onDelete(id) }}>
                                   <DeleteOutlined />
                                   </a>
                               </td>
                           </tr>
                       })}
                   </tbody>
               </table>
            </div>
        </div>
    
        </>
    );
}


export default TweetPost;