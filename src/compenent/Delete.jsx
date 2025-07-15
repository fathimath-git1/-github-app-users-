import React, { useState } from 'react'
import Nav from './Nav'

const Delete = () => {
     const [input, changeinput] = useState(
                { id: "" }
        )
        const inputhandler = (event) => {
            changeinput({ ...input, [event.target.name]: event.target.value })
        }
        const readValue = () => {
            console.log(input)
        }
    
  return (
    <div>

<Nav/> <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">id</label>
                                <input type="text" className="form-control" name='id' value={input.id} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger" onClick={readValue}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Delete