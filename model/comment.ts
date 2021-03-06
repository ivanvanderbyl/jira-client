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

import { EntityProperty } from './entityProperty';
import { UserDetails } from './userDetails';
import { Visibility } from './visibility';

/**
* A comment.
*/
export class Comment {
    /**
    * The URL of the comment.
    */
    'self'?: string;
    /**
    * The ID of the comment.
    */
    'id'?: string;
    'author'?: UserDetails;
    /**
    * The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).
    */
    'body'?: any;
    /**
    * The rendered version of the comment.
    */
    'renderedBody'?: string;
    'updateAuthor'?: UserDetails;
    /**
    * The date and time at which the comment was created.
    */
    'created'?: Date;
    /**
    * The date and time at which the comment was updated last.
    */
    'updated'?: Date;
    'visibility'?: Visibility;
    /**
    * Indicates whether the comment is visible in Jira Service Desk. Optional on create and update. Defaults to true. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on.
    */
    'jsdPublic'?: boolean;
    /**
    * A list of comment properties. Optional on create and update.
    */
    'properties'?: Array<EntityProperty>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "UserDetails"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "any"
        },
        {
            "name": "renderedBody",
            "baseName": "renderedBody",
            "type": "string"
        },
        {
            "name": "updateAuthor",
            "baseName": "updateAuthor",
            "type": "UserDetails"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Visibility"
        },
        {
            "name": "jsdPublic",
            "baseName": "jsdPublic",
            "type": "boolean"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<EntityProperty>"
        }    ];

    static getAttributeTypeMap() {
        return Comment.attributeTypeMap;
    }
}

