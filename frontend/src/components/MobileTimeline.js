import React from "react";
import "./MobileTimeline.css";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function MobileTimeline() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      grey: {
        light: "#e9b98b",
        main: "#e4a86f",
        dark: "#9f754d",
        contrastText: "#000",
      },
    },
  });

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className="date-text" color="#ffffff">
            Dec. 14th
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="grey"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="title-text" component="h1">
            Registration Opens
          </Typography>
          <Typography className="content-text">
            Registration for Pioneers 2071 opens
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className="date-text" color="#ffffff">
            Jan. 1st
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="grey"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="title-text" component="h1">
            Registration Closes
          </Typography>
          <Typography className="content-text">
            Registration for Pioneers 2071 closes
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className="date-text" color="#ffffff">
            Jan. 4th
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="grey"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="title-text" component="h1">
            Registration Closes
          </Typography>
          <Typography className="content-text">
            Registration for Pioneers 2071 closes
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className="date-text" color="#ffffff">
            Jan. 18th
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="grey"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="title-text" component="h1">
            Proposal Submission
          </Typography>
          <Typography className="content-text">
            Proposal submitted by participants
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className="date-text" color="#ffffff">
            Jan. 22nd
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="grey"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="title-text" component="h1">
            Announcement
          </Typography>
          <Typography className="content-text">
            Result of Round 1 Announced
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
