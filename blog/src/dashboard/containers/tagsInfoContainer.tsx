import { useState } from "react";
import AddTabsForm from "../components/addTagsForm";

export default function TabsInfoContainer() {
  const [value, setValue] = useState("");

  const clearForm = () => {
    setValue("");
  };

  const clickHandler = () => {
    console.log(value);
    clearForm();
  };

  return (
    <div>
      <AddTabsForm
        value={value}
        setValue={setValue}
        clickHandler={clickHandler}
      />
    </div>
  );
}
