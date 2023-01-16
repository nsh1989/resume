import {FormControl, FormHelperText, Grid, TextField, Typography} from "@mui/material";

export default function CustomGridTypography({label, value, xs, isMulti = false}) {
    return (
        <Grid item xs={xs}>
            <FormControl variant="outlined" style={{width: "100%"}}>
                <FormHelperText id="outlined-weight-helper-text">
                    {label}
                </FormHelperText>
                {
                    isMulti ?
                    value.map( item =>
                        <Typography variant="caption" style={{"word-break": "normal"}}>
                        - {item}
                    </Typography>) :
                    <Typography variant="caption" style={{"word-break": "normal"}}>
                        {value}
                    </Typography>
                }
            </FormControl>
        </Grid>
    )
}