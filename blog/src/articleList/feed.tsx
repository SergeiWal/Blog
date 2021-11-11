import { Article } from "../article/types/articleTypes";
import ArticleCard from "./articleCard";
import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../styles/styles";
import { Button } from "@mui/material";
import { generateArticleListRows } from "./feedContainer";
import { FeedProps } from "../article/types/articlePropsTypes";
import "../styles/feed.css";

const WINDOW_HEIGHT: number = window.innerHeight;
export default function Feed({ articles, signOutHandler }: FeedProps) {
  const listArticle = articles.map((item: Article) => (
    <ArticleCard key={item.id} article={item}></ArticleCard>
  ));

  return (
    <div>
      <header className="header">
        <Button variant="contained" color="inherit" onClick={signOutHandler}>
          Sign Out
        </Button>
      </header>
      <List
        className="articlesList"
        itemData={listArticle}
        height={WINDOW_HEIGHT}
        itemCount={listArticle.length}
        itemSize={cardHeight}
        width={cardMaxWidth}
      >
        {generateArticleListRows}
      </List>
    </div>
  );
}
