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

import { PermissionHolder } from './permissionHolder';

/**
* Details about a permission granted to a user or group.
*/
export class PermissionGrant {
    /**
    * The ID of the permission granted details.
    */
    'id'?: number;
    /**
    * The URL of the permission granted details.
    */
    'self'?: string;
    /**
    * The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. For more information, see _Holder_ in [Get all permission schemes](#api-api-3-permissionscheme-get).
    */
    'holder'?: PermissionHolder;
    /**
    * The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. For more information about the built-in permissions, see _Permissions_ in [Get all permission schemes](#api-api-3-permissionscheme-get). For more information about custom permissions, see the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation.
    */
    'permission'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "holder",
            "baseName": "holder",
            "type": "PermissionHolder"
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PermissionGrant.attributeTypeMap;
    }
}

