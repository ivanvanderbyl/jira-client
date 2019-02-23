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

import { NotificationRecipients } from './notificationRecipients';
import { NotificationRecipientsRestrictions } from './notificationRecipientsRestrictions';

/**
* Details about a notification.
*/
export class Notification {
    /**
    * The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
    */
    'subject'?: string;
    /**
    * The plain text body of the email notification for the issue.
    */
    'textBody'?: string;
    /**
    * The HTML body of the email notification for the issue.
    */
    'htmlBody'?: string;
    'to'?: NotificationRecipients;
    'restrict'?: NotificationRecipientsRestrictions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "textBody",
            "baseName": "textBody",
            "type": "string"
        },
        {
            "name": "htmlBody",
            "baseName": "htmlBody",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "NotificationRecipients"
        },
        {
            "name": "restrict",
            "baseName": "restrict",
            "type": "NotificationRecipientsRestrictions"
        }    ];

    static getAttributeTypeMap() {
        return Notification.attributeTypeMap;
    }
}
