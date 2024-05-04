import { useState } from "react";
import SectionNav from "../../global/SectionNav";
import TextFieldForm from "../../global/TextFieldForm";

export default function CreateReport() {
  const [value, setValue] = useState("");
  const onSubmit = () => {};
  return (
    <div>
      <SectionNav title={"Submit Report"} />
      <TextFieldForm
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
        selected={"Ali"}
        type="report"
      />
    </div>
  );
}
