const Posts = ({ posts }) => {
  return (
    <>
      <main>
        <div className={`container`}>
          <div className={`row`}>
            <h1>Posts</h1>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

const getServerSideProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error(`Failed to fetch posts, received status ${res.status}`);
    }
    const posts = await res.json();
    console.log("Fetched posts:", posts); // Log to verify structure
    return { props: { posts } };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return { props: { posts: [] } }; // Return empty array or suitable fallback
  }
};

export default Posts;
