import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    cardContainer: {
      display: 'flex',

      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
      transition: 'box-shadow 0.2s',

      '&:hover': {
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
    },
    cardContent: {
      flexGrow: 1,
      padding: '18px',
    },
  }),
);

export default useStyles;