import AppBar from "./components/AppBar";
import AppRouter from "./components/AppRouter";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <div>
            <AppBar/>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}
