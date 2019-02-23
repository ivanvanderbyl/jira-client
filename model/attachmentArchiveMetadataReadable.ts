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

import { AttachmentArchiveItemReadable } from './attachmentArchiveItemReadable';

/**
* Metadata for an archive (for example a zip) and its contents.
*/
export class AttachmentArchiveMetadataReadable {
    /**
    * The ID of the attachment.
    */
    'id'?: number;
    /**
    * The name of the archive file.
    */
    'name'?: string;
    /**
    * The list of the items included in the archive.
    */
    'entries'?: Array<AttachmentArchiveItemReadable>;
    /**
    * The number of items included in the archive.
    */
    'totalEntryCount'?: number;
    /**
    * The MIME type of the attachment.
    */
    'mediaType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<AttachmentArchiveItemReadable>"
        },
        {
            "name": "totalEntryCount",
            "baseName": "totalEntryCount",
            "type": "number"
        },
        {
            "name": "mediaType",
            "baseName": "mediaType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AttachmentArchiveMetadataReadable.attributeTypeMap;
    }
}

