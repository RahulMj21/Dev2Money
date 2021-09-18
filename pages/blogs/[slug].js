import fs from "fs";
import matter from "gray-matter";
import path from "path";
import marked from "marked";

const singlePost = ({ slug, frontmatter, content }) => {
  return (
    <div className="singlePost container">
      <div className="singlePost__content">
        <div className="singlePost__head">
          <h3 className="singlePost__title">{frontmatter.title}</h3>
          <p className="singlePost__date">{frontmatter.date}</p>
          <p className="singlePost__excerpt">{frontmatter.excerpt}</p>
          <img
            src={frontmatter.cover_image}
            alt="cover_image"
            className="singlePost__image"
          />
        </div>
        <article
          className="singlePost__body"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></article>
      </div>
    </div>
  );
};

export default singlePost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithData = fs.readFileSync(path.join("posts", slug + ".md"));
  const { data: frontmatter, content } = matter(markdownWithData);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}
