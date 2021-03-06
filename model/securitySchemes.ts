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

import { SecurityScheme } from './securityScheme';

/**
* List of security schemes.
*/
export class SecuritySchemes {
    /**
    * List of security schemes.
    */
    'issueSecuritySchemes'?: Array<SecurityScheme>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issueSecuritySchemes",
            "baseName": "issueSecuritySchemes",
            "type": "Array<SecurityScheme>"
        }    ];

    static getAttributeTypeMap() {
        return SecuritySchemes.attributeTypeMap;
    }
}

