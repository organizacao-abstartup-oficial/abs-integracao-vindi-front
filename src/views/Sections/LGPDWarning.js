import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(20),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Utilizamos cookies para garantir a melhor experiência em nosso site. Porém fique tranquilo que seus dados permanecem em segurança absoluta.
        </Alert>
      </Snackbar>
    </div>
  );
}