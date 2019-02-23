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
* Details about the replacement for a deleted version.
*/
export class CustomFieldReplacement {
    /**
    * The ID of the custom field in which to replace the version number.
    */
    'customFieldId'?: number;
    /**
    * The version number to use as a replacement for the deleted version.
    */
    'moveTo'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customFieldId",
            "baseName": "customFieldId",
            "type": "number"
        },
        {
            "name": "moveTo",
            "baseName": "moveTo",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CustomFieldReplacement.attributeTypeMap;
    }
}

