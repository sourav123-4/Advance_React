export const SmallItemList = ({author})=>{
    const {name,age} = author;
    return <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
    </div>
}