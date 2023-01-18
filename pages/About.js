import {Card, Grid} from "@mui/material";
import styles from "../styles/Home.module.css";
import React from "react";

export default function About() {

    return (
        <>
            <h2 className={styles.worktitle}>
                About Me
            </h2>
            <Grid container
                  spacing={2}
                  justifyContent={'center'}
            >
                <div style={{
                    display: "flex",
                    justifyContent: 'center'
                }}>
                    <Grid item xs={12}>
                        <Card className={styles.card2}>
                            <p></p>
                        </Card>
                    </Grid>
                </div>

            </Grid>
        </>

    )
}