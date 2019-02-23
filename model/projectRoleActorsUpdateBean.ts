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


export class ProjectRoleActorsUpdateBean {
    /**
    * The ID of the project role. Use [Get all project roles](#api-api-3-role-get) to get a list of project role IDs.
    */
    'id'?: number;
    /**
    * The actors to add to the project role for the project. Provide the group name or account ID. User key may be provided instead of account ID when not in GDPR-strict mode, however this is deprecated behavior. Add groups using `atlassian-group-role-actor`. Add users using `atlassian-user-role-actor`.
    */
    'categorisedActors'?: { [key: string]: Array<string>; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "categorisedActors",
            "baseName": "categorisedActors",
            "type": "{ [key: string]: Array<string>; }"
        }    ];

    static getAttributeTypeMap() {
        return ProjectRoleActorsUpdateBean.attributeTypeMap;
    }
}

