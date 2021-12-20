const ERROR_MESSAGE: string = "Please, enter tags name";

export type AddTagsFormProps = {
  value: string;
  isValidate: boolean;
  setValue: (data: string) => void;
  clickHandler: () => void;
};

export default function AddTagsForm({
  value,
  isValidate,
  setValue,
  clickHandler,
}: AddTagsFormProps) {
  return (
    <div>
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
      <div className="infoMessage">{isValidate ? "" : ERROR_MESSAGE}</div>
    </div>
  );
}
