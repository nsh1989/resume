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
                    (item, index) => <WorkExperienceForm key={index} values={item}/>
                )
            }
            </Grid>
        </>)
}