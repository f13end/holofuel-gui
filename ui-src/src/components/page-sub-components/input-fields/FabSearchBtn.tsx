import * as React from 'react';
// mui custom styling :
import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import { StyleRulesCallback } from '@material-ui/core/';
import Fab from '@material-ui/core/Fab';
import CheckBox from '@material-ui/icons/CheckBox'
// local imports
// import styles from '../../styles/page-styles/DefaultPageMuiStyles'

const styles : StyleRulesCallback  = (theme: Theme) => ({
  fab: {
    margin: theme.spacing.unit,
    color: "#799ab6",
    background: "#0e3658",
    "&:hover": {
      color: '#003087',
    }
  }
});

function FabSearchBtn(props: any) {
  const { classes, handleClick } = props;
  return (
    <div>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={handleClick}
      >
        <CheckBox />
      </Fab>
    </div>
  );
}

export default withStyles(styles)(FabSearchBtn);
        // {/* className={classnames(classes.button, classes.overlayTop, classes.smallButton)} */}
