import React from "react";
import { useGlobal } from "./GlobalProvider";

export default function InfoForm() {
  const { info, updateInput } = useGlobal();

  return (
    <div style={{ position:'sticky', top:0 }}>
      <label>
        A
        <input
          type="text"
          value={info.input1}
          onChange={(e) => updateInput("input1", e.target.value)}
          style={{width:'15vw'}}
        />
      </label>
      <br />
      <label>
        B
        <input
          type="text"
          value={info.input2}
          onChange={(e) => updateInput("input2", e.target.value)}
          style={{width:'15vw'}}
        />
      </label>
      <br />
      <label>
        C
        <input
          type="text"
          value={info.input3}
          onChange={(e) => updateInput("input3", e.target.value)}
          style={{width:'15vw'}}
        />
      </label>
    </div>
  );
}
