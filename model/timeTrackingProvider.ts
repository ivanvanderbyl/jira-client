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
* Details about the time tracking provider.
*/
export class TimeTrackingProvider {
    /**
    * The key for the time tracking provider. For example, _JIRA_.
    */
    'key': string;
    /**
    * The name of the time tracking provider. For example, _JIRA provided time tracking_.
    */
    'name'?: string;
    /**
    * The URL of the configuration page for the time tracking provider app. For example, _/example/config/url_. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TimeTrackingProvider.attributeTypeMap;
    }
}

