import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../constants/styles";
import { ArticleComments, ListGeneratorParams } from "../types/articleTypes";

export type ArticleCommentsProps = {
  commets: ArticleComments;
};

const generateCommentRows = ({ data, index, style }: ListGeneratorParams) => {
  return <div style={style}>{data[index]}</div>;
};

export default function ArticleComments() {
  return (
    <List
      className="commentsList"
      height={cardHeight * 2.5}
      itemSize={cardHeight}
      width={cardMaxWidth}
    >
      {generateCommentRows}
    </List>
  );
}
