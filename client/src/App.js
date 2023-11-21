import {useEffect} from 'react';
import './App.css';
import { useSelector} from "react-redux";
import Login from "./components/Login";
import {Route, Routes, Navigate} from "react-router-dom";
import MainPage from "./components/MainPage";


function App() {
    const { loggedIn } = useSelector(state => state.login);

    useEffect(() => {
        // TEST API, it might be removed
        fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
            console.log('API CONNECTION IS OK');
        }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))
    }, []);


    return (

        <div className="App">
            <Routes>
                <Route path="/login" element={loggedIn ? <Navigate to="/"/> : <Login/>}/>
                <Route path="/" element={loggedIn ? <MainPage/> : <Navigate to="/login"/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>

    );
}

export default App;
