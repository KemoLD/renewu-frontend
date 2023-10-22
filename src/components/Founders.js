import React from 'react'
import {
    Button,
    Stack,
    Box,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

import Kemo from '../assets/Kemo.jpg';
import Ariel from '../assets/Ariel.jpg';

const Founders = () => {

    const StackColumn = styled(Stack)(() => ({
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        gap: 8,
        textAlign: 'center',
    }));

    const BoxRow = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 100, 
        flex: 1,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap: 30,
        }
    }));

    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                paddingBottom: 10,
                mx: 6,
            }}
        >
            <Title
                text={
                    'Meet the Founders'
                }
                textAlign={'center'}
                sx={{ pb: 2 }}
            />

            <BoxRow>
                <StackColumn>

                    <img src={Kemo} alt="Kemo Sonko" style={{ maxHeight: 700, maxWidth: '100%', borderRadius: 10 }} />

                    <a
                        class='social-icon-link github'
                        href="https://www.linkedin.com/in/kemo-sonko/"
                        target='_blank'
                        rel="noopener"
                        style={{ textDecoration: 'none' }}
                    >

                        <Typography
                            sx={{
                                maxWidth: 'sm',
                                mx: 0,
                                textAlign: 'center',
                                py: 3,
                                color: 'black',
                            }}
                        >
                            Kemo Sonko
                        </Typography>
                    </a>

                </StackColumn>

                <StackColumn>

                    <img src={Ariel} alt="Ariel Tyson" style={{  maxHeight: 700, maxWidth: '100%', borderRadius: 10 }} />

                    <a
                        class='social-icon-link github'
                        href="https://www.linkedin.com/in/arieltyson/"
                        target='_blank'
                        rel="noopener"
                        style={{ textDecoration: 'none' }}
                    >

                        <Typography
                            sx={{
                                maxWidth: 'sm',
                                mx: 0,
                                textAlign: 'center',
                                py: 3,
                                color: 'black',
                            }}
                        >
                            Ariel Tyson
                        </Typography>
                    </a>

                </StackColumn>
            </BoxRow>



        </Stack>
    )
}

export default Founders;