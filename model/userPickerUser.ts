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
* A user found in a search.
*/
export class UserPickerUser {
    /**
    * The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, _384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192_.
    */
    'accountId'?: string;
    /**
    * This property has been deprecated in favour of `accountId` due to privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The username of the user.
    */
    'name'?: string;
    /**
    * This property has been deprecated in favour of `accountId` due to privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The key of the user.
    */
    'key'?: string;
    /**
    * The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag.
    */
    'html'?: string;
    /**
    * The display name of the user. Depending on the user’s privacy setting, this may be returned as null.
    */
    'displayName'?: string;
    /**
    * The avatar URL of the user.
    */
    'avatarUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "avatarUrl",
            "baseName": "avatarUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserPickerUser.attributeTypeMap;
    }
}

