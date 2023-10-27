import { Grid, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DentistCard from "@/components/DentistCard";

export default function DentistsUser(){
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <DentistCard profilePic="/img/cover.png" name="eiei" hospital="hos"></DentistCard>
        </Grid>
      </Grid>
    </Box>
    );
}