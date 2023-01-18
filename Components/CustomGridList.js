import {FormControl, FormHelperText, Grid, List, ListItem, Typography} from "@mui/material";

export default function CustomGridList({label, value, xs}){
    return (
        <Grid item xs={xs}>
            <FormControl variant="outlined" style={{width: "100%"}}>
                <FormHelperText id="outlined-weight-helper-text">
                    {label}
                </FormHelperText>
                <List>
                {
                    value.map((item, index) =>
                        <Typography key={{index}}>{index+1}. {item}</Typography>
                    )
                }
                </List>
            </FormControl>
        </Grid>
    )
}