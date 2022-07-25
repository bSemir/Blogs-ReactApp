import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Edit = () => {
    const { id } = useParams();

    const { data: blog, error } = useFetch('http://localhost:8000/blogs/' + id);

    const [title, setTitle] = useState(''); //pocetna vrijednost
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();



    const handleEdit = (e) => {
        e.preventDefault(); //zabranjujemo default ponasanje(refresh)
        const blog = { title, body, author };
        console.log(blog);
        setIsPending(true);

        //  console.log(blog);
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('you updated the blog');
            setIsPending(false);
            //   history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="create">
            {blog && (
                <form onSubmit={handleEdit}>
                    <article>
                        <h2>Update your blog</h2>
                        <label>Blog title:</label>
                        <input
                            type="text"
                            required
                            defaultValue={blog.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                {/*ima mali bug koji ce polja koja ne editujemo postaviti na '' i izvrsiti update */}
                        <label>Blog body:</label>
                        <textarea
                            required
                            defaultValue={blog.body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <label>Blog author:</label>
                        <select defaultValue={blog.author} onChange={(e) => setAuthor(e.target.value)}>
                            <option value="mario">mario</option>
                            <option value="yoshi">yoshi</option>
                            <option value="semir">semir</option>
                        </select>
                        { !isPending && <button>Confirm</button> }

                    </article>
                </form>
            )}

        </div>
    );
}

export default Edit;
