import React, { useEffect, useState } from 'react'
import StudNavBar from './StudNavBar'
import axios from 'axios'

const StudViewMark = () => {
    const [studData,setStudData]=useState(
        []
    )

    const apiLink="http://localhost:3001/viewstudmark"

    const getData=()=>{
       let data={"studId":sessionStorage.getItem("userid")}
       axios.post(apiLink,data).then(
        (Response)=>{
           setStudData(Response.data)
        }
       )
    }

    useEffect(()=>{getData()},[])
    return (
        <div>
            <StudNavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Student Marks</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Student ID</th>
                                            <th scope="col">Exam Name</th>
                                            <th scope="col">Subject 1</th>
                                            <th scope="col">Marks</th>
                                            <th scope="col">Subject 2</th>
                                            <th scope="col">Marks</th>
                                            <th scope="col">Subject 3</th>
                                            <th scope="col">Marks</th>
                                            <th scope="col">Subject 4</th>
                                            <th scope="col">Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studData.map(
                                            (value,index) => {
                                                return <tr>
                                                    <th scope="row">{value.studId}</th>
                                                    <td>{value.examName}</td>
                                                    <td>{value.examSubOne}</td>
                                                    <td>{value.examMarkOne}</td>
                                                    <td>{value.examSubTwo}</td>
                                                    <td>{value.examMarkTwo}</td>
                                                    <td>{value.examSubThree}</td>
                                                    <td>{value.examMarkThree}</td>
                                                    <td>{value.examSubFour}</td>
                                                    <td>{value.examMarkFour}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudViewMark