import {FormControl, FormHelperText, Grid, Typography} from "@mui/material";

function ListTypography({label, value}) {
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
                label === 'detail' && value.length > 0 ?
                    value.map(item =>
                        <div>
                            <Typography variant="caption"
                                        style={{"word-break": "normal", 'font-size': '5px', 'margin': '2px'}}>
                                - {item}
                            </Typography>
                        </div>)
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
                <Grid container spacing={5}>
                        {
                            isMulti ?
                                value.map(item =>
                                    <Grid item xs={6}>
                                        {Object.keys(item).map((key) =>
                                        <ListTypography label={key} value={item[key]}/>
                                    )}</Grid>) : null
                        }
                </Grid>
            </FormControl>
        </Grid>
    )
}