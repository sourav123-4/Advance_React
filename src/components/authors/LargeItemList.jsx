export const LargeItemList = ({author})=>{
    const {name,age,country,books} = author;
    return <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Country: {country}</h1>
        <h1>Books: </h1>
        <ul>{books.map((book)=>(
            <li key={book}>{book}</li>
        ))}</ul>
    </div>
}