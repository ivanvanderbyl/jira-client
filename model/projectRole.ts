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

import { RoleActor } from './roleActor';
import { Scope } from './scope';

/**
* Details about the roles in a project.
*/
export class ProjectRole {
    /**
    * The URL the project role details.
    */
    'self'?: string;
    /**
    * The name of the project role.
    */
    'name'?: string;
    /**
    * The ID of the project role.
    */
    'id'?: number;
    /**
    * The description of the project role.
    */
    'description'?: string;
    /**
    * The list of users who act in this role.
    */
    'actors'?: Array<RoleActor>;
    /**
    * The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
    */
    'scope'?: Scope;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "actors",
            "baseName": "actors",
            "type": "Array<RoleActor>"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "Scope"
        }    ];

    static getAttributeTypeMap() {
        return ProjectRole.attributeTypeMap;
    }
}

