import {Card, Grid} from "@mui/material";
import styles from "../styles/Home.module.css";
import CustomGridTypography from "./CustomGridTypography";
import CustomGridList from "./CustomGridList";
import CustomGridNestTypography from "./CustomGridNestTypography";


export default function WorkExperienceForm({values}) {
    return (
        <>
            <Grid item xs={12}>
                <Grid container={'true'} spacing={2} justifyContent={'center'}>
                    <Grid item xs={10}>
                        <div style={{
                            display: "flex",
                            justifyContent: 'center'
                        }}>
                            <Card className={styles.card2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} justifyContent={"flex-end"}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <h5>
                                                    {values.company}
                                                    <hr/>
                                                </h5>
                                            </Grid>
                                            <CustomGridTypography value={values.period} xs={12}/>
                                            <CustomGridTypography value={values.position} xs={12}/>
                                            <CustomGridList label={"주요 업무"} value={values.tasks} xs={12}/>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <h5>
                                                        {values.title}
                                                        <hr/>
                                                    </h5>
                                                </Grid>
                                                <CustomGridTypography label={"개요"} value={values.summary} xs={12}/>
                                                {
                                                    values.results != null && values.results.length > 0 ?
                                                        <CustomGridTypography
                                                            label={"성과"} value={values.results}
                                                            xs={12} isMulti={true}/> : null
                                                }
                                                <Grid container spacing={1} direction="column">
                                                {
                                                    values.project_tasks != null && values.project_tasks.length > 0 ?
                                                        <CustomGridNestTypography
                                                            value={values.project_tasks}
                                                            xs={6} isMulti={true}/> : null
                                                }
                                                </Grid>
                                                {
                                                    values.technical_lead != null && values.technical_lead.length > 0 ?
                                                        <CustomGridTypography label={"Technical Lead"}
                                                                              value={values.technical_lead}
                                                                              xs={12} isMulti={true}/> : null
                                                }
                                                {
                                                    values.project_lead != null && values.project_lead.length > 0 ?
                                                        <CustomGridTypography label={"Project Lead"}
                                                                              value={values.project_lead}
                                                                              xs={12} isMulti={true}/> : null
                                                }
                                                {
                                                    values.people_lead != null && values.people_lead.length > 0 ?
                                                        <CustomGridTypography label={"People Management"}
                                                                              value={values.people_lead}
                                                                              xs={12} isMulti={true}/> : null
                                                }

                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </div>

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}