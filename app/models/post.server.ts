export type PostType = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Array<PostType>> {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
}