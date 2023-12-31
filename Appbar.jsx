import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userEmailState } from "./store/selectors/userEmail";
import { isUserLoading } from "./store/selectors/isLoading";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";

function Appbar() {
    const navigate = useNavigate();
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);

    const appbarStyle = {
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        zIndex: 1,
        
        
    };
// if (userLoading) {
    //     return <></>
    // }
    if (userEmail) {
        return (
            <div style={appbarStyle}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
                    <Typography variant="h6">Skill Magnet</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10, display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                            <Button style={{color:"#FCA311"}} onClick={() => navigate("/addcourse")}>Create course</Button>
                        </div>

                        <div style={{ marginRight: 10 }}>
                            <Button variant="outlined" style={{color:"#960200", borderColor:"#960200", borderWidth:2}} onClick={() => navigate("/courses")}>Show Courses</Button>
                        </div>

                        <Button style={{backgroundColor:"#6D326D"}}
                            variant={"contained"}
                            onClick={() => {
                                localStorage.setItem("token", null);
                                setUser({
                                    isLoading: false,
                                    userEmail: null,
                                });
                                navigate("/");
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div style={appbarStyle}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
                    <Typography variant={"h6"}>Skill Magnet</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button variant={"contained"} style={{backgroundColor:"#6D326D"}} onClick={() => navigate("/signup")}>
                            Signup
                        </Button>
                    </div>
                    <div>
                        <Button variant={"contained"} style={{backgroundColor:"#FCA311"}} onClick={() => navigate("/login")}>
                            Signin
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appbar;
