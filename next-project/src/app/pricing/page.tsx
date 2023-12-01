import React from "react";

import {
    Button,
    CardActions,
    CardContent,
    Grid,
    Link,
    Breadcrumbs,
    Card,
    Typography,
    CardHeader,
    Box,
    Divider,
} from "@mui/material";
import { StarBorder as StarIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";


export default function Pricing() {

    return (
        <React.Fragment>
            <Typography variant="h3" gutterBottom display="inline">
                Pricing
            </Typography>

            <Breadcrumbs >
                <h1>
                    Dashboard
                </h1>
                <h1>
                    Pages
                </h1>
                <Typography>Pricing</Typography>
            </Breadcrumbs>

            <Divider/>

            {/* <Header>
                <Typography variant="h3" gutterBottom align="center">
                    We have a plan for everyone
                </Typography>

                <Typography variant="subtitle1" gutterBottom align="center">
                    Whether you're a business or an individual, 14-day trial no credit
                    card required.
                </Typography>
            </Header> */}

            <Grid container justifyContent="center">
                <Grid item xs={12} lg={10}>
                    <Grid container spacing={6} alignItems="flex-end">
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardHeader
                                    title="Free"
                                    titleTypographyProps={{ align: "center" }}
                                    pb={0}
                                    pt={2}
                                />
                                <CardContent>
                                    <Box>
                                        <Typography
                                            component="h2"
                                            variant="h1"
                                            color="textPrimary"
                                            align="center"
                                            display="inline"
                                        >
                                            $0
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="textSecondary"
                                            align="center"
                                            display="inline"
                                        >
                                            /mo
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle1" align="center">
                                        10 users included
                                        <br />
                                        2 GB of storage
                                        <br />
                                        Help center access
                                        <br />
                                        Email support
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant="outlined" color="primary">
                                        Sign up for free
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardHeader
                                    title="Free"
                                    subheader="Most popular"
                                    titleTypographyProps={{ align: "center" }}
                                    subheaderTypographyProps={{ align: "center" }}
                                    action={<StarIcon />}
                                    pb={0}
                                    pt={2}
                                />
                                <CardContent>
                                    <Box>
                                        <Typography
                                            component="h2"
                                            variant="h1"
                                            color="textPrimary"
                                            align="center"
                                            display="inline"
                                        >
                                            $15
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="textSecondary"
                                            align="center"
                                            display="inline"
                                        >
                                            /mo
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle1" align="center">
                                        20 users included
                                        <br />
                                        10 GB of storage
                                        <br />
                                        Help center access
                                        <br />
                                        Priority email support
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant="contained" color="primary">
                                        Get started
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardHeader
                                    title="Enterprise"
                                    titleTypographyProps={{ align: "center" }}
                                    pb={0}
                                    pt={2}
                                />
                                <CardContent>
                                    <Box>
                                        <Typography
                                            component="h2"
                                            variant="h1"
                                            color="textPrimary"
                                            align="center"
                                            display="inline"
                                        >
                                            $30
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="textSecondary"
                                            align="center"
                                            display="inline"
                                        >
                                            /mo
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle1" align="center">
                                        50 users included
                                        <br />
                                        30 GB of storage
                                        <br />
                                        Help center access
                                        <br />
                                        Phone & email support
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant="outlined" color="primary">
                                        Contact us
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
