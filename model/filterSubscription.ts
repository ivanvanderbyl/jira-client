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

import { GroupName } from './groupName';
import { User } from './user';

/**
* Details of a user or group subscribing to a filter.
*/
export class FilterSubscription {
    /**
    * The ID of the filter subscription.
    */
    'id'?: number;
    'user'?: User;
    'group'?: GroupName;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "GroupName"
        }    ];

    static getAttributeTypeMap() {
        return FilterSubscription.attributeTypeMap;
    }
}

