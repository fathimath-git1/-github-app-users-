import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {

    const [input, changeinput] = useState(
        { id:"", nodeid:"", avatarurl:"", gravatarurl:"", url:"",htmlurl:"",followersurl:"",followingurl:"",gistsurl:"",starredurl:"",subscriptionsurl:"",organizationurl:"",reposurl:"",eventurl:"",receivedeventsurl:"",type:"",userviewtype:"" }
    )
    const inputhandler = (event) => {
        changeinput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(input)
    }
  return (
   <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-122">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={input.id} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">node id</label>
                            <input type="text" className="form-control" name='nodeid' value={input.nodeid} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">avatar url</label>
                            <input type="text" className="form-control" name='avatarurl' value={input.avatarurl} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gravatar id</label>
                            <input type="text" className="form-control" name='gravatarurl' value={input.gravatarurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">url</label>
                            <input type="text" className="form-control" name='url' value={input.url} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">html url</label>
                            <input type="text" className="form-control" name='htmlurl' value={input.htmlurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">followers url</label>
                            <input type="text" className="form-control" name='followersurl' value={input.followersurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">following url</label>
                            <input type="text" className="form-control" name='followingurl' value={input.followingurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gists url</label>
                            <input type="text" className="form-control" name='gistsurl' value={input.gistsurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">starred url</label>
                            <input type="text" className="form-control" name='starredurl' value={input.starredurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">subscriptions url</label>
                            <input type="text" className="form-control" name='subscriptionsurl' value={input.subscriptionsurl} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">organizations url</label>
                            <input type="text" className="form-control" name='organizationurl' value={input.organizationurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">repo url</label>
                            <input type="text" className="form-control" name='reposurl' value={input.reposurl} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">events url</label>
                            <input type="text" className="form-control" name='eventurl' value={input.eventurl} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">received events url</label>
                            <input type="text" className="form-control" name='receivedeventsurl' value={input.receivedeventsurl} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">type</label>
                            <input type="text" className="form-control" name='type' value={input.type} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">user view type</label>
                            <input type="text" className="form-control" name='userviewtype' value={input.userviewtype} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    </div>
  )
}

export default Add