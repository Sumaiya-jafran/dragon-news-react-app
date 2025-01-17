import {React,useState} from 'react';

const User = ({user,users}) => {

    const [remaining,setRemaining]=useState(users);
    console.log('remaining name',remaining.name);
    console.log(remaining);
    const {name,email,_id} =user;
    const handleDelete=(id)=>{
        console.log('deletee:' , id);
        fetch(`http://localhost:4000/users/${id}`,{
            method:"DELETE"
        }
            
        )
        .then(res=>res.json())
        .then(data=>console.log(data))

        const remainingUser= remaining.filter(remaining=>remaining._id !==id);
        setRemaining(remainingUser);
    }
    return (
        <div className='border m-3 p-3'>
           <p> {remaining.name} - <span>Email: {remaining.email}</span> 
           <button onClick={()=>handleDelete(_id)} className='p-3 '>X</button>
           </p> 
           
        </div>
    );
};

export default User;