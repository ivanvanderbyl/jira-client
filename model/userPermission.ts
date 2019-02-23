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
* Details of a permission and its availability to a user.
*/
export class UserPermission {
    /**
    * The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-api-3-permissions-get) to get the list of permissions.
    */
    'id'?: string;
    /**
    * The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-api-3-permissions-get) to get the list of permissions.
    */
    'key'?: string;
    /**
    * The name of the permission.
    */
    'name'?: string;
    /**
    * The type of the permission.
    */
    'type'?: UserPermission.TypeEnum;
    /**
    * The description of the permission.
    */
    'description'?: string;
    /**
    * Indicates whether the permission is available to the user in the queried context.
    */
    'havePermission'?: boolean;
    /**
    * Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the ``permissions `parameter of [Get my permissions](#api-api-3-mypermissions-get). Deprecated keys are not returned by [Get all permissions](#api-api-3-permissions-get).` ``
    */
    'deprecatedKey'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UserPermission.TypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "havePermission",
            "baseName": "havePermission",
            "type": "boolean"
        },
        {
            "name": "deprecatedKey",
            "baseName": "deprecatedKey",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UserPermission.attributeTypeMap;
    }
}

export namespace UserPermission {
    export enum TypeEnum {
        GLOBAL = <any> 'GLOBAL',
        PROJECT = <any> 'PROJECT'
    }
}
