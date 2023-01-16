import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import {Paper, Typography} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    timeline: {
        transform: "rotate(90deg)",
        display: "inline-block"
    },
    timelineContentContainer: {
        textAlign: "left",
        display: "inline-block"
    },
    timelineContent: {
        display: "inline-block",
        transform: "rotate(-90deg)",
        textAlign: "center",
        minWidth: 50
    },
    timelineIcon: {
        transform: "rotate(-90deg)",
        display: "inline-block"
    }
});
export function CustomTimeLine(){
    const classes = useStyles();
    return (
        <Timeline className={classes.timeline} align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        color="primary"
                        className={classes.timelineIcon}
                    />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Paper className={classes.timelineContent}>
                        <Typography>Eat</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        color="primary"
                        className={classes.timelineIcon}
                    />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Paper className={classes.timelineContent}>
                        <Typography>Code</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot  color="primary" className={classes.timelineIcon} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Paper className={classes.timelineContent}>
                        <Typography>Sleep</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot  color="primary" className={classes.timelineIcon} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Paper className={classes.timelineContent}>
                        <Typography>Repeat</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot  color="primary" className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Paper className={classes.timelineContent}>
                        <Typography>Sleep</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}