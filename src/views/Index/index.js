import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { APP } from '../../config/app'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import InputIcon from '@material-ui/icons/Input'
import lightBlue from '@material-ui/core/colors/lightBlue'
import './index.css'

const styles = theme => ({
  cssRoot: {
    color: '#f1f1f1',
    backgroundColor: lightBlue[700],
    '&:hover': {
      backgroundColor: lightBlue[900]
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    marginLeft: '12px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 14
  }
})
class Index extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className='app_pager_1_container'>
        <img src={APP.APP_LOGO} className='app_pager_1_applogo' alt='logo' />
        <h1 className='app_pager_1_appname'>{APP.APP_NAME}</h1>
        <div className='app_pager_1_summary'>
          <p className='app_pager_1_text'>{APP.APP_SUMMART}</p>
        </div>
        <div className='app_pager_1_login'>
          <Link to='/music'>
            <Button
              variant='contained'
              color='primary'
              size='medium'
              className={(classes.button, classes.cssRoot)}
            >
              {APP.APP_LOGIN_TEXT}
              <InputIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
