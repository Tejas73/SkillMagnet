import { Button, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';
import { BASE_URL } from "./config.js";

//steps:
// 1. Identify Components:
// Break down your application into components. Identify which components need to hold state.

// 2. Initialize State:
// Identify the pieces of data that your component needs to keep track of.
// Use the useState hook to initialize state variables.

// 3. Create Event Handlers:
// Determine which user interactions should trigger state changes (e.g., onChange, onClick).
// Write event handler functions to update the state.

// 4. Bind State to Components:
// Bind state values to relevant components (e.g., input fields).

// 5. Handle Form Submission:
// Write a function to handle form submission using the state values.

// 6. Testing and Debugging:
// Test your components and event handlers.
// Use console.log statements or tools like React DevTools to debug and understand the flow of your code
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const setUser = useSetRecoilState(userState);


    return <div style={{
        margin: 0,
        padding: 0,
        height: '100vh',
        backgroundColor: "#e5e5e5"
    }}>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"

        }}>
            <Typography variant={"h6"}>
                Welcome to Skill Magnet. Sign up below
            </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br /><br />

                <Button
                    size={"large"}
                    variant="contained"
                    style={{backgroundColor:"#6D326D"}}
                    onClick={async () => {
                        const response = await axios.post(`${BASE_URL}/admin/signup`, {
                            username: email,
                            password: password
                        })
                        let data = response.data;
                        localStorage.setItem("token", data.token);
                        // window.location = "/"
                        setUser({ userEmail: email, isLoading: false })
                        navigate("/")
                    }}

                > Signup</Button>
            </Card>
        </div>
    </div>
}

export default Signup;