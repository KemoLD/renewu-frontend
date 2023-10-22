import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/leadership-cuate.png';
import imgDetail2 from '../assets/Learning-cuate.png';
import imgDetail3 from '../assets/Messaging fun-cuate.png';


const Features = () => {

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
        <>


            <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
                sx={{
                    py: 10,
                    px: 2,

                }}
            >

                <CustomGridItem item xs={12} sm={8} md={6}
                    component='section'

                >
                    
                    <Box component='article'
                        sx={{
                            px: 4,
                        }}
                    >
                        <Title
                            text={
                                'Personalized Guidance'
                            }
                            textAlign={'start'}
                        />
                        <CustomTypography>
                            RenewU offers tailored self-improvement guidance that suits your unique journey. Our chatbot's personalized recommendations and insights help you make real progress, keeping you engaged and motivated.
                        </CustomTypography>
                    </Box>

                </CustomGridItem>

                <Grid item xs={12} sm={4} md={6}>
                    <img src={imgDetail} alt=""
                        style={{
                            width: '100%',
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={4} md={6}
                    sx={{
                        order: { xs: 4, sm: 4, md: 3 }
                    }}
                >
                    <img src={imgDetail2} alt=""
                        style={{
                            width: "100%",
                        }}
                    />
                </Grid>

                <CustomGridItem item xs={12} sm={8} md={6}
                    sx={{
                        order: { xs: 3, sm: 3, md: 4 }
                    }}
                >
                    <Box component='article'
                        sx={{
                            px: 4,
                        }}
                    >
                        <Title
                            text={
                                'Continuous Learning Made Easy'

                            }
                            textAlign={'start'}
                        />
                        <CustomTypography>
                            With RenewU, self-improvement becomes a daily habit. Our chatbot is available 24/7, providing you with a constant source of wisdom from the world's best books, making learning and growth a seamless part of your life.
                        </CustomTypography>
                    </Box>
                </CustomGridItem>

                <CustomGridItem item xs={12} sm={8} md={6}
                    component='section'
                    sx={{
                        order: { xs: 5, sm: 5, md: 5 }
                    }}
                >
                    <Box component='article'
                        sx={{
                            px: 4,
                        }}
                    >
                        <Title
                            text={
                                'Fun and Interactive Experience'
                            }
                            textAlign={'start'}
                        />
                        <CustomTypography>
                            Who says self-improvement has to be dull? RenewU combines learning with a touch of humor and interactivity. You'll enjoy the process of growth while gaining valuable life lessons from renowned books.
                        </CustomTypography>
                    </Box>

                </CustomGridItem>

                <Grid item xs={12} sm={4} md={6}
                    sx={{
                        order: { xs: 6, sm: 6, md: 6 }
                    }}
                >
                    <img src={imgDetail3} alt=""
                        style={{
                            width: '100%',
                        }}
                    />
                </Grid>

            </Grid>
        </>
    )
}

export default Features;