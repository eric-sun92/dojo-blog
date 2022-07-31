import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  //   let name = "simon";
  //   const [name, setName] = useState("eric");
  //   const [age, setAge] = useState(19);

  //   [
  //     { title: "title 1", body: "body1", author: "eric", id: 1 },
  //     { title: "title 2", body: "body2", author: "simon", id: 2 },
  //     { title: "title 3", body: "body3", author: "eric", id: 3 },
  //   ]
  //   const [name2, setName2] = useState("mario");

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => {
  //       return blog.id !== id;
  //     });
  //     setBlogs(newBlogs);
  //   };

  //   const handleClick = (name) => {
  //     console.log(name);
  //     if (name.name === "simon") {
  //       setName("ksi");
  //       setAge(28);
  //     } else if (name.name === "ksi") {
  //       setName("simon");
  //       setAge(27);
  //     } else {
  //       setName("simon");
  //       setAge(27);
  //     }
  //   };

  //   const handleClickAgain = (name, e) => {
  //     console.log("hi", name, e.target);
  //   };

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* <p>
        {name} is {age} years old
      </p> */}
      {/* <button onClick={() => handleClick({ name })}>Click me</button> */}
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          //   handleDelete={handleDelete}
        />
      )}

      {/* <button onClick={() => setName2("bob")}>Change Name</button>
      <p>{name2}</p>
      <button onClick={(e) => handleClickAgain("eric", e)}>
        Click me again
      </button> */}
    </div>
  );
};

export default Home;
