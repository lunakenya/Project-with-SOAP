const express = require("express");
const soap = require("soap");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.raw({ type: () => true, limit: "1mb" }));

// WSDL (Web Service Description Language)
const wsdl = `
  <definitions xmlns="http://schemas.xmlsoap.org/wsdl/" xmlns:tns="http://example.com/soap" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" targetNamespace="http://example.com/soap">
    <types>
      <schema xmlns="http://www.w3.org/2001/XMLSchema" targetNamespace="http://example.com/soap">
        <element name="sayHelloRequest">
          <complexType>
            <sequence>
              <element name="name" type="string"/>
            </sequence>
          </complexType>
        </element>
        <element name="sayHelloResponse">
          <complexType>
            <sequence>
              <element name="greeting" type="string"/>
            </sequence>
          </complexType>
        </element>
      </schema>
    </types>
    <message name="sayHelloRequest">
      <part name="parameters" element="tns:sayHelloRequest"/>
    </message>
    <message name="sayHelloResponse">
      <part name="parameters" element="tns:sayHelloResponse"/>
    </message>
    <portType name="HelloPortType">
      <operation name="sayHello">
        <input message="tns:sayHelloRequest"/>
        <output message="tns:sayHelloResponse"/>
      </operation>
    </portType>
    <binding name="HelloBinding" type="tns:HelloPortType">
      <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
      <operation name="sayHello">
        <soap:operation soapAction="sayHello"/>
        <input>
          <soap:body use="literal"/>
        </input>
        <output>
          <soap:body use="literal"/>
        </output>
      </operation>
    </binding>
    <service name="HelloService">
      <port name="HelloPort" binding="tns:HelloBinding">
        <soap:address location="http://localhost:3000/soap"/>
      </port>
    </service>
  </definitions>
`;

const service = {
  HelloService: {
    HelloPort: {
      sayHello: ({ name }) => {
        return { greeting: `Hola, ${name || "Mundo"}!` };
      },
    },
  },
};

app.listen(3000, () => {
  soap.listen(app, "/soap", service, wsdl);
  console.log("SOAP service running on http://localhost:3000/soap");
});

