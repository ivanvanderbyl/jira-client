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
* Bulk operation filter details.
*/
export class IssueFilterForBulkPropertyDelete {
    /**
    * List of issues to perform the bulk delete operation on.
    */
    'entityIds'?: Array<number>;
    /**
    * The value of properties to perform the bulk operation on.
    */
    'currentValue'?: any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entityIds",
            "baseName": "entityIds",
            "type": "Array<number>"
        },
        {
            "name": "currentValue",
            "baseName": "currentValue",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return IssueFilterForBulkPropertyDelete.attributeTypeMap;
    }
}

