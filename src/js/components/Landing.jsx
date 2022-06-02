import React from 'react'
import { Stack, Typography, Box, Container } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';
import Image from '@mui/material/ImageList'
import Smart from '../../img/smart2.png';
import Logo from '../../img/Logo2.png';

const Landing = () => {
    return (
        <Stack direction={"column"} justifyContent={"center"} backgroundColor="white">
            <Container maxWidth={"lg"}>
                <Stack direction={"row"} sx={{mt: 10, mb: 10}}>
                    <Stack direction={"column"} width={"60%"} >
                        <Stack direction={"row"}>
                            <Typography variant="h3" color="#158ea8" sx={{fontWeight: 600}}>Makes everything feel easy</Typography>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"center"} sx={{ mt: 3}}>
                        <Typography variant="h6">Aplication to control the smart devices available in your home remotely</Typography>
                        </Stack>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} justifyContent={"start"}>
                            <CheckCircleIcon sx={{mr: 1, my: 0.5, mt: 3 }} color={"#158ea8"} />
                            <Typography variant="h6">Connected to various smart devices</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} justifyContent={"start"}>
                            <CheckCircleIcon sx={{mr: 1, my: 0.5 }} color={"#158ea8"} />
                            <Typography variant="h6">Controlling your home in real time</Typography>
                        </Box>
                        <Stack direction={"row"}>
                            <Button variant="contained"  sx={{ mt: 3, color: "#fff", backgroundColor: "#158ea8" }}><Typography variant="body1" sx={{fontWeight: 500}}>Try Now</Typography></Button>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"column"}
                        width={"40%"}>
                            <img src={Smart}/>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

export default Landing