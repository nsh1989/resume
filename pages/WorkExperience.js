import {Card, FormControl, FormHelperText, Grid, Input, TextField} from "@mui/material";
import styles from '../styles/Home.module.css'
import {useFormik} from "formik";
import {data} from "../Data/data";
import WorkExperienceForm from "../Components/WorkExperienceForm";
import React from "react";

export default function WorkExperience() {
    const formData = data;
    const formik = useFormik({
        initialValues: formData,
        enableReinitialize: true
    })
    return (
        <>
            <h2 className={styles.worktitle}>
                Work Experience
            </h2>
            <Grid container
                  spacing={2}
                  justifyContent={'center'}
            >
            {
                formik.values.map(
                    (item) => <WorkExperienceForm values={item}/>
                )
            }

                {/*<Grid item*/}
                {/*      xs={12}*/}
                {/*>*/}
                {/*    <Grid container={'true'}*/}
                {/*          spacing={2}*/}
                {/*          justifyContent={'center'}*/}
                {/*    >*/}
                {/*        <Grid item xs={10}>*/}
                {/*            <div style={{*/}
                {/*                display: "flex",*/}
                {/*                justifyContent: 'center'*/}
                {/*            }}>*/}
                {/*                <Card className={styles.card2}>*/}
                {/*                    <Grid*/}
                {/*                        container*/}
                {/*                        spacing={2}>*/}
                {/*                        <Grid item xs={4}*/}
                {/*                              justifyContent={"flex-end"}*/}
                {/*                        >*/}
                {/*                            <h2 style={{*/}
                {/*                                margin: "10px",*/}
                {/*                                align: "center"*/}
                {/*                            }}>*/}
                {/*                                Amass*/}
                {/*                                <hr/>*/}
                {/*                            </h2>*/}
                {/*                            <TextField id="date"*/}
                {/*                                       variant="standard"*/}
                {/*                                       value={"2021.12 ~ 현재"}*/}
                {/*                                       multiline*/}
                {/*                                       disabled={true}*/}
                {/*                                       style={{*/}
                {/*                                           margin: "10px",*/}
                {/*                                           "font-size": "xx-small"*/}
                {/*                                       }}*/}
                {/*                            />*/}

                {/*                            <TextField id="test"*/}
                {/*                                       variant="standard"*/}
                {/*                                       value={"Senior Engineer"}*/}
                {/*                                       multiline*/}
                {/*                                       disabled={true}*/}
                {/*                                       style={{*/}
                {/*                                           margin: "10px",*/}
                {/*                                           fontSize: "8px"*/}
                {/*                                       }}*/}
                {/*                            />*/}

                {/*                            <TextField id="test"*/}
                {/*                                       variant="standard"*/}
                {/*                                       value={"주요 업무"}*/}
                {/*                                       multiline*/}
                {/*                                       disabled={true}*/}
                {/*                                       style={{*/}
                {/*                                           margin: "10px",*/}
                {/*                                           fontSize: "8px"*/}
                {/*                                       }}*/}
                {/*                            />*/}
                {/*                        </Grid>*/}
                {/*                        <Grid item xs={8}>*/}
                {/*                            <div>*/}
                {/*                                <Grid container*/}
                {/*                                      spacing={3}*/}
                {/*                                >*/}
                {/*                                    <Grid item xs={12}>*/}
                {/*                                        <h2 style={{*/}
                {/*                                            marginTop: "10px",*/}
                {/*                                        }}>*/}
                {/*                                            프로젝트 명*/}
                {/*                                            <hr/>*/}
                {/*                                        </h2>*/}
                {/*                                    </Grid>*/}
                {/*                                    <Grid item*/}
                {/*                                          xs={12}>*/}
                {/*                                        <FormControl variant="outlined" style={{width: "100%"}}>*/}
                {/*                                            <FormHelperText id="outlined-weight-helper-text">*/}
                {/*                                                개요*/}
                {/*                                            </FormHelperText>*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                multiline*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                        </FormControl>*/}
                {/*                                    </Grid>*/}
                {/*                                    <Grid item*/}
                {/*                                          xs={12}>*/}
                {/*                                        <FormControl variant="outlined" style={{width: "100%"}}>*/}
                {/*                                            <FormHelperText id="outlined-weight-helper-text">*/}
                {/*                                                성과*/}
                {/*                                            </FormHelperText>*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                multiline*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                        </FormControl>*/}
                {/*                                    </Grid>*/}
                {/*                                    <Grid item*/}
                {/*                                          xs={12}>*/}
                {/*                                        <FormControl variant="outlined" style={{width: "100%"}}>*/}
                {/*                                            <FormHelperText id="outlined-weight-helper-text">*/}
                {/*                                                주요 업무*/}
                {/*                                            </FormHelperText>*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                multiline*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                multiline*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                        </FormControl>*/}
                {/*                                    </Grid>*/}
                {/*                                </Grid>*/}
                {/*                            </div>*/}
                {/*                        </Grid>*/}
                {/*                    </Grid>*/}
                {/*                </Card>*/}
                {/*            </div>*/}

                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                {/*<Grid item*/}
                {/*      xs={12}*/}
                {/*>*/}
                {/*    <Grid container={'true'}*/}
                {/*          spacing={2}*/}
                {/*          justifyContent={'center'}*/}
                {/*    >*/}
                {/*        <Grid item xs={10}>*/}
                {/*            <div style={{*/}
                {/*                display: "flex",*/}
                {/*                justifyContent: 'center'*/}
                {/*            }}>*/}
                {/*                <Card className={styles.card2}>*/}
                {/*                    <Grid*/}
                {/*                        container*/}
                {/*                        spacing={2}>*/}
                {/*                        <Grid item xs={4}*/}
                {/*                              justifyContent={"flex-end"}*/}
                {/*                        >*/}
                {/*                            <h2 style={{*/}
                {/*                                margin: "10px",*/}
                {/*                                align: "center"*/}
                {/*                            }}>*/}
                {/*                                Amass*/}
                {/*                                <hr/>*/}
                {/*                            </h2>*/}
                {/*                            <TextField id="date"*/}
                {/*                                       variant="standard"*/}
                {/*                                       value={"2021.12 ~ 현재"}*/}
                {/*                                       disabled={true}*/}
                {/*                                       style={{*/}
                {/*                                           margin: "10px"*/}
                {/*                                       }}*/}
                {/*                            />*/}

                {/*                            <TextField id="test"*/}
                {/*                                       variant="standard"*/}
                {/*                                       value={"Senior Engineer"}*/}
                {/*                                       disabled={true}*/}
                {/*                                       style={{*/}
                {/*                                           margin: "10px"*/}
                {/*                                       }}*/}
                {/*                            />*/}

                {/*                            <TextField id="test"*/}
                {/*                                       variant="standard"*/}
                {/*                                       value={"주요 업무"}*/}
                {/*                                       disabled={true}*/}
                {/*                                       style={{*/}
                {/*                                           margin: "10px"*/}
                {/*                                       }}*/}
                {/*                            />*/}
                {/*                            /!*<p>Senior Engineer</p>*!/*/}
                {/*                        </Grid>*/}
                {/*                        /!*<Divider orientation="vertical" variant="middle" flexItem xs={1}/>*!/*/}
                {/*                        <Grid item xs={8}>*/}
                {/*                            <div>*/}
                {/*                                <Grid container*/}
                {/*                                      spacing={3}*/}
                {/*                                >*/}
                {/*                                    <Grid item xs={12}>*/}
                {/*                                        <h2 style={{*/}
                {/*                                            marginTop: "10px",*/}
                {/*                                        }}>*/}
                {/*                                            프로젝트 명*/}
                {/*                                            <hr/>*/}
                {/*                                        </h2>*/}
                {/*                                    </Grid>*/}
                {/*                                    <Grid item*/}
                {/*                                          xs={12}>*/}
                {/*                                        <FormControl variant="outlined" style={{width: "100%"}}>*/}
                {/*                                            <FormHelperText id="outlined-weight-helper-text">*/}
                {/*                                                개요*/}
                {/*                                            </FormHelperText>*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                        </FormControl>*/}
                {/*                                    </Grid>*/}
                {/*                                    <Grid item*/}
                {/*                                          xs={12}>*/}
                {/*                                        <FormControl variant="outlined" style={{width: "100%"}}>*/}
                {/*                                            <FormHelperText id="outlined-weight-helper-text">*/}
                {/*                                                성과*/}
                {/*                                            </FormHelperText>*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                        </FormControl>*/}
                {/*                                    </Grid>*/}
                {/*                                    <Grid item*/}
                {/*                                          xs={12}>*/}
                {/*                                        <FormControl variant="outlined" style={{width: "100%"}}>*/}
                {/*                                            <FormHelperText id="outlined-weight-helper-text">*/}
                {/*                                                주요 업무*/}
                {/*                                            </FormHelperText>*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                            <Input*/}
                {/*                                                id={name}*/}
                {/*                                                name={name}*/}
                {/*                                                type="text"*/}
                {/*                                                value={value}*/}
                {/*                                                disabled={true}*/}
                {/*                                                aria-describedby="outlined-weight-helper-text"*/}
                {/*                                            />*/}
                {/*                                        </FormControl>*/}
                {/*                                    </Grid>*/}
                {/*                                </Grid>*/}
                {/*                            </div>*/}
                {/*                        </Grid>*/}
                {/*                    </Grid>*/}
                {/*                </Card>*/}
                {/*            </div>*/}

                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

            </Grid>
        </>)
}