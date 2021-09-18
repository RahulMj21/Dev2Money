import Head from "next/head";
import fs from "fs";
import path from "path";
import Post from "../components/Post";
import matter from "gray-matter";
import { sortByDate } from "../utils";

const Blogs = ({ posts }) => {
  return (
    <section className="blog">
      <Head>
        <title>Dev2Money</title>
      </Head>
      <div className="blog__banner" />
      <main className="container blog__content">
        <div className="blog__content__categories">
          <button className="item">HTML</button>
          <button className="item">CSS</button>
          <button className="item">Javascript</button>
          <button className="item">PHP</button>
          <button className="item">python</button>
        </div>
        <div className="blog__content__posts">
          {posts.map((post) => {
            return (
              <Post
                slug={post.slug}
                frontmatter={post.frontmatter}
                key={post.slug}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
};

export async function getStaticProps() {
  // get post directory from the root directory
  const files = fs.readdirSync(path.join("posts"));

  // get the slugs from the files
  const posts = files.map((file) => {
    const slug = file.replace(".md", "");

    // get frontmatter
    const markdownWithData = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data: frontmatter } = matter(markdownWithData);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default Blogs;
