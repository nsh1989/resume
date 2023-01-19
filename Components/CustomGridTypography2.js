import {FormControl, FormHelperText, Grid, Typography} from "@mui/material";

export default function CustomGridTypography2({label, value, xs, isMulti = false}) {
    return (
        <Grid item xs={xs}>
            <FormControl variant="outlined" style={{width: "100%"}}>
                <FormHelperText className="custom-label" id="outlined-weight-helper-text">
                    {label}
                </FormHelperText>
                {
                    isMulti ?
                        value.map( (item) =>
                            <Typography variant="caption" className={'list-items'}>
                                - {item.name} &nbsp; {item.date}
                            </Typography>) :
                        <Typography variant="caption" style={{"word-break": "normal"}}>
                            {value}
                        </Typography>
                }
            </FormControl>
        </Grid>
    )
}