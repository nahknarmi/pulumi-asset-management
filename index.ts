import * as aws from "@pulumi/aws";
import {API} from "@pulumi/awsx/apigateway";
import handler from "./handler";


const endpoint = new API("assets", {
    routes: [
        {
            path: "/{route+}",
            method: "GET",
            eventHandler: handler
        },
        {
            path: "/{route+}",
            method: "POST",
            eventHandler: (event) => {
                console.log("POST command");
                console.log(event);
            }
        },
        {
            path: "/{route+}",
            method: "DELETE",
            eventHandler: (event) => {
                console.log("DELETE command");
                console.log(event);
            }
        },
    ]

});

export const endpointUrl = endpoint.url;