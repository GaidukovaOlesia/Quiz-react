import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Typography,
} from '@mui/material';

export default function CreateModal({open, handleClose, quizName, quizImage, quizDescription}) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Card sx={{
                            width: 330,
                            height: '100%',
                            backgroundColor: '#bce7de',
                            borderRadius: '10px',
                        }}
                        >
                            <CardMedia sx={{
                                width: '100%',
                                margin: 'auto',
                                objectFit: 'none',
                            }}
                           component="img"
                           alt="quiz"
                           height="180"
                           image={quizImage}
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {quizName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {quizDescription}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
