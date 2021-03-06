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
* Details of an operation to perform on a field.
*/
export class FieldUpdateOperation {
    /**
    * A map containing the name of a field and the value to add to it.
    */
    'add'?: any;
    /**
    * A map containing the name of a field and the value to set in it.
    */
    'set'?: any;
    /**
    * A map containing the name of a field and the value to removed from it.
    */
    'remove'?: any;
    /**
    * A map containing the name of a field and the value to edit in it.
    */
    'edit'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "add",
            "baseName": "add",
            "type": "any"
        },
        {
            "name": "set",
            "baseName": "set",
            "type": "any"
        },
        {
            "name": "remove",
            "baseName": "remove",
            "type": "any"
        },
        {
            "name": "edit",
            "baseName": "edit",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return FieldUpdateOperation.attributeTypeMap;
    }
}

