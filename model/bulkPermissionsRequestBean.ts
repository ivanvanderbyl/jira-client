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

import { BulkProjectPermissions } from './bulkProjectPermissions';

/**
* Details of global permissions to look up and project permissions with associated projects and issues to look up.
*/
export class BulkPermissionsRequestBean {
    /**
    * Project permissions with associated projects and issues to look up.
    */
    'projectPermissions'?: Array<BulkProjectPermissions>;
    /**
    * Global permissions to look up.
    */
    'globalPermissions'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projectPermissions",
            "baseName": "projectPermissions",
            "type": "Array<BulkProjectPermissions>"
        },
        {
            "name": "globalPermissions",
            "baseName": "globalPermissions",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return BulkPermissionsRequestBean.attributeTypeMap;
    }
}

