import { FormikErrors } from "formik";

export type AddTagsFormProps = {
  value: string;
  errors: FormikErrors<any>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
};

export default function AddTagsForm({
  value,
  errors,
  handleSubmit,
  handleChange,
}: AddTagsFormProps) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="inputLabel">
          Add tag:
          <br />
          <input
            className="formInput addTagInput"
            type="text"
            value={value}
            name="value"
            onChange={handleChange}
          />
        </label>
        <button className="button" type="submit">
          ADD
        </button>
      </form>
      {errors.value ? <div>{errors.value}</div> : null}
      {errors.add_tag ? <div>{errors.add_tag}</div> : null}
    </div>
  );
}
