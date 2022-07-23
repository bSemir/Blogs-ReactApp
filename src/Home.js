import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => { {/* ova funkcija se poziva na svaki render i izmijenu podataka(blogs sa setBlogs npr) */}
        console.log('use effect ran');
    }, [name]); {/*but if we put dependency array, it will fire up only on first render
 */}   {/* u array stavljamo ono sto zelimo da bude "ovisno" tj. useEffect state ce se pozvati kad se promijeni ono sto je u dependency array-u*/}

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>  {/* function as a prop */}
            {/* <BlogList blogs={blogs.filter((blog) => (blog.author === 'mario'))} title="Mario's blogs" /> */}
            <button onClick={() => setName('luigi')}>Change name</button>
            <p> {name} </p>
        </div>
    );
}

export default Home;