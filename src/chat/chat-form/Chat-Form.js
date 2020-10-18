import React from 'react';
import './Chat-Form.css';
import { Icon, IconButton } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles';
const RoundIconButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 30,
        color: "#fff",
        margin: "10px",
        padding: '12px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ff9800',
        borderColor: '#ff9800'
    },
})(IconButton);
const UtilityIconButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 30,
        color: "#fff",
        margin: "10px",
        padding: '12px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#3f4269',
        borderColor: '#3f4269'
    },
})(IconButton);

const ChatForm = (props) => {
    return (
        <div id="chat-form">
            <Container>
                <Row>
                    <Col>
                        <div id="chat-utilities">
                        <UtilityIconButton>
                            <Icon >emoji_emotions</Icon>
                        </UtilityIconButton>
                        <input id="messageInputbox" type="text" placeholder="Type a message" />
                        <UtilityIconButton>
                            <Icon  >attach_file</Icon>
                        </UtilityIconButton>
                        <RoundIconButton
                        onClick={()=>{
                            let text= document.getElementById("messageInputbox").value
                            let isMine = Math.random() >= 0.5;
                            const message={
                                imageUrl:null,
                                imageAlt:null,
                                messageText:text,
                                sentAt:"just now",
                                isMyMessage:isMine
                            }
                            props.sendMsg(message)
                            document.getElementById("messageInputbox").value=""
                        }}
                        >
                            <Icon>send</Icon>
                        </RoundIconButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ChatForm;