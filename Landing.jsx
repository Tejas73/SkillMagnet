import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {  Grid, Typography } from "@mui/material";
import landingImage from "./adminLanding.jpg";
import { useRecoilValue } from "recoil";
import { userEmailState } from "./store/selectors/userEmail";
import { isUserLoading } from "./store/selectors/isLoading";

const Landing = () => {
    const navigate = useNavigate()
    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);
    return <div>
        <Grid container style={{ padding: "5vw" }}>
            {/* text */}
            <Grid item xs={12} md={6} lg={6}>
                <div style={{ marginTop: 100 }}>
                    <Typography variant={"h2"}>
                        Skill Magnet
                    </Typography>
                    <Typography style={{color:"#14213D"}} variant={"h5"}>
                        A place to learn, earn and grow
                    </Typography>
                    {!userLoading && !userEmail && <div style={{ display: "flex", marginTop: 20 }}>
                        <div style={{ marginRight: 10 }}>
                            <Button
                                size={"large"}
                                variant={"outlined"}
                                style={{color: "#6D326D", borderColor: "#6D326D"}}
                                onClick={() => {
                                    navigate("/signup")
                                }}
                                >Signup</Button>
                        </div>
                        <div>
                            <Button
                                size={"large"}
                                variant={"outlined"}
                                style={{color: "#FCA311", borderColor: "#FCA311"}}
                                onClick={() => {
                                    navigate("/signin")
                                }}
                            >Signin</Button>
                        </div>
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            {/* image */}
            <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
                <img src={landingImage} width={"100%"} />
            </Grid>
        </Grid>
    </div>
}

export default Landing;

{/* <Card style={{ width: 400, padding: 0, marginLeft: "auto", marginRight: "auto", marginTop: 100 }}>
            <div>
                <Typography variant="h6" style={{ textAlign: "center", marginBottom: 10 }}>Choose your role:</Typography>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <Card style={{ padding: 20, backgroundColor: "#219ebc" }}>
                    <Typography style={{ textAlign: "center" }}>Teacher</Typography>
                    <List>
                        <ListItem style={{ backgroundColor: "#ffb703" }}>
                            <Typography variant="body1">&#8226;</Typography>
                            <ListItemText primary="Add course" />
                        </ListItem>
                        <ListItem style={{ backgroundColor: "#ffb703" }}>
                            <Typography variant="body1">&#8226;</Typography>
                            <ListItemText primary="Update Course" />
                        </ListItem>
                        <Button variant="contained" style={{ backgroundColor: "#fb8500" }} onClick={() => {
                            navigate('/signup')
                        }}>Select</Button>
                    </List>
                </Card>
                <Card style={{ padding: 20, backgroundColor: "#219ebc" }}>
                    <Typography style={{ textAlign: "center" }}>Student</Typography>
                    <List>
                        <ListItem style={{ backgroundColor: "#ffb703" }}>
                            <Typography variant="body1">&#8226;</Typography>
                            <ListItemText primary="View content" />
                        </ListItem>

                        <ListItem style={{ backgroundColor: "#ffb703" }}>
                            <Typography variant="body1">&#8226;</Typography>
                            <ListItemText primary="Buy course" />
                        </ListItem>
                    </List>
                    <Button variant="contained" style={{ backgroundColor: "#fb8500" }}>Select</Button>
                </Card>
            </div>
        </Card> */}