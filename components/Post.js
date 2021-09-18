import Link from "next/link";

const Post = ({ slug, frontmatter }) => {
  const { title, excerpt, cover_image, date } = frontmatter;
  return (
    <div className="post">
      <img src={cover_image} alt="post" className="post__image" />
      <div className="post__content">
        <h3 className="post__heading">{title}</h3>
        <div className="post__date">{date}</div>
        <p className="post__excerpt">{excerpt}</p>
        <Link className="link" href={`/blogs/${slug}`}>
          <a className="post__button">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
