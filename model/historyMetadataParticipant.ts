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


/**
* Details of user or system associated with a issue history metadata item.
*/
export class HistoryMetadataParticipant {
    /**
    * The ID of the user or system associated with a history record.
    */
    'id'?: string;
    /**
    * The display name of the user or system associated with a history record.
    */
    'displayName'?: string;
    /**
    * This property is deprecated.
    */
    'displayNameKey'?: string;
    /**
    * The type of the user or system associated with a history record.
    */
    'type'?: string;
    /**
    * The URL to an avatar for the user or system associated with a history record.
    */
    'avatarUrl'?: string;
    /**
    * The URL of the user or system associated with a history record.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "displayNameKey",
            "baseName": "displayNameKey",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "avatarUrl",
            "baseName": "avatarUrl",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return HistoryMetadataParticipant.attributeTypeMap;
    }
}

