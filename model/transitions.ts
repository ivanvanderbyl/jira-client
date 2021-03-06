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

import { Transition } from './transition';

/**
* List of issue transitions.
*/
export class Transitions {
    /**
    * Expand options that include additional transitions details in the response.
    */
    'expand'?: string;
    /**
    * List of issue transitions.
    */
    'transitions'?: Array<Transition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expand",
            "baseName": "expand",
            "type": "string"
        },
        {
            "name": "transitions",
            "baseName": "transitions",
            "type": "Array<Transition>"
        }    ];

    static getAttributeTypeMap() {
        return Transitions.attributeTypeMap;
    }
}

