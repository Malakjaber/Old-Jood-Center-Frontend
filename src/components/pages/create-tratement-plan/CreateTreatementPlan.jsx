import { useState } from "react";
import SectionNav from "../../global/SectionNav";
import TextFieldForm from "../../global/TextFieldForm";

export default function CreateTreatementPlan() {
  const [value, setValue] = useState(1);
  const onSubmit = () => {};
  return (
    <div>
      <SectionNav title={"Create Treatement Plan"} />
      <TextFieldForm
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
        type={"treatement"}
        options={[
          { value: 1, title: "heloo" },
          { value: 2, title: "heloo2" },
          { value: 3, title: "heloo3" },
          { value: 4, title: "heloo4" },
        ]}
      />
    </div>
  );
}
