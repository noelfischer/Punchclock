import React, {useState} from 'react';
import './App.css';
import Entries from "./Modules/Entries";
import EntryServices from "./EntryServices";
import EntriyForm from "./Modules/EntryForm";
import UserForm from "./Modules/UserForm";
import Login from "./Modules/Login"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


function App(data) {

    const [entries, setEntries] = useState(data)
    const [entry, setEntry] = useState()

    console.log(1, entries.data)

    const reload = () => {
        setEntries(entries);
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/punchclock">Punchclock</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/punchclock">
                        <Punchclock setEntry={setEntry} entries={entries}/>
                    </Route>
                    <Route path="/login">
                        <LoginForm/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    if (localStorage.getItem("token") == null) {
        console.log("Not logged in!")
        return <Redirect to='/login'/>
    } else {
        console.log("token: ", localStorage.getItem("token"))
        return <Redirect to='/punchclock'/>
    }
}

function Punchclock({setEntry, entries}) {

    return (
        <div>
            <h2>Punchclock</h2>
            <div>
                <EntriyForm setEntry={setEntry}/>

                <Entries entries={entries.data}/>
            </div>
        </div>
    );
}

function LoginForm() {
    return (
        <div>
            <h2>Login</h2>
            <Login/>
        </div>
    );
}

function Users() {

    return (
        <div>
            <h2>Users</h2>
            <UserForm/>
        </div>
    );
}

export default App;
