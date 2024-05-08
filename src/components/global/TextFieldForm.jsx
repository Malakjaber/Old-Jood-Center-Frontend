import React from "react";
import QuillEditor from "./QuillEditor";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";

export default function TextFieldForm({
  value,
  setValue,
  selected,
  onSubmit,
  type,
  options,
}) {
  return (
    <div className="flex min-h-[100vh]">
      <div className="w-full p-10">
        <QuillEditor value={value} setValue={setValue} />

        <div className="flex justify-end gap-5 mt-4">
          {type !== "report" && options.length ? (
            <FormControl>
              <InputLabel
                sx={{ fontSize: "1.3rem" }}
                variant="standard"
                htmlFor="class-select"
              >
                Class
              </InputLabel>
              <NativeSelect
                defaultValue={options[0].value}
                inputProps={{
                  name: "class",
                  id: "class-select",
                }}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          ) : (
            ""
          )}

          <button
            onClick={onSubmit}
            className="bg-blue px-5 py-2 text-white w-fit rounded-md font-Itim text-xl border border-blue hover:bg-white hover:text-blue transition"
          >
            Submit
          </button>
        </div>
      </div>
      {type === "report" ? (
        <div className="w-[30%] flex flex-col items-center pt-24 bg-gradient-to-b from-primary to-white">
          <img className="w-[150px]" src="/assets/user.png" alt="" />
          <h1 className="font-Itim text-4xl mt-8 px-6">{selected}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
