/**
 * Jira Cloud REST API
 * Jira Cloud REST API documentation
 *
 * OpenAPI spec version: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Application } from './application';
import { RemoteObject } from './remoteObject';

/**
* Details of an issue remote link.
*/
export class RemoteIssueLink {
    /**
    * The ID of the link.
    */
    'id'?: number;
    /**
    * The URL of the link.
    */
    'self'?: string;
    /**
    * The global ID of the link, such as the ID of the item on the remote system.
    */
    'globalId'?: string;
    /**
    * Details of the remote application the linked item is in.
    */
    'application'?: Application;
    /**
    * Description of the relationship between the issue and the linked item.
    */
    'relationship'?: string;
    /**
    * Details of the item linked to.
    */
    'object'?: RemoteObject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "globalId",
            "baseName": "globalId",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "Application"
        },
        {
            "name": "relationship",
            "baseName": "relationship",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "RemoteObject"
        }    ];

    static getAttributeTypeMap() {
        return RemoteIssueLink.attributeTypeMap;
    }
}
