import { useState } from "react";
import { createArticleApi } from "../api/api";
import { getCookie } from "../api/cookie";

export default function FormArticles() {

    const [article,setArticle] = useState({
        "title": "",
        "content": "",
        "token": getCookie('token')
    })

    const handleClick = (e) => {
        e.preventDefault()
        createArticleApi(article)

        setArticle({...article, title: "", content: ""})
    }

    return (
        <form>
            <h2>Create articles</h2>
            <label htmlFor="title">
                <input type="text" name="title" id="title" placeholder="title" onChange={(e) => {setArticle({...article, title: e.target.value})}}/>
            </label>
            <textarea name="content" id="content" placeholder="content" onChange={(e) => {setArticle({...article, content: e.target.value})}} />
            <button type="submit" onClick={handleClick}>Create article</button>
        </form>
    );
};