import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormScreen = () => {
    const [inputString, setInputString] = useState('');
    const [responseData, setResponseData] = useState(null);
    const sendDataToAPI = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/reverse-string/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: inputString })
            });
            const data = await response.json();
            setResponseData(data);
            setInputString(data.reversedString);
        } catch (error) {
            console.error('Error sending data to API:', error);
        }
    };

    return (
        <div>
            <Form.Control
                type="text"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                placeholder="Enter string to reverse"
                className="input-text"
            />
            <Button variant="secondary" onClick={sendDataToAPI}>Reverse It!</Button>
        </div>
    );
};

export default FormScreen;
