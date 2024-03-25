import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import SideMenu from "./components/Menu/SideMenu/SideMenu.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import theme from "./theme.js";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import ForgotPassword from "./pages/forgot-password";
import PasswordReset from "./pages/password-reset";
import NotFoundPage from "./pages/404";

const store = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "http:",
});

const App = () => {
    return (
        <AuthProvider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CssBaseline />
                    <Box
                        sx={{
                            width: "100vw",
                            height: "100vh",
                            display: "flex",
                            backgroundColor: "#0E1C36",
                        }}
                    >
                        <SideMenu />
                        <Grid
                            container
                            sx={{
                                width: "100%",
                                position: "relative",
                                my: 2,
                                mr: 2,
                                p: 2,
                                borderRadius: "14px",
                                background: "#F5F5F5",
                                overflow: "auto",
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/forgot-password" element={<ForgotPassword />} />
                                <Route path="/password-reset/:token" element={<PasswordReset />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="*" element={<NotFoundPage/>} />
                            </Routes>
                        </Grid>
                    </Box>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;
