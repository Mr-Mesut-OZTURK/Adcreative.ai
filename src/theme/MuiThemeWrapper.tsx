import { IChildrenProps } from '@/types';
import { ThemeProvider, createTheme } from '@mui/material/styles';




const theme = createTheme({

    palette: {
        primary: {
            main: '#000'
        }
    },

    shape: {
        borderRadius: 10
    },

    components: {
        MuiChip: {
            styleOverrides: {
                root: () => {
                    return ({
                        borderRadius: '10px',
                        backgroundColor: '#e2e8f0',
                    })
                },

            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: () => {
                    return ({
                        borderRadius: '50%',
                    })
                }
            }
        },
        MuiPopper: {
            styleOverrides: {
                root: () => {
                    return ({
                        border: '2px solid #94a3b8',
                        borderRadius: 10,
                        mt: 25,
                        top: 10,
                        marginBottom: "-1rem" // this does not apply in v5

                    })
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    // '& label.Mui-focused': {
                    //     color: 'white',
                    // },
                    // '& .MuiInput-underline:after': {
                    //     borderBottomColor: 'yellow',
                    // },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: '2px solid #94a3b8',
                        },
                        '&:hover fieldset': {
                            border: '2px solid #94a3b8',
                        },
                        '&.Mui-focused fieldset': {
                            border: '2px solid #94a3b8',
                        },
                    },
                },
            }
        }

    },

});


export const MuiThemeWrapper = ({ children }: IChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
