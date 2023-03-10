import {Card, Grid} from "@mui/material";
import styles from "../styles/Home.module.css";
import React from "react";
import CustomGridTypography from "../Components/CustomGridTypography";
import DevIcon from "devicon-react-svg";
import CustomGridTypography2 from "../Components/CustomGridTypography2";

export default function About() {
    const cert_list = [
        {'name': '정보처리기사', 'date':'2016.05'},
        {'name': 'CCNA', 'date':'2016.02'},
        {'name': '네트워크관리사2급', 'date':'2015.10'},
    ]
    return (
        <>
            <h2 className={styles.worktitle}>
                About
            </h2>
            <Grid container
                  spacing={2}
                  justifyContent={'center'}
            >
                <div style={{
                    width: '50%',
                    justifyContent: 'center'
                }}>
                    <Grid item xs={12}>
                        <Card className={styles.card3}>
                            <div style={{
                                justifyContent: 'center',
                            }}>
                                <Grid container spacing={3}>
                                    <CustomGridTypography label={"이름"} value={"남승현"} xs={6}/>
                                    <CustomGridTypography label={"나이"} value={"만 33세"} xs={6}/>
                                    <CustomGridTypography label={"핸드폰"} value={"010-2628-2096"} xs={6}/>
                                    <CustomGridTypography label={"E-MAIL"} value={"cakor2096@naver.com"} xs={6}/>
                                    <CustomGridTypography label={"최종 학력"} value={"학사"} xs={6}/>
                                    <CustomGridTypography label={"전공"} value={"컴퓨터 공학"} xs={6}/>
                                    <CustomGridTypography2 label={"자격증"} value= {cert_list} isMulti={true} xs={12}/>
                                </Grid>
                            </div>

                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={styles.card3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <h2>Skills</h2>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="java" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="python" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="django" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="javascript" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="react" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="nodejs" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="mysql" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="mongodb" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="git" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DevIcon icon="docker" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <DevIcon icon="aws" style={{width: "30px"}}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <DevIcon icon="nginx" style={{width: "30px"}}/>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </div>


            </Grid>
        </>

    )
}