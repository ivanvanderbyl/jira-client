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
* Details of functions that can be used in advanced searches.
*/
export class FunctionReferenceData {
    /**
    * The function identifier.
    */
    'value'?: string;
    /**
    * The display name of the function.
    */
    'displayName'?: string;
    /**
    * Indicates whether the function can take a list of arguments.
    */
    'isList'?: string;
    /**
    * The data types returned by the function.
    */
    'types'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "isList",
            "baseName": "isList",
            "type": "string"
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return FunctionReferenceData.attributeTypeMap;
    }
}

