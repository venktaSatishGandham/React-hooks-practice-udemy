import React from "react";

export default function BookCreate() {
  return (
    <div>
      <form>
        <label>Title</label>
        <input value={""} />
        <button>Create!</button>
      </form>
    </div>
  );
}
