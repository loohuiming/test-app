import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'

export default function AnswerCard(props) {
    const { eachCard, appendToList, handleTabs } = props;

    const cardValues = {
        topic: eachCard.topic,
        topicTitle: eachCard.topicTitle,
        badgeColor: eachCard.badgeColor,
        question: eachCard.question,
        answer: ""
    };

    const handleOpen = () => (Swal.fire(
        {
            icon: 'question',
            html: eachCard.question,
            input: 'text',
            showCloseButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Submit'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Thank You!',
                    icon: 'success'
                });
                handleTabs(onclick, 0);
                cardValues.answer = result.value;
                appendToList(cardValues);
            }
        })

    );

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h7" component="div">
                    <b>{eachCard.question}</b>
                </Typography>
                <br />
                <Button variant="outlined" color={eachCard.badgeColor} size="small" onClick={() => handleOpen(eachCard)} >ANSWER ME</Button>
            </CardContent>
        </Card>
    )
}