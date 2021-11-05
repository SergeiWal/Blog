import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../constants/styles";
import { ArticleComments, ListGeneratorParams } from "../types/articleTypes";
import CommentView from "../components/commentView";

export type ArticleCommentsProps = {
  comments: ArticleComments;
};

const generateCommentRows = ({ data, index, style }: ListGeneratorParams) => {
  return (
    <div style={style} className="CommentView">
      {data[index]}
    </div>
  );
};

export default function ArticleCommentList({ comments }: ArticleCommentsProps) {
  const commentsList = comments.map((comment) => {
    return <CommentView user={comment.author} text={comment.text} />;
  });
  return (
    <List
      itemData={commentsList}
      className="commentsList"
      height={cardHeight}
      itemCount={commentsList.length}
      itemSize={150}
      width={880}
    >
      {generateCommentRows}
    </List>
  );
}
