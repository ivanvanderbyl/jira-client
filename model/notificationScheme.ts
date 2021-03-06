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

import { NotificationSchemeEvent } from './notificationSchemeEvent';

/**
* Details about a notification scheme.
*/
export class NotificationScheme {
    /**
    * Expand options that include additional notification scheme details in the response.
    */
    'expand'?: string;
    /**
    * The ID of the notification scheme.
    */
    'id'?: number;
    'self'?: string;
    /**
    * The name of the notification scheme.
    */
    'name'?: string;
    /**
    * The description of the notification scheme.
    */
    'description'?: string;
    /**
    * The notification events and associated recipients.
    */
    'notificationSchemeEvents'?: Array<NotificationSchemeEvent>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expand",
            "baseName": "expand",
            "type": "string"
        },
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "notificationSchemeEvents",
            "baseName": "notificationSchemeEvents",
            "type": "Array<NotificationSchemeEvent>"
        }    ];

    static getAttributeTypeMap() {
        return NotificationScheme.attributeTypeMap;
    }
}

