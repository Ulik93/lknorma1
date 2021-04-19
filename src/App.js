import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Registration from './components/Registr/Registrationn'
import Login from './components/Login/Login'
import ResetPassword from './components/ResetPassword/ResetPassword.js'
import NewPassword from './components/NewPassword/NewPassword.js'
import Loading from './components/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getData, login, logout } from './redux/actions/index'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import Activate from './components/Activate/Activate'
import Vlad from './components/vlad/Vlad';


import {
  getDocsList,
  getTemplateExcelFile,
  uploadExcelFile,
  getTemplateExcelFileVlad
} from './redux/actions/DocumentsActions/document'

const App = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.data.token)
  const loginSuccess = useSelector((state) => state.data.login.success)
  const vlad = useSelector((state) => state.data.is_vlad)
  const getSuccess = useSelector((state) => state.data.get.success)
  const uploadState = useSelector((state) => state.docs.uploadFileState)
  const getDataLoading = useSelector((state) => state.data.get.loading)

  React.useEffect(() => {
    dispatch(getData(window.localStorage.getItem('token') || token))
  }, [getData, window.localStorage.getItem('token'), login, token, logout])

  React.useEffect(() => {
    dispatch(getDocsList())
    dispatch(getTemplateExcelFile())
    dispatch(getTemplateExcelFileVlad())
  }, [getDocsList, uploadExcelFile, uploadState])

  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route path='/auth' component={Registration} exact />
          <Route path='/reset' component={ResetPassword} exact />
          <Route path='/newpassword' component={NewPassword} exact />
          <Route path='/auth/activate/:token' component={Activate} />

          {((vlad) && <Route path='/vlad' component={Vlad} exact />)}
          {((vlad) && <Redirect to = '/vlad' />)}

          {((loginSuccess || getSuccess) && !vlad) && <Route path='/main' component={Sidebar} />}
          {((loginSuccess || getSuccess) && !vlad) && <Redirect to='/main' />}
          {!loginSuccess && !vlad && <Route path='/login' component={Login} />}
          {!loginSuccess && !vlad && <Redirect to='/login' />}
          
        </Switch>
        {getDataLoading && <Loading />}
      </div>
    </BrowserRouter>
  )
}

export default App
