## Node.js SOAP Example

# Author
Kenya Luna 

# Node.js SOAP Example

This project is a basic "Hello, World!" implementation using SOAP in Node.js. It demonstrates how to set up a simple SOAP server-client architecture where a client sends requests to a remote server, and the server responds with a SOAP-based message. This project runs locally and can also be accessed using Ngrok.

# Features

- SOAP Protocol: A structured protocol for web services using XML.
- Express Integration: The SOAP server is hosted using the Express framework.
- Simple Hello, World! Example: Exposes a SOAP service with a method sayHello that takes a name and returns a greeting.
- Local & Public Access: The service can be tested locally or publicly through Ngrok.

# Requirements

- Node.js: Version 14 or higher
- NPM: Version 6 or higher
- SOAP-UI or any client capable of sending SOAP requests
    

# Installation

 Clone this repository:

```bash
git clone 
```

Navigate to the project directory:

```bash
cd tu-repositorio
```

Install dependencies:

```bash
    npm install
```

Running the Application

Start the SOAP Server

 - Run the server locally:
   
```bash
node server.js
```

The server will start and expose the SOAP service at:

Local: 

    ```bash
    http://localhost:3000/soap
    ```
    
    ```bash
    WSDL: http://localhost:3000/soap?wsdl
    ```

# Test the SOAP Service

Use a SOAP client (e.g., SOAP-UI or Postman) to send a request to the service. Example request:
```bash
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://example.com/soap">
    <soapenv:Header/>
    <soapenv:Body>
        <tns:sayHelloRequest>
            <name>Kenya</name>
        </tns:sayHelloRequest>
    </soapenv:Body>
</soapenv:Envelope>
```
Expected response:
![imagen](https://github.com/user-attachments/assets/cbf06257-c6b6-4646-9ff5-3c323ce16e86)

