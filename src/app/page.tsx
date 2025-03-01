type Post = {
  count: number;
  id: number;
  title: string;
};

export default async function Home() {
  const res: Response = await fetch("https://jsonplaceholder.org/posts", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();
  return;
  <div></div>;
}
