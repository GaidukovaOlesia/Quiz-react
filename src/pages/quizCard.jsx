import { Component } from 'react';
import {
    Card,
    Typography,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from "@mui/material";
import CreateModal from "../components/dialogs/CreateModal";

export default class QuizCard extends Component {
    state = {
        open: false,
    }

    constructor(props) {
        super(props);
        this.handleToggleOpenModal = this.handleToggleOpenModal.bind(this);
    }

    render() {
        const { quizName, quizImage, quizDescription } = this.props;
        return (
            <>
                <Card sx={{
                width: 330,
                height: '400px',
                backgroundColor: '#bce7de',
                margin: '150px 50px 50px',
                borderRadius: '10px',
            }}>
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
                <Button size="small">Start quiz</Button>
                <Button size="small" onClick={this.handleToggleOpenModal}>Show More</Button>
            </CardActions>
            </Card>
            <CreateModal
                open={this.state.open}
                handleClose={this.handleToggleOpenModal}
                quizName={quizName}
                quizImage={quizImage}
                quizDescription={quizDescription}
            />
        </>
        )
    }

    handleToggleOpenModal() {
        this.setState({open: !this.state.open});
    }
}
