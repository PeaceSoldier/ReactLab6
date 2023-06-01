import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import styles from "./UniversityForm.module.css"


export default function UniversityForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    function Submit(event) {
        event.preventDefault();
    }
    function NameChange(event) {
        setName(event.target.value);
    }
    function EmailChange(event) {
        setEmail(event.target.value);
    }
    function TopicChange(event) {
        setTopic(event.target.value);
    }
    function MessageChange(event) {
        setMessage(event.target.value);
    }
    function EmailValidation() {
        const regex = /^\w+@\w+\.\w+$/;
        return regex.test(email) || email === "";
    }
    function TopicValidation() {
        return topic.length > 5 || topic === "";
    }


    return (
        <Box>
            <form onSubmit={Submit}>
                <Box className={styles.box}>
                    <TextField className={styles.text} label={"Name"} type={"text"} value={name} onChange={NameChange}/>
                    <TextField className={styles.text} label={"Email"} type={"email"} required error={!EmailValidation()} helperText={!EmailValidation() ? "Wrong email" : ""} value={email} onChange={EmailChange}/>
                    <TextField className={styles.text} label={"Message"} required error={!TopicValidation()} helperText={!TopicValidation() ? "More than 5" : ""} type={"text"} value={topic} onChange={TopicChange}/>
                    <TextField className={styles.text} label={"Message"} type={"textarea"} multiline minRows={4} maxRows={6} value={message} onChange={MessageChange}/>
                    <Box>
                        <Button className={styles.button} variant="contained" type={"submit"}>Send</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}