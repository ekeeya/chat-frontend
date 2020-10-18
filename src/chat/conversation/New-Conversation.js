import React from 'react';
import { IconButton } from '@material-ui/core'
import Icon from "@material-ui/core/Icon"
import { withStyles } from '@material-ui/core/styles';
import './New-Conversation.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const RoundIconButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 30,
        color: "#fff",
        padding: '12px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ff9800',
        borderColor: '#ff9800',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#2d2e59',
            borderColor: '#2d2e57',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#2d2e57',
            borderColor: '#2d2e57',
        }
    },
})(IconButton);

const NewConversation = (props) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Open New conversation
        </Tooltip>
    );

    return (
        <div id="new-message-container">
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 150, hide: 100 }}
                overlay={renderTooltip}
            >
                <RoundIconButton aria-label="Open Conversation">
                    <Icon>add</Icon>
                </RoundIconButton>
            </OverlayTrigger>

        </div>
    );
}

export default NewConversation;