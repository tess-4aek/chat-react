import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { Container, Grid, TextField, Button, Avatar } from '@material-ui/core'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './Loader';
import firebase from 'firebase';

const Chat = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                style={{ height: window.innerHeight - 48, paddingTop: 20 }}>
                <div style={{ width: '300px', height: '70vh',  overflowX: 'auto', backgroundImage: 'url(img/chatBg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    {messages.map(message =>
                        <div style={{
                            width: 'fit-content',
                            margin: 10,
                            marginLeft: user.uid === message.uid ? 'auto' : '10px'
                        }}>
                            <Grid container alignItems={'center'}>
                                <Avatar style={{ marginRight: '5px' }} src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div style={{
                                padding: 5,
                                width: 'fit-content',
                                borderRadius: '10px',
                                background: user.uid === message.uid ? '#81c784' : '#e57373',
                                marginLeft: user.uid === message.uid ? 'auto' : '0px',
                                marginTop: '10px'
                            }}>
                                {message.text}
                            </div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{ width: '300px', marginTop: '10px' }}
                >
                    <TextField
                    
                        fullWidth
                        maxRows={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage} style={{padding: '5px 25px', marginTop: '10px', border: 'none', borderRadius: '20px' ,color: 'black', background: '#a6d4fa'}}>Send</Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Chat;