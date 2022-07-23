import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div> { error } </div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/*da nije bilo ove provjere, blogs array bi bio prazan i ne bi imali sta proslijediti */}
        </div>
    );
}

export default Home;