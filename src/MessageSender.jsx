import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import { db, serverTimestamp } from './Firebase'; // Adjust the import path
import { collection, addDoc } from 'firebase/firestore';

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, 'posts'), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL, // Use user.photoURL for the profile picture
            image: imageUrl,
        });

        setInput('');
        setImageUrl('');
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='Image URL (Optional)'
                    />
                    <button onClick={handleSubmit} type='submit'>Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__Option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__Option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photos/Video</h3>
                </div>
                <div className="messageSender__Option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
