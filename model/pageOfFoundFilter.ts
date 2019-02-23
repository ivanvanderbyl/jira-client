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

import { FoundFilter } from './foundFilter';

/**
* A page of items.
*/
export class PageOfFoundFilter {
    /**
    * The URL of the page.
    */
    'self'?: string;
    /**
    * If there is another page of results, the URL of the next page.
    */
    'nextPage'?: string;
    /**
    * The maximum number of items that could be returned.
    */
    'maxResults'?: number;
    /**
    * The index of the first item returned.
    */
    'startAt'?: number;
    /**
    * The number of items returned.
    */
    'total'?: number;
    /**
    * Indicates whether this is the last page.
    */
    'isLast'?: boolean;
    /**
    * The list of items.
    */
    'values'?: Array<FoundFilter>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "self",
            "baseName": "self",
            "type": "string"
        },
        {
            "name": "nextPage",
            "baseName": "nextPage",
            "type": "string"
        },
        {
            "name": "maxResults",
            "baseName": "maxResults",
            "type": "number"
        },
        {
            "name": "startAt",
            "baseName": "startAt",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "isLast",
            "baseName": "isLast",
            "type": "boolean"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<FoundFilter>"
        }    ];

    static getAttributeTypeMap() {
        return PageOfFoundFilter.attributeTypeMap;
    }
}

