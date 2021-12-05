import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewAnswers from "./component/viewAnswer.js"
import ViewQuestions from "./component/viewQuestion.js"

function App() {
  const initialContent = [
    {
      topic: 3,
      topicTitle: "Topic 3",
      badgeColor: "secondary",
      question: "WHAT INSECURITY OF YOURS HOLDS YOU BACK THE MOST?",
      answer: "this is what a short question will look like"
    },
    {
      topic: 1,
      topicTitle: "Topic 1",
      badgeColor: "primary",
      question: "WHEN WAS THE LAST TIME YOU FELT TRULY UNDERSTOOD BY SOMEBODY? WHO WAS IT? WHAT DID THEY UNDERSTAND?",
      answer: "this is what a super long question will look like"
    },
    {
      topic: 1,
      topicTitle: "Topic 1",
      badgeColor: "primary",
      question: "WHAT DO YOU ADMIRE ABOUT YOURSELF",
      answer: "this is what a short question will look like"
    },
    {
      topic: 2,
      topicTitle: "Topic 2",
      badgeColor: "success",
      question: "HOW ARE YOU, REALLY?",
      answer: "this is what a short question will look like"
    }
  ];

  const [cardContent, setCardContent] = React.useState(initialContent);

  const [value, setValue] = React.useState(0);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const appendToList = (obj) => {
    const newArray = [...cardContent, obj];
    setCardContent(newArray);
  };

  return (
    <div className="App">
      <React.Fragment>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Tabs value={value} onChange={handleTabs} centered>
                <Tab label="Read all answers" />
                <Tab label="Pick a question" />
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>
        <br />
        <ViewAnswers value={value} index={0} cardContent={cardContent}></ViewAnswers>
        <ViewQuestions value={value} index={1} appendToList={appendToList} handleTabs={handleTabs}></ViewQuestions>
      </React.Fragment>
    </div>
  );
}

export default App;
