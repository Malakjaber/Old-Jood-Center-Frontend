import { useState } from "react";
import SectionNav from "../../global/SectionNav";
import TextFieldForm from "../../global/TextFieldForm";

export default function CreateTreatementPlan() {
  const [value, setValue] = useState("");
  const onSubmit = () => {};
  return (
    <div>
      <SectionNav title={"Create Treatement Plan"} />
      <TextFieldForm
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
        selected={"Class 2"}
        type={"treatement"}
      />
    </div>
  );
}
