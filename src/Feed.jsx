import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './Firebase';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) =>
      setPosts(snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          data: {
            ...data,
            timestamp: data.timestamp ? data.timestamp.toDate() : new Date() // Provide a fallback
          }
        };
      }))
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
