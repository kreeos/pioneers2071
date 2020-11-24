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
  circleContainer: {
    marginRight: 31
  },
  circleContainerSmall: {
    display: 'flex',
    flex: 'auto',
    alignItems: 'center',
    marginRight: 11,
  },
  tooltip: {
    textAlign: 'center'
  },
  textContainer: {
    marginTop: -40,
    textAlign: 'center'
  },
}

const TimelineEvent = ({
  classes,
  color = '#e0e0e0',
  title,
  subtitle,
  date,
  width,
  height,
  numEvents,
  initial,
  init,
  end,
  flag_prev,
  flag_cur
}) => {
  let outerWidth = window.innerWidth;
  width = ((outerWidth * 0.75) / numEvents) + 0
  height = 70
  let color_circle = flag_prev ? '#A7B9CE' : '#C4C4C4'
  let color_bar = flag_cur ? '#A7B9CE' : '#C4C4C4'
  return (
    <div>
  {
    init ? 
      <Grid style={{width: width}}>
        <div className="timeline-event-date-init">
          <a>
            no date
          </a>
        </div>
        <Fragment>
          <svg width="100%" height={height}>
            <g>
              <rect width={width+15} height="20" fill="#A7B9CE" x="10" y={(height/2)-20} />
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
    :
    end ?
      <Grid style={{width: width}}>
        <div className="timeline-event-date-init">
          <a>
            no date          
          </a>
        </div>
        <Fragment>
          <svg width="100%" height={height}>
            <g>
              <polygon 
                fill={color_bar}
                points="10,10 10,40 35,25" 
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
    :
      <Grid style={{width: width}}>
        <div className="timeline-event-date">
          <a>
            {date}
          </a>
        </div>
        <Fragment>
          <svg width="100%" height={height}>
            <g>
              <rect width={width+15} height="20" fill={color_bar} x="10" y={(height/2)-20} />
              <circle
                cx={20}
                cy={25}
                r={20}
                fill={color_circle}
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
    }
    </div>
  )
}

export default withStyles(styles)(TimelineEvent)