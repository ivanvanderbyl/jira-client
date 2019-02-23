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

import { SimpleLink } from './simpleLink';

/**
* Details a link group, which defines issue operations.
*/
export class LinkGroup {
    'id'?: string;
    'styleClass'?: string;
    'header'?: SimpleLink;
    'weight'?: number;
    'links'?: Array<SimpleLink>;
    'groups'?: Array<LinkGroup>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "styleClass",
            "baseName": "styleClass",
            "type": "string"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "SimpleLink"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<SimpleLink>"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<LinkGroup>"
        }    ];

    static getAttributeTypeMap() {
        return LinkGroup.attributeTypeMap;
    }
}
