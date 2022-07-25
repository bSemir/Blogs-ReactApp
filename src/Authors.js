import AuthorList from "./AuthorList";
import useFetch from "./useFetch";

const Authors = () => {
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs'); 

    return (
        <div className="authors">
            {isPending && <div>Loading...</div>}
            {error && <div> { error } </div> }
            {blogs && <AuthorList blogs={blogs} title="All Authors:" />}
        </div>
    );
}
 
export default Authors;