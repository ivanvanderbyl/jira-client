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
* An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).
*/
export class EntityProperty {
    /**
    * The key of the property. Required on create and update.
    */
    'key'?: string;
    /**
    * The value of the property. Required on create and update.
    */
    'value'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return EntityProperty.attributeTypeMap;
    }
}

