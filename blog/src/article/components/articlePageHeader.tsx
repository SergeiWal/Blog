import { ArticlePafeHeaderProps } from "../types/articlePropsTypes";

export default function ArticlePageHeader({
  title,
  subtitle,
  name,
  date,
  updatedate,
}: ArticlePafeHeaderProps) {
  return (
    <div className="articleHeader">
      <div className="articleTitle">{title}</div>
      <div className="articleSubtitle">{subtitle}</div>
      <div>
        {name} {updatedate}
      </div>
    </div>
  );
}
