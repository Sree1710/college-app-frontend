import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'

const AdminAddMark = () => {
    const [inputField,setInputField]=useState(
        {studId:"",examName:"",examSubOne:"",examMarkOne:"",examSubTwo:"",examMarkTwo:"",examSubThree:"",examMarkThree:"",examSubFour:"",examMarkFour:""}
    )

    const [studData,setStudData]=useState(
        []
    )

    const apiLink="http://localhost:3001/admaddmark"
    const apiLink2="http://localhost:3001/admviewstudprofile"

    const getData=()=>{
        axios.post(apiLink2).then(
            (Response)=>{
                setStudData(Response.data)
            }
        )
    }

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        let token = {"token":sessionStorage.getItem("token")}
        axios.post(apiLink,inputField,token).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Marks Added Successfully !!")
                    setInputField({examName:"",examSubOne:"",examMarkOne:"",examSubTwo:"",examMarkTwo:"",examSubThree:"",examMarkThree:"",examSubFour:"",examMarkFour:""})
                } else {
                    alert("Something Went Wrong !!")
                }
            }
        )
    }

    useEffect(()=>{getData()},[])
  return (
    <div>
        <AdminNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Mark</h1>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Student ID</label>
                            <select onChange={inputHandler} name="studId" id="" className="form-control" value={inputField.studId}>
                                <option value="SELECT">SELECT</option>
                                 {studData.map(
                                    (value,index)=>{
                                        return <option value={value.studName}>{value.studName}</option>
                                    }
                                 )}
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Exam Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examName" value={inputField.examName} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Subject 1</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examSubOne" value={inputField.examSubOne} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Marks</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examMarkOne" value={inputField.examMarkOne} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Subject 2</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examSubTwo" value={inputField.examSubTwo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Marks</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examMarkTwo" value={inputField.examMarkTwo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Subject 3</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examSubThree" value={inputField.examSubThree} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Marks</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examMarkThree" value={inputField.examMarkThree} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Subject 4</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examSubFour" value={inputField.examSubFour} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Marks</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examMarkFour" value={inputField.examMarkFour} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-warning">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAddMark