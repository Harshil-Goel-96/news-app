import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    homeCard: {
        flexBasis: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "450px",
        color: "#E0F2F1",
        padding: "20px",
        textAlign: "center",

    },

});

export default useStyles;