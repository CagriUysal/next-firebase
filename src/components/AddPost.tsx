import { ChangeEvent, FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db, auth } from "utils/firebase";

const createPost = (post: any) => {
  addDoc(collection(db, "posts"), post);
};

function AddPost() {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentUser = auth.currentUser;
    if (currentUser === null) {
      console.error("Can't create a new post! Please sign-in.");
      return;
    }

    const { uid, displayName, email, photoURL } = currentUser;
    const post = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
      favorites: 0,
      comments: 0,
      createdAt: serverTimestamp(),
    };

    createPost(post);
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
