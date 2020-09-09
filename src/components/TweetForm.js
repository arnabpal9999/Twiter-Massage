import React, { useState, useEffect } from 'react';
import fire from '../config/fire';
import { Form, Input, Button, Select, message } from 'antd';
import { BulbFilled, AlignCenterOutlined } from '@ant-design/icons';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};




const TweetForm = (props) => {
    let today = new Date().toLocaleDateString()
    const initialFieldValues = {
        message: '',
        messageDate: '',
        timestamp: today
    }


    var [values, setValues] = useState(initialFieldValues)

    useEffect(()=>{
        if(props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.messageObjects[props.currentId]
            })
        
    },[props.currentId,props.messageObjects])

    

    const InputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
            
        })
        
    }
    
   
    const FormSubmit = e => {
        e.preventDefault();
        props.Edit(values)
    }


  

    return (
        <div align="center">
        <form  autoComplete="off" onSubmit={FormSubmit} style={{width:"300px",color:"blue", background:"yellow"}}>
        
          <input type="text" name="message" value={values.message} onChange={InputChange}/>

          <br></br>
          <br></br>
            <input type="date" name="messageDate" value={values.messageDate} onChange={InputChange} />
    <br></br>
          <input type="submit" value={props.currentId==''?"Save":"Update"} />
       
      </form>
      </div>
    );
}

export default TweetForm;