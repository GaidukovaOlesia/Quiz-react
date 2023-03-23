import React from "react";
import './App.css';
import QuizList from "./pages/quizList";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import { Grid, Box, styled  } from '@mui/material';
import SideBar from "./components/templates/SideBar";

const HeaderWrapper = styled(Box)(() => ({
    backgroundColor: 'rgb(7,60,42)',
    height: '70px',
    color: 'white',
    fontSize: '25px',
    padding: '15px',
    zIndex: 5,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
}));

const NavBarWrapper = styled(Box)(() => ({
    backgroundColor: 'rgba(9,80,55,1)',
    height: '100%',
    overflow: 'auto',
}));

const BodyWrapper = styled(Box)(() => ({
    background: 'linear-gradient(90deg, rgba(31,108,81,1) 0%, rgba(52,175,159,1) 34%, rgba(188,231,222,1) 100%)',
}));

const FooterWrapper = styled(Box)(() => ({
    backgroundColor: 'rgb(7,60,42)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100px',
}))

function App() {
  return (
    <div className="App">
        <Grid container>
            <Grid item lg={4} md={4} xs={4}>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
            </Grid>
            <Grid item lg={8} md={8} xs={8}>
                <HeaderWrapper>
                    <Header />
                </HeaderWrapper>
            </Grid>
            <Grid
                item
                lg={2}
                md={0}
                xs={0}
                display={{xs: "none", md: "none", lg: "block"}}
                >
                <NavBarWrapper>
                    <SideBar />
                </NavBarWrapper>
            </Grid>
            <Grid item lg={10} md={12} xs={12}>
                <BodyWrapper>
                    <QuizList />
                </BodyWrapper>
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
