import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Skeleton from "@material-ui/lab/Skeleton";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 250
    },
    media: {
        height: 160,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card
            className={
                classes.root +
                " h-full hover:shadow-3xl cursor-pointer focus:border-yellow-800"
            }
        >
            { !props.productsIsLoaded ? (
                <>
                    <Skeleton
                        animation="wave"
                        variant="rect"
                        height={100}
                    />
                    <Skeleton
                        animation="wave"
                        variant="rect"
                        className={classes.media}
                    />
                </>
            ) : (
                <CardMedia
                    className={classes.media + " h-80"}
                    image={props.data.photo}
                    title={props.data.title}
                />
            )}

            <CardHeader
                className="p-1"
                subheader={
                    !props.productsIsLoaded ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        props.data.title
                        
                    )
                }
            />
            { !props.productsIsLoaded ? (
                <React.Fragment>
                    <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
            ) : (
                <>
                    <CardContent className="p-1">
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {props.data.price}
                        </Typography>
                    </CardContent>
                    <div  className="text-yellow-300">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarOutlineIcon />
                    </div>
                    <CardActions disableSpacing className="p-2">
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon className="text-red-500"/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon className="text-blue-500" />
                        </IconButton>
                        <IconButton aria-label="like">
                        <ThumbUpAltIcon />
                        </IconButton>
                        
                    </CardActions>
                </>
            )}
        </Card>
    );
}