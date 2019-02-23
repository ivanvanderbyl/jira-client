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
* The schema of a field.
*/
export class JsonTypeBean {
    /**
    * The data type of the field.
    */
    'type': string;
    /**
    * When the data type is an array, the name of the field items within the array.
    */
    'items'?: string;
    /**
    * If the field is a system field, the name of the field.
    */
    'system'?: string;
    /**
    * If the field is a custom field, the URI of the field.
    */
    'custom'?: string;
    /**
    * If the field is a custom field, the custom ID of the field.
    */
    'customId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "string"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "string"
        },
        {
            "name": "custom",
            "baseName": "custom",
            "type": "string"
        },
        {
            "name": "customId",
            "baseName": "customId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return JsonTypeBean.attributeTypeMap;
    }
}

