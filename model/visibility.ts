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
* The group or role to which this item is visible.
*/
export class Visibility {
    /**
    * Indicates whether visibility of this item is restricted to a group or role.
    */
    'type'?: Visibility.TypeEnum;
    /**
    * The name of the group or role to which visibility of this item is restricted.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Visibility.TypeEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Visibility.attributeTypeMap;
    }
}

export namespace Visibility {
    export enum TypeEnum {
        Group = <any> 'group',
        Role = <any> 'role'
    }
}
