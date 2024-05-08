import { useState } from "react";
import SectionNav from "../../global/SectionNav";
import TextFieldForm from "../../global/TextFieldForm";
import { useParams } from "react-router-dom";

export default function CreateReport() {
  const [value, setValue] = useState("");

  const { id, stName } = useParams();

  const onSubmit = () => {};
  return (
    <div>
      <SectionNav title={"Submit Report"} />
      <TextFieldForm
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
        selected={stName}
        type="report"
      />
    </div>
  );
}
