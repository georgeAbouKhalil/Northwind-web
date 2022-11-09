import { TextField, Typography, Button, ButtonGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { MailOutline, Send, Clear } from "@material-ui/icons";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">
			
            <Typography variant="h3" className="Header">
                <MailOutline />
                Contact Us
                </Typography>
            
            <form>
                
                <TextField label="Name" variant="outlined" className="TextBox"></TextField>

                <TextField label="Email" variant="outlined" type="email" className="TextBox"></TextField>

                <TextField label="Message" variant="outlined" className="TextBox"></TextField>

                <FormControlLabel label="Send me promotional emails" control={<Checkbox />}></FormControlLabel>
                
                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" variant="contained" startIcon={<Send/>}>Send</Button>
                    <Button color="secondary" variant="contained" startIcon={<Clear/>}>Clear</Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default ContactUs;
