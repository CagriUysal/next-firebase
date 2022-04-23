import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";

import { auth, db, storage } from "utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const getUid = () => auth.currentUser?.uid;

function UserProfile() {
  const [displayName, setDisplayName] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userRef = doc(db, `users/${getUid()}`);

    if (displayName !== "") {
      updateDoc(userRef, { displayName });
    }

    const file = fileRef.current?.files?.[0];
    if (file) {
      const storageRef = ref(
        storage,
        `user-profiles/${getUid()}/${file?.name}`
      );
      const taskResponse = await uploadBytes(storageRef, file as Blob);

      updateDoc(userRef, { photoURL: await getDownloadURL(taskResponse.ref) });
    }
  };

  return (
    <section className="UserProfile">
      <form onSubmit={handleSubmit} className="UpdateUser">
        <input
          type="text"
          name="displayName"
          value={displayName}
          placeholder="Display Name"
          onChange={handleChange}
        />
        <input type="file" ref={fileRef} />
        <input className="update" type="submit" />
      </form>
      {/* <div>
        <PostsForUser uid={this.uid}>
          {(posts) => posts.map((post) => <Post {...post} key={post.id} />)}
        </PostsForUser>
      </div> */}
    </section>
  );
}

export default UserProfile;
