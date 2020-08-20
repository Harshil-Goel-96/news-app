import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        maxWidth: "400px",
        paddingBottom: "3px",
        height: "450px"
    },
    media: {
        height: "160px"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

    }
});

export default useStyles;