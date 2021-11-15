export default function CreateArticle() {
  return (
    <div className="createArticleForm">
      <input type="text" className="articleTitleInput" placeholder="Title" />
      <input
        type="text"
        className="articleImgSrcInput"
        placeholder="Link to image"
      />
      <textarea className="articleTextInput" placeholder="Text" />
      <div className="articlePublishButton">
        <button type="button">Publish</button>
      </div>
    </div>
  );
}
