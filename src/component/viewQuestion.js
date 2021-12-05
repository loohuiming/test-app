import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AnswerCard from "./answerCard.js"

export default function ViewQuestions(props) {
    const { value, index, appendToList, handleTabs } = props;
    const questionsTopic1 = [
        {
            topic: 1,
            badgeColor: "primary",
            topicTitle: "Topic 1",
            question: "WHAT DO YOU ADMIRE ABOUT YOURSELF",
        },
        {
            topic: 1,
            badgeColor: "primary",
            topicTitle: "Topic 1",
            question: "WHEN WAS THE LAST TIME YOU FELT TRULY UNDERSTOOD BY SOMEBODY? WHO WAS IT? WHAT DID THEY UNDERSTAND?",
        }

    ];


    const questionsTopic2 = [
        {
            topic: 2,
            badgeColor: "success",
            topicTitle: "Topic 2",
            question: "HOW ARE YOU, REALLY?",
        }];

    const questionsTopic3 = [
        {
            topic: 3,
            badgeColor: "secondary",
            topicTitle: "Topic 3",
            question: "WHAT INSECURITY OF YOURS HOLDS YOU BACK THE MOST?",
        },
        {
            topic: 3,
            badgeColor: "secondary",
            topicTitle: "Topic 3",
            question: "WHAT'S THE MOST PAIN YOU'VE EVER BEEN IN THAT WASN'T PHYSICAL?",
        },
        {
            topic: 3,
            badgeColor: "secondary",
            topicTitle: "Topic 3",
            question: "WHAT ABOUT YOURSELF IS HARDEST TO ADMIT?",
        }
    ];

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));


    return (
        <>
            <div>
                {
                    value === index && (
                        <Container fixed>
                            <Root>
                                <Divider><Chip label="TOPIC 1" color="primary" /></Divider>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {Array.from(questionsTopic1).map((eachQn, index) => (
                                        <Grid item xs={2} sm={4} md={4} key={index}>
                                            <AnswerCard eachCard={eachQn} appendToList={appendToList} handleTabs={handleTabs}></AnswerCard>
                                        </Grid>
                                    ))}
                                </Grid>

                                <Divider><Chip label="TOPIC 2" color="success" /></Divider>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {Array.from(questionsTopic2).map((eachQn, index) => (
                                        <Grid item xs={2} sm={4} md={4} key={index}>
                                            <AnswerCard eachCard={eachQn} appendToList={appendToList} handleTabs={handleTabs}></AnswerCard>
                                        </Grid>
                                    ))}
                                </Grid>

                                <Divider><Chip label="TOPIC 3" color="secondary" /></Divider>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {Array.from(questionsTopic3).map((eachQn, index) => (
                                        <Grid item xs={2} sm={4} md={4} key={index}>
                                            <AnswerCard eachCard={eachQn} appendToList={appendToList} handleTabs={handleTabs}></AnswerCard>
                                        </Grid>
                                    ))}
                                </Grid>

                            </Root>
                        </Container>
                    )
                }
            </div>
        </>
    );
}