import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from  "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import axios from 'axios'
import { API_URL } from './config';
import {useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {UserContext} from './context/app.context'
import GroupAdd from "./components/GroupAdd";
import GroupList from "./components/GroupList";
import GroupDetail from "./components/GroupDetail";
import GroupEdit from "./components/GroupEdit";

function App() {

  const [groups, setGroups] = useState([])
  //SIGN IN has to be handle in app.js because it will be needed globally
  //FIRST THING we'll do is to create a state to STORE THE LOGGED IN USER information
  const {user, setUser} = useContext(UserContext)
  const [myError, setError] = useState(null)
  const [fetchingUser, setFetchingUser] = useState(true)
  
  // This hook is for us to redirect users to different urls
  let navigate = useNavigate()

  // This runs only --ONCE-- when the component is mounted
  useEffect(() => {

    const getData = async () => {
        let response  = await axios.get(`${API_URL}/groups`,{withCredentials: true})
        setGroups(response.data)

        // -----------------------------------------------
        // we make the user requst here to know if the user is logged in or not
        try {
          let userResponse = await axios.get(`${API_URL}/user`,{withCredentials: true})
          setFetchingUser(false)
          setUser(userResponse.data)
        }
        catch(err){
          // the request will fail if the user is not logged in 
          setFetchingUser(false)
        }
        // -----------------------------------------------

    }

    getData()

}, [])

// Runs everytime 'todos' gets updates - a conditional did update
useEffect(() => {
  navigate('/')
}, [groups, user])

const handleSubmit = async (event) => {
  event.preventDefault()
  //first upload the image to cloudinary

  let newGroup = {
    name: event.target.name.value,
    description: event.target.description.value,
    completed: false,
  }
  // Pass an object as a 2nd param in POST requests
  let response = await axios.post(`${API_URL}/create`, newGroup, {withCredentials: true})
  setGroups([response.data, ...groups])
}

const handleEdit = async (event, id) => {
  event.preventDefault()
  let editedGroup = {
    name: event.target.name.value,
    description: event.target.description.value,
    completed: false,
  }
  // Pass an object as a 2nd param in POST requests
  let response = await axios.patch(`${API_URL}/groups/${id}`, editedGroup, {withCredentials: true})
  // Update our state 'todos' with the edited todo so that the user see the upadted info without refrshing the page

  let updatedGroups = groups.map((elem) => {
      if (elem._id === id) {
          elem.name = response.data.name
          elem.description = response.data.description
      }
      return elem
  })

  setGroups(updatedGroups)
  
}

const handleDelete = async (id) => {
// make a request to the server to delete it from the database
await axios.delete(`${API_URL}/groups/${id}`)

// Update your state 'todos' and remove the todo that was deleted
let filteredGroups = groups.filter((elem) => {
    return elem._id !== id
  })

  setGroups(filteredGroups)
}

  //creating a function to HANDLE sign in
  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value
      }
  
      let response = await axios.post(`${API_URL}/signin`, newUser, {withCredentials: true})
      setUser(response.data)
      //navigate will redirect the user to the desired path
      navigate('/')
    }
    catch(err){
      setError(err.response.data.error)
    }
  }

  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
    setUser(null)
}

// // Wait for the '/api/user' request to finish so that we know if the user is loggedin or not
// if (fetchingUser) {
//   return <p>Loading user info. . . </p>
// }

  return (
    <div>
      <Navbar onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<GroupList groups={groups} /> } />
        <Route path="/create-group" element={<GroupAdd btnSubmit={handleSubmit} /> } />
        <Route path="/group/:groupId" element={<GroupDetail user={user} btnDelete={handleDelete} />} />
        <Route path="/group/:groupId/edit" element={<GroupEdit btnEdit={handleEdit}/>} />
        <Route  path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn}/>}/>
        <Route  path="/signup" element={<SignUp />}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
