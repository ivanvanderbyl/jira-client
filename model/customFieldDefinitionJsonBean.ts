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


export class CustomFieldDefinitionJsonBean {
    /**
    * The name of the custom field, which is displayed in the UI. This is not the unique identifier.
    */
    'name': string;
    /**
    * The description of the custom field, which is displayed in the UI.
    */
    'description'?: string;
    /**
    * The type of the custom field. For example, _com.atlassian.jira.plugin.system.customfieldtypes:grouppicker_.  *   `cascadingselect`: Allows multiple values to be selected using two select lists *   `datepicker`: Stores a date using a picker control *   `datetime`: Stores a date with a time component *   `float`: Stores and validates a numeric (floating point) input *   `grouppicker`: Stores a user group using a picker control *   `importid`: A read-only field that stores the previous ID of the issue from the system that it was imported from *   `labels`: Stores labels *   `multicheckboxes`: Stores multiple values using checkboxes *   `multigrouppicker`: Stores multiple user groups using a picker control *   `multiselect`: Stores multiple values using a select list *   `multiuserpicker`: Stores multiple users using a picker control *   `multiversion`: Stores multiple versions from the versions available in a project using a picker control *   `project`: Stores a project from a list of projects that the user is permitted to view *   `radiobuttons`: Stores a value using radio buttons *   `readonlyfield`: Stores a read-only text value, which can only be populated via the API *   `select`: Stores a value from a configurable list of options *   `textarea`: Stores a long text string using a multiline text area *   `textfield`: Stores a text string using a single line text box *   `url`: Stores a URL *   `userpicker`: Stores a user using a picker control *   `version`: Stores a version using a picker control
    */
    'type': CustomFieldDefinitionJsonBean.TypeEnum;
    /**
    * The searcher defines the way the field is searched in Jira. For example, _com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher_.   The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):  *   `cascadingselect`: `cascadingselectsearcher` *   `datepicker`: `daterange` *   `datetime`: `datetimerange` *   `float`: `exactnumber` or `numberrange` *   `grouppicker`: `grouppickersearcher` *   `importid`: `exactnumber` or `numberrange` *   `labels`: `labelsearcher` *   `multicheckboxes`: `multiselectsearcher` *   `multigrouppicker`: `multiselectsearcher` *   `multiselect`: `multiselectsearcher` *   `multiuserpicker`: `userpickergroupsearcher` *   `multiversion`: `versionsearcher` *   `project`: `projectsearcher` *   `radiobuttons`: `multiselectsearcher` *   `readonlyfield`: `textsearcher` *   `select`: `multiselectsearcher` *   `textarea`: `textsearcher` *   `textfield`: `textsearcher` *   `url`: `exacttextsearcher` *   `userpicker`: `userpickergroupsearcher` *   `version`: `versionsearcher`
    */
    'searcherKey': CustomFieldDefinitionJsonBean.SearcherKeyEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomFieldDefinitionJsonBean.TypeEnum"
        },
        {
            "name": "searcherKey",
            "baseName": "searcherKey",
            "type": "CustomFieldDefinitionJsonBean.SearcherKeyEnum"
        }    ];

    static getAttributeTypeMap() {
        return CustomFieldDefinitionJsonBean.attributeTypeMap;
    }
}

export namespace CustomFieldDefinitionJsonBean {
    export enum TypeEnum {
        Cascadingselect = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect',
        Datepicker = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:datepicker',
        Datetime = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:datetime',
        Float = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:float',
        Grouppicker = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:grouppicker',
        Importid = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:importid',
        Labels = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:labels',
        Multicheckboxes = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes',
        Multigrouppicker = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker',
        Multiselect = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:multiselect',
        Multiuserpicker = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker',
        Multiversion = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:multiversion',
        Project = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:project',
        Radiobuttons = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons',
        Readonlyfield = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield',
        Select = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:select',
        Textarea = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:textarea',
        Textfield = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:textfield',
        Url = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:url',
        Userpicker = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:userpicker',
        Version = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:version'
    }
    export enum SearcherKeyEnum {
        Cascadingselectsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher',
        Daterange = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:daterange',
        Datetimerange = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange',
        Exactnumber = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber',
        Exacttextsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher',
        Grouppickersearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher',
        Labelsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher',
        Multiselectsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher',
        Numberrange = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange',
        Projectsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher',
        Textsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher',
        Userpickergroupsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher',
        Versionsearcher = <any> 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher'
    }
}