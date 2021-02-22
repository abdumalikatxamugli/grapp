import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginBegin, authLoginSuccess, authLoginError } from "../redux/actions";
const { ipcRenderer } = window.require('electron');
const LocalLogin = (props) => {
    const dispatch = useDispatch()
    const authReducer = useSelector(state => state.authReducer)
    const [formdata, setFormdata] = useState({
        id: '',
        password: ''
    })
    const [users, setUsers] = useState([])
    useEffect(() => {
        ipcRenderer.on("check-local-pass-success", check_local_pass_success)
        ipcRenderer.on("check-local-pass-error", check_local_pass_error);
        ipcRenderer.on("local-password-init-success", initializeUsers);
        return () => {
            ipcRenderer.removeListener("check-local-pass-success", check_local_pass_success);
            ipcRenderer.removeListener("check-local-pass-error", check_local_pass_error);
            ipcRenderer.removeListener("local-password-init-success", initializeUsers);
        }
    }, [])
    useEffect(() => {
        ipcRenderer.send("local-password-init")
    }, [])
    const initializeUsers = (event, data) => {setUsers([...data])}
    const check_local_pass_error = () => {
        dispatch(authLoginError("Пароль неверный!"))
    }
    const check_local_pass_success = (event, data) => {
        dispatch(authLoginSuccess(data))
    }
    const changer = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const local_login = (e) => {
        e.preventDefault()
        dispatch(authLoginBegin())
        ipcRenderer.send("check-local-pass", formdata)
    }
    return (
        <div className="wrapper login">
            <div className="loginForm">
                {authReducer.loading && <div>Подождите!</div>}
                {authReducer.error && <div>Ошибка: {authReducer.error}</div>}
                <div className="form-group">
                    <label htmlFor="login">Логин</label>
                    <select name="id" onChange={changer} className="form-control">
                        <option value="">Выбрать пользователя</option>
                        {users.map((item, idx) => (<option key={idx} value={item.SYSTEM_ID}>{item.NAME}</option>))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" onChange={changer} className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-info mr-auto ml-auto" onClick={local_login}>Войти</button>
                </div>
                <button onClick={props.changer}>Войти как новый пользователь</button>
            </div>
        </div>)
}
const WebLogin = (props) => {
    const dispatch = useDispatch()
    const authReducer = useSelector(state => state.authReducer)
    const [formdata, setFormdata] = useState({
        login: '',
        password: '',
        user_id: '',
        local_password: '',
        success: false
    })
    const changer = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const login_emit = (e) => {
        e.preventDefault()
        dispatch(authLoginBegin())
        ipcRenderer.send("user-login", formdata)
    }
    const user_login_success = (event, data) => {
        setFormdata({ ...formdata, user_id: data.id, success: true })
    }
    const user_login_error = () => {
        dispatch(authLoginError("Логин или пароль неверный"))
    }
    const user_login_notconnected = () => {
        dispatch(authLoginError("Интернет не подключен"))
    }
    const set_local_password = () => {
        ipcRenderer.send("set-local-password", { user_id: formdata.user_id, local_password: formdata.local_password })
    }
    const set_local_password_success = (event, data) => {
        dispatch(authLoginSuccess(data))
    }
    useEffect(() => {
        ipcRenderer.on("user-login-success", user_login_success);
        ipcRenderer.on("user-login-error", user_login_error);
        ipcRenderer.on("user-login-notconnected", user_login_notconnected);
        ipcRenderer.on("set-local-password-success", set_local_password_success)
        return () => {
            ipcRenderer.removeListener("user-login-success", user_login_success);
            ipcRenderer.removeListener("user-login-error", user_login_error);
            ipcRenderer.removeListener("user-login-notconnected", user_login_notconnected);
            ipcRenderer.removeListener("set-local-password-success", set_local_password_success)
        }
    }, [])
    return (<div className="wrapper">
        <div className="loginForm">
            <div id="onlinelogin">
                <div className="logo">
                    <h3>GROSS OFFLINE</h3>
                </div>
                {authReducer.loading && <div>Подождите!</div>}
                {authReducer.error && <div>Ошибка: {authReducer.error}</div>}
                <div className="form-group">
                    <label htmlFor="login">Логин</label>
                    <input type="text" name="login" onChange={changer} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" onChange={changer} name="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-info ml-auto mr-auto " onClick={login_emit}>Войти</button>
                </div>
            </div>
            <div className={formdata.success ? 'set-local-login visible' : 'set-local-login'}>
                <p>Пожалуйста, установите свой локальный пароль</p>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="local_password" onChange={changer} className="form-control" />
                </div>
            </div>
            {formdata.success && <button onClick={set_local_password}>Сохранить</button>}
            {!formdata.success && <button onClick={props.changer}>Войти с локальным паролем</button>}
        </div>
    </div>)
}
const WithAuth = (props) => {
    const dispatch = useDispatch()
    const authReducer = useSelector(state => state.authReducer)
    // Auth Type: if true WebLogin else Locallogin
    const [authType, setAuthType] = useState(true)
    const changeType = () => setAuthType(!authType)
    return (
        <>
            {authReducer.loggedIn === true ? props.children : (authType ? <WebLogin changer={changeType} /> : <LocalLogin changer={changeType} />)}
        </>
    );
}

export default WithAuth;