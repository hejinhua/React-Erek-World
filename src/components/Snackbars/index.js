import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const styles = theme => ({
  success: {
    backgroundColor: green[500]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
})

function CustomSnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props
  const Icon = variantIcon[variant]

  return (
    <SnackbarContent
      className={classnames(classes[variant], className)}
      message={
        <span id='client-snhackbar' className={classes.message}>
          <Icon className={classnames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key='close' color='inherit' onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  )
}

CustomSnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
}

const CustomSnackbarContentWrapper = withStyles(styles)(CustomSnackbarContent)

class CustomSnackbar extends Component {
  state = {
    open: true
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { duration, type, message } = this.props
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={this.state.open}
          autoHideDuration={duration}
          onClose={this.handleClose}
        >
          <CustomSnackbarContentWrapper
            onClose={this.handleClose}
            variant={type}
            message={message}
          />
        </Snackbar>
      </div>
    )
  }
}

CustomSnackbar.propTypes = {
  duration: PropTypes.number,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info'])
}

CustomSnackbar.defaultProps = {
  duration: 2000
}

export default CustomSnackbar
