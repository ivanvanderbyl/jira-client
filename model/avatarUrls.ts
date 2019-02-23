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
* Details about the avatars for an item.
*/
export class AvatarUrls {
    /**
    * The URL of the item's 16x16 pixel avatar.
    */
    '_16x16'?: string;
    /**
    * The URL of the item's 24x24 pixel avatar.
    */
    '_24x24'?: string;
    /**
    * The URL of the item's 32x32 pixel avatar.
    */
    '_32x32'?: string;
    /**
    * The URL of the item's 48x48 pixel avatar.
    */
    '_48x48'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_16x16",
            "baseName": "16x16",
            "type": "string"
        },
        {
            "name": "_24x24",
            "baseName": "24x24",
            "type": "string"
        },
        {
            "name": "_32x32",
            "baseName": "32x32",
            "type": "string"
        },
        {
            "name": "_48x48",
            "baseName": "48x48",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AvatarUrls.attributeTypeMap;
    }
}

