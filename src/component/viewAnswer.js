import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';

export default function ViewAnswers(props) {
  const { value, index, cardContent } = props;

  return (
    <>
      <div>
        {
          value === index && (
            <Container fixed>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(cardContent).map((eachCard, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Badge badgeContent={eachCard.topicTitle} color={eachCard.badgeColor}>
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                          <Typography variant="h7" component="div">
                            <b>{eachCard.question}</b>
                          </Typography>
                          <br />
                          <Typography>
                            {eachCard.answer}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Badge>
                  </Grid>
                ))}
              </Grid>
            </Container>)
        }
      </div>
    </>
  );
}