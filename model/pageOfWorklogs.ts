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

import { Worklog } from './worklog';

/**
* Paginated list of worklog details
*/
export class PageOfWorklogs {
    /**
    * The index of the first item returned on the page.
    */
    'startAt'?: number;
    /**
    * The maximum number of results that could be on the page.
    */
    'maxResults'?: number;
    /**
    * The number of results on the page.
    */
    'total'?: number;
    /**
    * List of worklogs.
    */
    'worklogs'?: Array<Worklog>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startAt",
            "baseName": "startAt",
            "type": "number"
        },
        {
            "name": "maxResults",
            "baseName": "maxResults",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "worklogs",
            "baseName": "worklogs",
            "type": "Array<Worklog>"
        }    ];

    static getAttributeTypeMap() {
        return PageOfWorklogs.attributeTypeMap;
    }
}

