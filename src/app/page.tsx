type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res: Response = await fetch("https://jsonplaceholder.org/posts");
  const posts: Post[] = await res.json();
  return (
    <main>
      <h1>سلام رفیق!</h1>;
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex est,
        consectetur impedit numquam sit tempore voluptatem inventore ducimus
        quasi voluptatum ipsum, corrupti officiis ab laudantium soluta obcaecati
        deserunt dignissimos!
      </p>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
