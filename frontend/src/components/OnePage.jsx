import {getCookie} from "../api/cookie";
import Login from '../components/login';
import Register from '../components/Register';
import FormArticle from '../components/FormArticles';


export default function OnePage() {

    if(getCookie('token') === null) {
        return (
            <div>
                <Login/>
                <Register/>
            </div>
        )
    }
    if(getCookie('token') !== null){
        return (
            <div>
                <FormArticle/>
            </div>
        )
    }
}