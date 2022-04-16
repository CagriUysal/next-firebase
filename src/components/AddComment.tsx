import { ChangeEvent, FormEvent, useState } from "react";

function AddComment({ onCreate }: any) {
  const [content, setContent] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setContent("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="AddComment">
      <input
        type="text"
        name="content"
        placeholder="Comment"
        value={content}
        onChange={handleChange}
      />
      <input className="create" type="submit" value="Create Comment" />
    </form>
  );
}

export default AddComment;
