import React from 'react'

import { 
    Grid as MuiGrid, 
    CssBaseline,
    Box as MuiBox,
    Avatar as MuiAvatar,
    FormControlLabel,
    Checkbox,
    Paper,
    InputAdornment } from '@mui/material';

import { 
    LockOutlined as LockOutlinedIcon, 
    Clear as MuiClearIcon, } from '@mui/icons-material';


import createSigninStyles from './styles'
import { Copyright as BaseCopyright } from '../Copyright'
import { useLogin, useSignInForm } from '../../../hooks';
import { useAuthContext } from '../../../contexts';


import Components from '../../../components';

const Styles = createSigninStyles({
    MuiGrid,
    MuiBox,
    MuiAvatar,
    MuiClearIcon,
    BaseButton: Components.BaseButton,
    BaseCopyright
})

function Signin (){
    console.log('Signin feature rendered')
     const [ loginStates, loginHandlers ] = useLogin(useAuthContext())
     const [ loginFormStates, loginFormHandlers ] = useSignInForm(useAuthContext())

     const {  inputRefs, showEmailError, validations, showPwError, clearEmailField, clearPwField, user } = loginFormStates
     const { handleSubmit, handleClearText } = loginFormHandlers
    
     const {  creds, errors } = loginStates
     const { handleLogin, handleOnChange, 
       // handleClearText 
    } = loginHandlers
    
    return (
            <Styles.MainGrid container component="main">
                <CssBaseline />
                <Styles.ImageGrid
                    item
                    tablet={4}
                    laptop={7}
                />
                <MuiGrid 
                    item 
                    mobile={12} 
                    tablet={8} 
                    laptop={5} 
                    component={Paper} 
                    elevation={6} 
                    square
                >
                    <Styles.SignInBox>
                        <Styles.Avatar>
                            <LockOutlinedIcon />
                        </Styles.Avatar>
                        <Components.BaseTypography 
                            component="h1" 
                            variant="h5"
                            text="Sign in"
                        />
                        <Styles.FormBox 
                            component="form" 
                            noValidate 
                            onSubmit={handleSubmit} 
                        >

                        {/* Try using MuiTextField to see if it helps performance, so the TextField render is only on itself? */}
                        {/* <Components.Input2
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={creds.email}
                            onChange={handleOnChange}
                            error={errors.email}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Styles.ClearIcon 
                                            onClick={()=>(handleClearText('email'))}
                                        />
                                    </InputAdornment>
                                )
                            }}
                        /> */}
                        <Components.Input
                            required
                            fullWidth
                            ref={inputRefs.email}
                            margin="normal"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            initialValue={() => user ? user.email :  ''}
                            showError={showEmailError}
                            clearFields={clearEmailField}
                            errorHandler={validations.email}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Styles.ClearIcon 
                                            onClick={()=>(handleClearText('email'))}
                                        />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Components.Input 
                            required
                            fullWidth
                            ref={inputRefs.password}
                            margin="normal"
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            initialValue={() => user? user.password: ''}
                            showError={showPwError}
                            clearFields={clearPwField}
                            errorHandler={validations.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Styles.ClearIcon 
                                            onClick={()=>(handleClearText('password'))}
                                        />
                                    </InputAdornment>
                                )
                            }}

                        />
                        {/* <Components.Input2
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={creds.password}
                            onChange={handleOnChange}
                            error={errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Styles.ClearIcon 
                                            onClick={()=>(handleClearText('password'))}
                                        />
                                    </InputAdornment>
                                )
                            }}
                        /> */}
                        <FormControlLabel
                            control=
                                {<Checkbox 
                                    value="remember" 
                                    color="primary" 
                                />}
                            label="Remember me"
                        />
                        <Styles.Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            text="Sign In"
                        />
                        <Styles.Copyright />
                        </Styles.FormBox>
                    </Styles.SignInBox>
                </MuiGrid>
            </Styles.MainGrid>
    )
}


export default React.memo(Signin)