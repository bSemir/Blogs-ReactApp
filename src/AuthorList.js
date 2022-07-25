const AuthorList = ({ blogs, title }) => {
    const authors = [];
    let unique_authors = [];
    return (
        
        <div className="blog-list" key={blogs.id}>
            <h2>{title}</h2>
            {blogs.forEach(element => {
                authors.push(element.author);
               // console.log(authors);
                unique_authors = [...new Set(authors)] 
                //console.log(unique_authors);
            })}
          
            {/* kad budem htio nastaviti:
            sve radi, prikazuju se autori bez duplikata
            -odraditi commit i push
            */}
            {/* izbaciti duplikate iz niza imena */}
            {unique_authors.map((element) => (
                <div className="blog-preview" key={blogs.id}> 
                    <h2>{element}</h2>
                </div>
            ))}
        </div>
    );
}

export default AuthorList;