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

import { UserDetails } from './userDetails';

/**
* Details about an attachment.
*/
export class Attachment {
    /**
    * The URL of the attachment details response.
    */
    'self'?: string;
    /**
    * The ID of the attachment.
    */
    'id'?: string;
    /**
    * The file name of the attachment.
    */
    'filename'?: string;
    'author'?: UserDetails;
    /**
    * The datetime the attachment was created.
    */
    'created'?: Date;
    /**
    * The size of the attachment.
    */
    'size'?: number;
    /**
    * The MIME type of the attachment.
    */
    'mimeType'?: string;
    /**
    * The content of the attachment.
    */
    'content'?: string;
    /**
    * The URL of a thumbnail representing the attachment.
    */
    'thumbnail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "UserDetails"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}

