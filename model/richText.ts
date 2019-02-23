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


export class RichText {
    'emptyAdf'?: boolean;
    'valueSet'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "emptyAdf",
            "baseName": "emptyAdf",
            "type": "boolean"
        },
        {
            "name": "valueSet",
            "baseName": "valueSet",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RichText.attributeTypeMap;
    }
}

