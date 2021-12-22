import {
  Bookmark,
  Like,
  NewBookmark,
  NewLike,
} from "../article/types/articleActionsType";
import { Article } from "../article/types/articleTypes";
import { User } from "../authorization/types/userTypes";
import { NewArticle } from "../createArticle/containers/createArticleContainer";

export type SignInUpPayload = {
  username: string;
  password: string;
};

export type SignInResponsePayload = {
  access_token: string;
};

export interface RequestPayload {
  token: string;
}

export interface DeleteUSerPayload extends RequestPayload {
  id: string;
}

export interface UpdateUserStatus extends RequestPayload {
  user: User;
}

export interface AddArticlePayload extends RequestPayload {
  article: NewArticle;
}

export interface ArticlePayload extends RequestPayload {
  id: string;
}

export interface BookmarkPayload extends RequestPayload {
  bookmark: Bookmark;
}

export interface SaveBookmarkPayload extends RequestPayload {
  bookmark: NewBookmark;
}

export interface GetCommentsPayload extends RequestPayload {
  id: string;
}

export interface SaveCommentPayload extends RequestPayload {
  _id?: string;
  article: Article;
  author: User;
  text: string;
}

export interface isExistPayload extends RequestPayload {
  like: Like;
}

export interface getLikeCountPayload extends RequestPayload {
  id: string;
}

export interface saveLikePayload extends RequestPayload {
  like: NewLike;
}

export interface DeleteLikePayload extends RequestPayload {
  like: Like;
}

export interface TagPayload extends RequestPayload {
  tag: string;
}

export interface DeleteTagPayload extends RequestPayload {
  id: string;
}
