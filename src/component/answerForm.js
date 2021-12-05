import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

export default function AnswerForm(props) {

    const { open, selectedCard, handleClose, appendToList } = props;

    const initialValues = {
        topic: selectedCard.topic,
        topicTitle: selectedCard.topicTitle,
        badgeColor: selectedCard.badgeColor,
        question: selectedCard.question,
        answer: ""
    }
    const [values, setValues] = React.useState(initialValues);

    const handleInputChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <>
            <div>
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>

                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="h7" component="div">
                            <b>{selectedCard.question}</b>
                        </Typography>
                        <Stack spacing={2} direction="row">
                            <TextField
                                size="small"
                                name="answer"
                                value={values.answer}
                                onChange={handleInputChange}
                            />
                            <Button size="small" variant="outlined" onClick={() => appendToList(values)}>SUBMIT</Button>
                        </Stack>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}