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

import { User } from './user';

/**
* Metadata for an issue attachment.
*/
export class AttachmentMetadata {
    /**
    * The ID of the attachment.
    */
    'id'?: number;
    /**
    * The URL of the attachment metadata details.
    */
    'self'?: string;
    /**
    * The name of the attachment file.
    */
    'filename'?: string;
    /**
    * Details of the user who attached the file.
    */
    'author'?: User;
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
    * Additional properties of the attachment.
    */
    'properties'?: { [key: string]: any; };
    /**
    * The URL of the attachment.
    */
    'content'?: string;
    /**
    * The URL of a thumbnail representing the attachment.
    */
    'thumbnail'?: string;

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
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "User"
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
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: any; }"
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
        return AttachmentMetadata.attributeTypeMap;
    }
}
