export default async function HomePage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );

  return (
    <main>
      <h1>Traced Home Page</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
