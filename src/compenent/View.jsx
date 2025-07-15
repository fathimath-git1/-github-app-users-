import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {
    const[isLoading,chanageLoading]=useState(true)
    const [gitData, changeGit] = useState(
        []
    )
    const fetchData=()=>{
        axios.get("https://api.github.com/users").then(
            (response)=>{
                changeGit(response.data)
                chanageLoading(false)
            }
        ).catch(
            (error)=>{
                alert("something went wrong"+error)
            }
        )
    }
    useEffect(()=>{fetchData()},[])

    

    
  return (
    <div> 
        <Nav/>
        
                <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table" >
                                    <thead>
                                        <tr>
                                            <th scope="col"> Id</th>
                                            <th scope="col">node Id</th>
                                            <th scope="col">avatar url</th>
                                            <th scope="col">gravatar id</th>
                                            <th scope="col">url</th>
                                            <th scope="col">html url</th>
                                            <th scope="col">followers url</th>
                                            <th scope="col">following url</th>
                                            <th scope="col">gists url</th>
                                            <th scope="col">starred url</th>
                                            <th scope="col">subscription url</th>
                                            <th scope="col">organization url</th>
                                            <th scope="col">repos url</th>
                                            <th scope="col">event url</th>
                                            <th scope="col">recieved event url</th>
                                            <th scope="col">type</th>
                                            <th scope="col">user view</th>
                                        </tr>
                                    </thead>
                                    {isLoading ?(<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>):( 
                                     <tbody>
                                        {gitData.map(
                                            (value, index) => {
                                                return (
    <tr>
      
      <td>{value.id}</td>
      <td>{value.node_id}</td>
      <td>{value.avatar_url}</td>
      <td>{value.gravatar_id}</td>
      <td>{value.url}</td>
      <td>{value.html_url}</td>
      <td>{value.followers_url}</td>
      <td>{value.following_url}</td>
      <td>{value.gists_url}</td>
      <td>{value.starred_url}</td>
      <td>{value.subscriptions_url}</td>
      <td>{value.organizations_url}</td>
      <td>{value.repos_url}</td>
      <td>{value.events_url}</td>
      <td>{value.received_events_url}</td>
      <td>{value.type}</td>
      <td>{value.user_view_type}</td>

    
    </tr>

   


                                                )


                                            }
                                        )}

                                    </tbody>)}
                                </table>
                            </div> </div>
                    </div>
                </div>
            </div>    
        
        
          </div>
  )
}

export default View