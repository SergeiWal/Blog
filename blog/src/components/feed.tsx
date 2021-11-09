import { Article } from "../types/articleTypes";
import ArticleCard from "./articleCard";
import { WINDOW_HEIGHT } from "../constants/app";
import { FixedSizeList as List } from "react-window";
import { cardHeight, cardMaxWidth } from "../constants/styles";
import "../styles/feed.css";
import { Button } from "@mui/material";
import { generateArticleListRows } from "../containers/feedContainer";
import { FeedProps } from "../types/articlePropsTypes";

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
