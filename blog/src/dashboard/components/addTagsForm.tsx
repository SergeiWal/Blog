export type AddTagsFormProps = {
  value: string;
  setValue: (data: string) => void;
  clickHandler: () => void;
};

export default function AddTagsForm({
  value,
  setValue,
  clickHandler,
}: AddTagsFormProps) {
  return (
    <form>
      <label className="inputLabel">
        Add tag:
        <br />
        <input
          className="formInput addTagInput"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button className="button" type="button" onClick={clickHandler}>
        ADD
      </button>
    </form>
  );
}
