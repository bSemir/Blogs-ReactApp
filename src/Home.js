import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);

    useEffect(() => { 
       setTimeout(() => {  {/* just simaluting request taking a bit longer */}
        fetch('http://localhost:8000/blogs').then(res => {
            return res.json(); //this is also async
        }).then((data) => {
            setBlogs(data);
           // console.log(data[0].body);
           setIsPending(false);
        })
       }, 1000);
    }, []);

    return (
        <div className="home">
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {/*da nije bilo ove provjere, blogs array bi bio prazan i ne bi imali sta proslijediti */}
        </div>
    );
}

export default Home;