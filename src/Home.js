import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => { 
        fetch('http://localhost:8000/blogs').then(res => {
            return res.json(); //this is also async
        }).then((data) => {
            setBlogs(data);
           // console.log(data[0].body);
        })
    }, []);

    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {/*da nije bilo ove provjere, blogs array bi bio prazan */}
        </div>
    );
}

export default Home;