import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        maxWidth: "400px",
        height: "450px",
    },
    media: {
        height: "160px"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

    },
    actionarea: {
        display: "flex",
        justifyContent: "space-between",
    }
});

export default useStyles;