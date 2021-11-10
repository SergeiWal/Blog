import { ArticlePageMainContentProps } from "../types/articlePropsTypes";

export default function ArticlePageMainContent({
  id,
  img,
  text,
}: ArticlePageMainContentProps) {
  return (
    <div>
      <div className="articleImg">
        <img src={img} alt={`Article ${id}`}></img>
      </div>
      <div className="articleTextContent">{text}</div>
    </div>
  );
}
