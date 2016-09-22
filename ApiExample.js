/*jslint browser: true, plusplus: true*/
/*global $, jQuery, alert, console, SchoolBlocksApp*/

SchoolBlocksApp.bundles.app = true;

SchoolBlocksApp.Api = function (baseUrl) {
    "use strict";
    var api = this;

    // These are the root object types that define what type of ID is being passed.  All objects fall into one of
    // these categories.  Anyone using the API should reference the variable, not the value.
    api.rootTypes = {
        ORGANIZATION: "organizations",
        PERSON: "people"
    };

    api.fieldNames = {
        BLOCK: '_blockHTML',
        MODAL: '_modalHTML',
        AD: '_adHTML'
    };

    api.version = 2;

    api.urlPrefix = '/_!_API_!_';

    // at this time, the url should be an absolute path like '/'.  Eventually, it can be a hostname too
    if (baseUrl === undefined) {
        api.baseUrl = api.urlPrefix;
    } else {
        api.baseUrl = baseUrl;
    }

    api.baseUrl += "/" + api.version;

    api.defaultRequestOptions = {
        crossDomain: false,
        dataType: 'json' // response type from server
    };

    api.sampleOrganizations = {
        "dba3511f-32ef-486f-ade2-7540ae28922e": {
            "id": "dba3511f-32ef-486f-ade2-7540ae28922e",
            "parent_id": "root",
            "user_id": "root",
            "title": "Ross Montessori School",
            "created": "2015-02-11 06:44:28.098659+00",
            "modified": "2016-08-15 22:52:10.147496+00",
            "type": "school",
            "is_private": false,
            "deleted": false,
            "path": "root.dba3511f32ef486fade27540ae28922e",
            "is_live": true,
            "url_path": null,
            "category_ids": "{2}",
            "locations": [
                {
                    "id": 1191,
                    "address": "407 MERRILL AVE",
                    "address2": null,
                    "city": "CARBONDALE",
                    "state": "CO",
                    "zip": 23200,
                    "zip4": null,
                    "coordinates": "(39.404388,-107.211195)",
                    "phone": 9709637198,
                    "is_primary": true,
                    "sponsor_id": null,
                    "organization_id": "dba3511f-32ef-486f-ade2-7540ae28922e",
                    "fax": null
                }
            ],
            "thirdPartyLinks": [
                {
                    "id": 1,
                    "type": "url",
                    "value": "http://www.rossmontessori.org"
                },
                {
                    "id": 2,
                    "type": "facebook.url",
                    "value": "https://www.facebook.com/#!/pages/Ross-Montessori-Charter-School/123178844400497"
                },
                {
                    "id": 3,
                    "type": "twitter.url",
                    "value": "https://twitter.com/RossMontessori"
                }
            ],
            "blocks": [
                {
                    "id": 1,
                    "type": "message",
                    "items": [
                        {
                            "title": "About Ross Montessori",
                            "message": "The mission of Ross Montessori School is to prepare compassionate life-long learners to have a positive impact on the world.We envision a time when Ross Montessori School will be an exemplary educational institution and recognized as such all over the world. Educators from all backgrounds will observe and learn from our model, grounded in the Montessori Method. Parents will choose our school over any other with a steadfast belief in the value we create for the children, families and communities we serve.",
                            "url": "http://www.rossmontessori.org",
                            "image": null,
                            "displayTextUnderImage": null
                        }
                    ]
                },
                {
                    "id": 2,
                    "type": "video",
                    "title": "SchoolBlocks Intro",
                    "url": "https://youtu.be/xdl0UWk-1FQ",
                    "embedUrl": "https://youtu.be/xdl0UWk-1FQ?modestbranding=1&showinfo=0&rel=0"
                },
                {
                    "id": 3,
                    "type": "eventlist",
                    "title": "Featured Events",
                    "url": "http://www.rossmontessori.org/calendar/f3eb4194-d7df-4f3a-8e8d-5b32e77022ea",
                    "items": [
                        {
                            "title": "Beginning of the Year Party",
                            "description": "Come join us at the <em>Beginning of the Year Party!</em>",
                            "url": null,
                            "attachments": false,
                            "location": "RMS, 109 Lewies Lane, Carbondale, CO 81623",
                            "allDay": false,
                            "multiDay": false,
                            "timezone": "America/Denver",
                            "start": "2016-10-21 09:30:00",
                            "end": "2016-10-21 10:30:00"
                        },
                        {
                            "title": "Thanksgiving",
                            "description": null,
                            "url": null,
                            "attachments": false,
                            "location": "RMS, 109 Lewies Lane, Carbondale, CO 81623",
                            "allDay": true,
                            "multiDay": false,
                            "timezone": "America/Denver",
                            "start": "2016-11-24 00:00:00",
                            "end": "2016-11-24 00:00:00"
                        },
                        {
                            "title": "Winter Break",
                            "description": "We have a couple of weeks off.  Yippee!",
                            "url": "https://www.nps.gov/index.htm",
                            "attachments": false,
                            "location": "RMS, 109 Lewies Lane, Carbondale, CO 81623",
                            "allDay": true,
                            "multiDay": true,
                            "timezone": "America/Denver",
                            "start": "2016-12-20 00:00:00",
                            "end": "2017-01-04 00:00:00"
                        },
                        {
                            "title": "Christmas",
                            "description": null,
                            "url": null,
                            "attachments": false,
                            "location": null,
                            "allDay": true,
                            "multiDay": false,
                            "timezone": "America/Denver",
                            "start": "2016-12-25 00:00:00",
                            "end": "2016-12-25 00:00:00"
                        }
                    ]
                },
                {
                    "id": 4,
                    "type": "newsstream",
                    "items": [
                        {
                            "title": "Ross Kids are the Smartest!",
                            "description": "This great website shows how Ross kids are the smartest.",
                            "url": "http://www.rossmontessori.org",
                            "image": "https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/14310317_1281527738565596_6564701507888292348_o.jpg",
                            "timezone": "America/Denver",
                            "timestamp": "2016-09-11 09:30:32"
                        },
                        {
                            "title": "The Middle School is off for their camping trip. Have a great time everyone!",
                            "description": null,
                            "url": "https://www.facebook.com/rossmontessori/photos/a.204351582949889.65495.123178844400497/1285843474800689/?type=3&theater",
                            "image": "https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/14324283_1285843474800689_6177427745886358701_o.jpg",
                            "timezone": "America/Denver",
                            "timestamp": "2016-09-04 09:30:32"
                        },
                        {
                            "title": "Montessori Education & My Child",
                            "description": null,
                            "url": "http://amshq.org/Family-Resources/Montessori-Education-and-Your-Child",
                            "image": null,
                            "timezone": "America/Denver",
                            "timestamp": "2016-09-01 14:10:00"
                        }
                    ]
                },
                {
                    "id": 5,
                    "type": "quicklink",
                    "items": [
                        {
                            "title": "Pancakes",
                            "url": "http://www.google.com",
                            "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png"
                        },
                        {
                            "title": "Waffles",
                            "url": "http://www.bing.com",
                            "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Waffles.png"
                        },
                        {
                            "title": "BLT Sandwich",
                            "url": "http://www.duckduckgo.com",
                            "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/BLT%20Sandwich.png"
                        }
                    ]
                }
            ]
        }
    };
};



SchoolBlocksApp.Api.prototype._request = function (urlPath, ajaxSettings) {
    "use strict";
    var api = this,
        url;

    /*
     API URLs:
     VERB   PATH                            RETURN
     GET    /organizations/<id>?fields=ad,block,modal,permissions  permissions modal HTML (data object later)
     GET    /organizations/<id>/blocks/<id>   all details (can ask ad, block, or modal HTML to be returned)
     GET    /organizations/<id>/blocks/<id>/items/<id>     a sub item, like a specific event that is part of acalendar (modal HTML)
     GET    /people/<id>                    all details (can ask ad, block, or modal HTML to be returned)
     GET    /people/<id>/common             in common with data (future)
     GET    /people/<id>/permissions        permissions modal HTML
     */

    url = api.baseUrl + urlPath;
    ajaxSettings = $.extend({}, api.defaultRequestOptions, ajaxSettings);
    return $.ajax(url, ajaxSettings);
};

/**
 *
 * @param rootType  One of the SchoolBlocksApp.Api.rootTypes
 * @param id        The actual ID for the object being requested
 * @param subPath
 * @param fields|null
 * @return xhr
 */
SchoolBlocksApp.Api.prototype.view = function (rootType, id, subPath, fields) {
    "use strict";
    var api = this,
        ajaxSettings = {
            method: 'GET',
            data: {}
        },
        url;

    if (typeof fields === 'object') {
        ajaxSettings.data.fields = fields.join(",");
    }

    // GET /<type>/<id>
    url = "/" + rootType + "/" + id;
    if (subPath !== undefined && subPath !== null) {
        url += subPath;
    }
    return api._request(url, ajaxSettings);
};

SchoolBlocksApp.Api.prototype.viewOrganization = function (orgId, blockId, itemId, fields) {
    "use strict";
    var api = this,
        subPath;

    if (blockId !== undefined && blockId !== null) {
        subPath = "/blocks/" + blockId;

        if (itemId !== undefined && itemId !== null) {
            subPath = subPath + "/items/" + itemId;
        }

    }

    if(api.sampleOrganizations.hasOwnProperty(orgId)) {
        var deferred = $.Deferred().resolve(api.sampleOrganizations[orgId]);
        return deferred.promise();
    }

    return api.view(api.rootTypes.ORGANIZATION, orgId, subPath, fields);
};

SchoolBlocksApp.Api.prototype.viewPerson = function (personId, fields) {
    "use strict";
    var api = this;

    return api.view(api.rootTypes.PERSON, personId, null, fields);
};
