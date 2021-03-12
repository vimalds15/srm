import React, { useEffect, useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import '../css/chat.css'
import google from '../images/chat/google.png'
import load from '../images/load.png'

import { LinkContainer } from 'react-router-bootstrap'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // your config should go here
  
    apiKey: "AIzaSyAGyLjWL9QYPjHDuFhbSjxR0kF_TWBJFcQ",
    authDomain: "srmist-6ee9a.firebaseapp.com",
    projectId: "srmist-6ee9a",
    storageBucket: "srmist-6ee9a.appspot.com",
    messagingSenderId: "84795150643",
    appId: "1:84795150643:web:13fc971fd3ead2a7ed2e46"
  
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function ChatScreen() {
  const [user] = useAuthState(auth);

  return (
    <div className="App border-bg h-screen">
      <SignOut />
      <section className="flex justify-center items-center h-screen">
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
    
  //   const signInAnonmously = () => {
  //       const provider = new firebase.auth.signInAnonmously();
  //       auth.signInAnonymously(provider);
  // }
    
    return (
        <div className='lgpage-wrapper'>
            <div className='imag-cont'>
                <img className='chat-logo' alt='logo' src={load} />
            </div>
            <div className='title'>
                <p>Connect With Srmites</p>
            </div>
      <div className="sign-in">
          
      <div className="signin-btn" onClick={signInWithGoogle}>
        <img className='gle-btn'  src={google} alt='Google Icon' />
            <span className='signin-p'>Sign In With Google</span>
      </div>
        </div>

      <LinkContainer to='/' >
      <div className="sign-in">    
      <div className="signin-btn" >
        <img className='gle-btn'  src={load} alt='Google Icon' />
            <span className='signin-p'>Back to Website</span>
      </div>
          </div>
          </LinkContainer>
        </div>
        
  )
}

function SignOut() {
  return auth.currentUser && (
      <div className="chat-head">
          <img className src={load} alt="srm logo" />
          <h1>SRM CONNECT</h1>
          <button className="sgnout-btn" onClick={() => auth.signOut()}>Leave Chat</button>
      
    </div>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { displayName, uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      user: displayName,
      body: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
      photoURL: photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

    return (
      <div>
      <div className="msg-container">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>

            <form onSubmit={sendMessage} className="input-cont">
                <div className='inpbox'>
                <input className="msg-input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
                <button className="snd-btn" type="submit" disabled={!formValue}>Send</button>
            </div>
        </form>
    </div>
  )
}

function ChatMessage(props) {
  //createdAt inside{}
  const { user, body, photoURL} = props.message;

    return (
        <div className=''>
        <div className="msg-wrapper">
            <div className='msg-img'>
                <img className src={photoURL || 'https://th.bing.com/th/id/OIP.GjkOZqurknuUYdxNQD11RgAAAA?pid=ImgDet&rs=1'} alt="{user}'s pfp" />
            </div>
            <div className='msg-cont'>
          <h6 className="uname">{user}</h6>
          <p className='utext'>{body}</p>
            </div>
            </div>
            </div>
      
    )
  

}

export default ChatScreen;
  