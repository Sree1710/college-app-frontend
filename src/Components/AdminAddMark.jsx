import axios from 'axios'
import React, { useState } from 'react'

const AdminAddMark = () => {
    const [inputField,setInputField]=useState(
        {_id:sessionStorage.getItem("userid"),examName:"",examSubOne:"",examMarkOne:"",examSubTwo:"",examMarkTwo:"",examSubThree:"",examMarkThree:"",examSubFour:"",examMarkFour:""}
    )

    const apiLink="http://localhost:3001/admaddmark"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
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

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Mark</h1>
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
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Marks</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="examMarkFour" value={inputField.examMarkFour} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn-btn-warning">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAddMark