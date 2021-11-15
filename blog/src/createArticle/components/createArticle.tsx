const ERROR_MESSAGE: string = "Please, fill all members";

export type CreateArticleProps = {
  isValidate: boolean;
  title: string;
  subTitle: string;
  text: string;
  img: string;
  tags: string;
  setTitle: (title: string) => void;
  setSubTitle: (subtitle: string) => void;
  setText: (text: string) => void;
  setImg: (img: string) => void;
  clickPublishHandler: () => void;
  setTags: (tags: string) => void;
};

export default function CreateArticle({
  isValidate,
  title,
  subTitle,
  text,
  img,
  tags,
  setImg,
  setText,
  setTitle,
  setSubTitle,
  clickPublishHandler,
  setTags,
}: CreateArticleProps) {
  return (
    <div className="createArticleForm">
      <input
        type="text"
        className="articleTitleInput"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        className="articleTitleInput"
        placeholder="Subtitle"
        onChange={(e) => setSubTitle(e.target.value)}
        value={subTitle}
      />
      <input
        type="text"
        className="articleImgSrcInput"
        placeholder="Link to image"
        onChange={(e) => setImg(e.target.value)}
        value={img}
      />
      <textarea
        className="articleTextInput"
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input
        type="text"
        className="articleTagsInput"
        placeholder="Write tags separated by commas"
        onChange={(e) => setTags(e.target.value)}
        value={tags}
      />
      <div className="infoMessage">{isValidate ? "" : ERROR_MESSAGE}</div>
      <div className="articlePublishButton">
        <button type="button" onClick={clickPublishHandler}>
          Publish
        </button>
      </div>
    </div>
  );
}
