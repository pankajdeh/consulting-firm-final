import axios from 'axios';

export async function POST(req) {
    try {
        const formData = await req.json(); // Parse the incoming JSON data
        console.log("formData: ", formData);

        const scriptURL = "https://v1.nocodeapi.com/pankaj26/google_sheets/XPStxcgbtVAVhida?tabId=Sheet1"
        // const scriptURL = "https://script.google.com/macros/s/AKfycbzqRJefaPKhA-2uB54C_8KYH2c-GZNKxwnVYII8kSd-meqdZL1WBkP_NgOxKxh2rFCb-A/exec"
        const response = await axios.post(scriptURL, formData, {
            headers: {
                'Content-Type': 'application/json',
            },

        });
       
            const rep  = new Response(JSON.stringify({ message: "Form submitted successfully!" }), { status: 200 });
            console.log("rep: ",rep)
        return rep 
        
    } catch (error) {
        console.error('Error submitting form:', error);
        return new Response(JSON.stringify({ error: "Failed to submit form" }), { status: 500 });
    }
}


