import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        maxWidth: "400px",
        height: "445px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    activecard: {
        borderBottom: "5px solid blue"
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