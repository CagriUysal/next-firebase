import { ChangeEvent, FormEvent, useState } from "react";

function AddPost({ onCreate }: any) {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const post = {
      id: Date.now().toString(),
      title,
      content,
      user: {
        uid: "1111",
        displayName: "Steve Kinney",
        email: "steve@mailinator.com",
        photoURL: "http://placekitten.com/g/200/200",
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    };

    onCreate(post);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const { title, content } = formData;

  return (
    <form onSubmit={handleSubmit} className="Addpost">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="content"
        placeholder="Body"
        value={content}
        onChange={handleChange}
      />
      <input className="create" type="submit" value="Create Post" />
    </form>
  );
}

export default AddPost;
