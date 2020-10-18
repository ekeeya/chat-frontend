import React from 'react';
import { Icon,IconButton, Grid } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import './Chat-Title.css';

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
        backgroundColor: '#2d2e57',
        borderColor: '#2d2e57'
    },
})(IconButton);
const ChatTitle=(props) =>{
    return (
        <div id="chat-title">
            <span>{props.selectedConversation.title}</span>
            <Grid item xs>
                <UtilityIconButton>
                <Icon style={{color:"#757899"}}>archive</Icon>
                </UtilityIconButton>
                <UtilityIconButton>
                <Icon style={{color:"#757899"}}>delete_forever</Icon>
                </UtilityIconButton>
                <UtilityIconButton>
                <Icon style={{color:"#757899"}}>more_vert</Icon>
                </UtilityIconButton>
                
            </Grid>
        </div>
    );
}

export default ChatTitle;