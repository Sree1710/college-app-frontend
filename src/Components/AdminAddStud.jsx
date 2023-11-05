import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AdminAddStud = () => {
    const [inputField,setInputField]=useState(
        {studName:"",studAdmNo:"",studDob:"",studBG:"",studAddress:"",studPhoneNo:"",username:"",password:"",confirmpass:""}
    )

    const apiLink="http://localhost:3001/admaddstud"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
            (Response)=>{
               if (inputField.password==inputField.confirmpass) {
                  if (inputField.studPhoneNo.length==10) {
                    alert("Student Added Successfully !!")
                    setInputField({studName:"",studAdmNo:"",studDob:"",studBG:"",studAddress:"",studPhoneNo:"",username:"",password:"",confirmpass:""})
                  } else {
                    alert("Invalid Phone Number !!")
                  }
               } else {
                  alert("Password and Confirm Password does not match !!!")
               }
            }
        )
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                            <h1>Add Student</h1>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">Student Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studName" value={inputField.studName} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">Admission No.</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studAdmNo" value={inputField.studAdmNo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input onChange={inputHandler} type="date" name="studDob" id="" className="form-control" value={inputField.studDob} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <select onChange={inputHandler} name="studBG" id="" className="form-control" value={inputField.studBG}>
                                <option value="SELECT">SELECT</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea onChange={inputHandler} name="studAddress" id="" cols="30" rows="10" className="form-control" value={inputField.studAddress}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studPhoneNo" value={inputField.studPhoneNo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" id="" className="form-control" value={inputField.password} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col xxl-3">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input onChange={inputHandler} type="password" name="confirmpass" id="" className="form-control" value={inputField.confirmpass} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAddStud