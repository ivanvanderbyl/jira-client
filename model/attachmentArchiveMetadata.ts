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

import { AttachmentArchiveEntry } from './attachmentArchiveEntry';

/**
* Metadata for the items within an archive (for example a zip).
*/
export class AttachmentArchiveMetadata {
    /**
    * The list of the items included in the archive.
    */
    'entries'?: Array<AttachmentArchiveEntry>;
    /**
    * The number of items in the archive.
    */
    'totalEntryCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<AttachmentArchiveEntry>"
        },
        {
            "name": "totalEntryCount",
            "baseName": "totalEntryCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AttachmentArchiveMetadata.attributeTypeMap;
    }
}

