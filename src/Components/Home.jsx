import { useContext, react, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  const [news, setNews] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:4000/news')
  //   .then(res=>res.json())
  //   .then(data => setNews(data))
  //   .catch(error=>console.log(error.message)
  //   )
  // }
  //   ,[])

  const handleUser = (e) => {
    e.preventDefault();
    const formdata = e.target;
    const name = formdata.name.value;
    const email = formdata.email.value;
    const users = { name, email };
    console.log(users);
    formdata.reset();

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

  
  };

  return (
    <div>
      <h2>Homeeeeeeeeeeee: {authInfo.name}</h2>
      <h3>News: {news.length}</h3>

      <h2>Add User</h2>
      <form onSubmit={handleUser}>
        <input type="text" name="name" placeholder="Enter Name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Enter Email" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
