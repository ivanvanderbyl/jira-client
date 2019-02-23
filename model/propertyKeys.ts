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

import { PropertyKey } from './propertyKey';

/**
* List of property keys.
*/
export class PropertyKeys {
    /**
    * Property key details.
    */
    'keys'?: Array<PropertyKey>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<PropertyKey>"
        }    ];

    static getAttributeTypeMap() {
        return PropertyKeys.attributeTypeMap;
    }
}

