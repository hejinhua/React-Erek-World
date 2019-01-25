import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
}

class BasicLayout extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit'>
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

BasicLayout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BasicLayout)
