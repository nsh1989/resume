import {FormControl, FormHelperText, Grid, Typography} from "@mui/material";

function ListTypography({label, value}){
    const isMulti = (value != null && value.length > 1) ? true : false;
    console.log(value)
    return (
        <>
            {
                label === 'desc' ?
                    <div>
                        <Typography id="outlined-weight-helper-text"
                                    style={{'font-size': '5px', 'margin': '2px'}}
                        >■ {value}</Typography>
                    </div>
                    : null
            }
            {
                label === 'devs' ?
                    <div>
                        <Typography id="outlined-weight-helper-text"
                                        style={{'font-size': '5px', 'margin': '2px'}}
                        >
                        기술 : {value}</Typography>
                    </div>
                 : null
            }
            {
                label === 'detail' && value.length > 0?
                    value.map( item =>
                        <Typography variant="caption" style={{"word-break": "normal", 'font-size': '5px', 'margin': '2px'}}>
                            - {item}
                        </Typography>)
                     : null
            }
        </>
    )
}

export default function CustomGridNestTypography({label, value, xs, isMulti = false}) {
    return (

        <Grid item xs={xs}>
            <FormControl variant="outlined" style={{width: "100%"}}>
                <FormHelperText id="outlined-weight-helper-text">
                    {label}
                </FormHelperText>
                {
                    isMulti ?
                        value.map( item =>
                            Object.keys(item).map( (key) =>
                                <ListTypography label={key} value={item[key]}/>
                            )) : null
                }
            </FormControl>
        </Grid>
    )
}