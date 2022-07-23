import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => { {/* just simaluting request taking a bit longer */ }
            fetch(url).then(res => {
                //console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch the data');
                }
                return res.json(); //this is also async
            }).then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch((err) => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]); //whenever url changes, it is going to call this useEffect state

    return { data, isPending, error }
}

export default useFetch;