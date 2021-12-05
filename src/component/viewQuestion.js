import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AnswerForm from "./answerForm.js"

export default function ViewQuestions(props) {
    const { value, index, cardContent, appendToList } = props;
    const questionsTopic1 =
    {
        topic: 1,
        index: 1,
        badgeColor: "primary",
        topicTitle: "Topic 1",
        question: "WHEN WAS THE LAST TIME YOU FELT TRULY UNDERSTOOD BY SOMEBODY? WHO WAS IT? WHAT DID THEY UNDERSTAND?1",
    };

    const questionsTopic2 =
    {
        topic: 2,
        index: 4,
        badgeColor: "success",
        topicTitle: "Topic 2",
        question: "WHEN WAS THE LAST TIME YOU FELT TRULY UNDERSTOOD BY SOMEBODY? WHO WAS IT? WHAT DID THEY UNDERSTAND?2",
    };

    const questionsTopic3 =
    {
        topic: 2,
        index: 6,
        topicTitle: "Topic 3",
        question: "WHAT INSECURITY OF YOURS HOLDS YOU BACK THE MOST?",
    };

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <>
            <div>
                {
                    value === index && (
                        <Container fixed>
                            <Root>
                                <Divider><Chip label="TOPIC 1" color="primary" /></Divider>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    <b>{questionsTopic1.question}</b>
                                                </Typography>
                                                <br />
                                                <Button id="1" variant="outlined" color="primary" size="small" onClick={handleOpen} >ANSWER ME</Button>
                                                <AnswerForm open={open} selectedCard={questionsTopic1} handleClose={handleClose} appendToList={appendToList}></AnswerForm>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Divider><Chip label="TOPIC 2" color="success" /></Divider>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    <b>{questionsTopic2.question}</b>
                                                </Typography>
                                                <br />
                                                <Button id="2" variant="outlined" color="success" size="small" onClick={handleOpen} >ANSWER ME</Button>
                                                <AnswerForm open={open} selectedCard={questionsTopic2} handleClose={handleClose} appendToList={appendToList}></AnswerForm>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Divider><Chip label="TOPIC 3" color="secondary" /></Divider>

                            </Root>
                        </Container>
                    )
                }
            </div>
        </>
    );
}