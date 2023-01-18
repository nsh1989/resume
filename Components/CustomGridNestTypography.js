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
                    value.map((item, index) =>
                        <div key={index}>
                            <Typography key={index} variant="caption"
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
            <FormControl variant="outlined" style={{width: "100%", margin:"15px"}}>
                <FormHelperText id="outlined-weight-helper-text">
                    {label}
                </FormHelperText>
                <Grid container spacing={1}>
                        {
                            isMulti ?
                                value.map((item, index) =>
                                    <Grid key={index} item xs={6}>
                                        {Object.keys(item).map((key, index) =>
                                        <ListTypography key={index} label={key} value={item[key]}/>
                                    )}</Grid>) : null
                        }
                </Grid>
            </FormControl>
        </Grid>
    )
}