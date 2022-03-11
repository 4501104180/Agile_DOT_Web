import { Container, Grid, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import {
    TotalActiveCategories,
    TotalActiveAccounts,
    TotalActiveTeams
} from '../components/dashboard';

const Team = () => {
    return (
        <Page title='Dashboard'>
            <Container sx={{ pb: 3 }}>
                <Typography gutterBottom variant='h5' sx={{ mb: 2 }}>
                    Welcome back, Admin!
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <TotalActiveCategories />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TotalActiveAccounts />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TotalActiveTeams />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};

export default Team;
