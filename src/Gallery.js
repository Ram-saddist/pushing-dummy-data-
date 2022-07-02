import {useState} from 'react'
function Gallery(){
    const [user,setUser]=useState("");
    function handleChange(e){
        setUser(e.target.value)
    }
    function show(){
        alert(user)
    }
    return(
        <div>
            <input 
                type="text"
                placeholder="Enter a name"
                onChange={handleChange}/>
            <button onClick={show}>Submit</button>
        </div>
    )
}
export default Gallery