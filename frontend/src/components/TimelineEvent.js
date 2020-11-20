import './TimelineEvent.css'
import React, { Fragment } from 'react'
import clsx from 'clsx'
import isReact from 'is-react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  'timeline-event-container': {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 92.5,
    fontSize: 40,
    color: '#fff'
  },
  iconSimple: {
    left: 16
  },
  iconSmall: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontSize: 16,
    color: '#e0e0e0'
  },
  circleContainer: {
    marginRight: 31
  },
  circleContainerSmall: {
    display: 'flex',
    flex: 'auto',
    alignItems: 'center',
    marginRight: 11,
  },
  action: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  tooltip: {
    textAlign: 'center'
  },
  textContainer: {
    marginTop: -40,
    textAlign: 'center'
  },
  actionContainer: {
    margin: '16px auto',
  },
  buttonContainer: {
    margin: '16px auto',
    textAlign: 'center'
  },
  button: {
    color: '#fff'
  }
}

const TimelineEvent = ({
  classes,
  first,
  color = '#e0e0e0',
  icon: Icon,
  title,
  subtitle,
  date,
  action,
  titleProps,
  subtitleProps,
  width,
  height,
  numEvents,
  initial
}) => {
  let outerWidth = window.innerWidth;
  width = ((outerWidth * 0.75) / numEvents) + 0
  height = 70
  return (
    <Grid style={{width: width}}>
      <div className="timeline-event-date">
        <a>
          {date}
        </a>
      </div>
      <Fragment>
        <svg width="100%" height={height}>
          <g>
            <rect width={width+15} height="20" fill={color} x="10" y={(height/2)-20} />
            <circle
              cx={20}
              cy={25}
              r={20}
              fill={initial ? '#A7B9CE' : color}
              strokeWidth={0.15}
            />
            <circle
              cx={20}
              cy={25}
              r={5}
              fill='#000525'
              strokeWidth={0.15}
            />
          </g>
        </svg>
        <Grid className="timeline-text-container">
          <div className="timeline-event-title">
            <a>
              {title}
            </a>
          </div>
          <div className="timeline-event-subtitle">
            <a>
              {subtitle}
            </a>
          </div>
        </Grid>
      </Fragment>
    </Grid>
  )
}

export default withStyles(styles)(TimelineEvent)