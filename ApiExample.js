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
            "title": "Grossmont Union High School",
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
                    "address": "1100 Murray Dr.",
                    "address2": null,
                    "city": "El Cajon",
                    "state": "CO",
                    "zip": 92020,
                    "zip4": null,
                    "coordinates": "(32.780582, -116.986118)",
                    "phone": 16196686000,
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
                    "value": "http://www.guhsd.net/"
                },
                {
                    "id": 2,
                    "type": "facebook.url",
                    "value": "https://www.facebook.com/pages/Grossmont-High-School/103777576327800"
                },
                {
                    "id": 3,
                    "type": "twitter.url",
                    "value": "https://twitter.com/guhsdtweet"
                }
            ],
            "blocks": [
                {
                    "id": 1,
                    "type": "message",
                    "items": [
                        {
                            "title": "About Grossmont Union",
                            "message": "The Grossmont Union High School District provides education to students in grades 9-12 and is located in the eastern portion of San Diego County. The District was established in 1920 and encompasses an area of approximately 465 square miles, including all of the cities of El Cajon, Santee and Lemon Grove, most of the city of La Mesa, a small portion of the city of San Diego, and the unincorporated areas of Alpine, Dulzura, Jamul, Lakeside, and Spring Valley.",
                            "url": "http://www.guhsd.net/",
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
                    "embedUrl": "https://www.youtube.com/embed/xdl0UWk-1FQ?modestbranding=1&amp;showinfo=0&amp;rel=0"
                },
                {
                    "id": 3,
                    "type": "eventlist",
                    "title": "Featured Events",
                    "url": "http://www.rossmontessori.org/calendar/f3eb4194-d7df-4f3a-8e8d-5b32e77022ea",
                    "items": [
                        {
                            "title": "El Capitan Global Language and Leadership Program Receives Excellence in Innovation Award",
                            "description": "The East County Schools Federal Credit Union established an Excellence in Innovation and Collaboration Award to recognize school site efforts that have resulted in innovative collaboration that benefits the students of the district. The award recognizes those who have developed and implemented a program that highlights an innovative example of collaboration among multiple groups with evidenced success.",
                            "url": null,
                            "attachments": false,
                            "location": "",
                            "allDay": false,
                            "multiDay": false,
                            "timezone": "America/Denver",
                            "start": "2016-11-18 09:30:00",
                            "end": "2016-11-18 10:30:00"
                        },
                        {
                            "title": "Mount Miguel Girls Attend Business Conference for Women",
                            "description": "On Thursday November 3, 2016, a group of 15 girls from Mount Miguel High School's Business Academy attended the Connecting Women to Power Business Conference. They were accompanied by their Principal Dr. Kimberlee Hedrick. At the conference students heard from keynote speaker and NASA Astronaut Heidemarie Stefanyshyn-Piper, who spoke about her perseverance in achieving her dream of becoming an astronaut.",
                            "url": null,
                            "attachments": false,
                            "location": "RMS, 109 Lewies Lane, Carbondale, CO 81623",
                            "allDay": true,
                            "multiDay": false,
                            "timezone": "America/Denver",
                            "start": "2016-11-03 00:00:00",
                            "end": "2016-11-03 00:00:00"
                        },
                        {
                            "title": "Santana Students Participate in Architectural Heritage Tour",
                            "description": "Digital Fabrication students from Santana High School went on a field trip to Balboa Park on Friday, November 4, to see how the Spanish Revival architectural style of buildings has influenced famous buildings throughout America. The students are creating their own digitally fabricated buildings using some of the architectural features seen in Balboa Park.",
                            "url": "https://www.nps.gov/index.htm",
                            "attachments": false,
                            "location": "Balboa Park",
                            "allDay": true,
                            "multiDay": true,
                            "timezone": "America/Denver",
                            "start": "2016-11-04 00:00:00",
                            "end": "2016-11-04 00:00:00"
                        },
                        {
                            "title": "Mount Miguel Medical Academy Seniors Visit Avondale Elementary",
                            "description":"On Wednesday, November 9, Superintendent Glover, Principal Hedrick and district health pathways coordinator, Heather Peterson visited Mount Miguel High School Science teacher and Medical Academy Coordinator Bridget DeSonia's classroom. ",
                            "url": null,
                            "attachments": false,
                            "location": null,
                            "allDay": true,
                            "multiDay": false,
                            "timezone": "America/Denver",
                            "start": "2016-11-09 00:00:00",
                            "end": "2016-11-09 00:00:00"
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
                            "title": "FutureForward",
                            "url": "http://futureforward.guhsd.net/",
                            "image": "http://www.guhsd.net/_/rsrc/1478538847232/home/LCAP-Button17.png"
                        },
                        {
                            "title":"Transport Information",
                            "url":"http://www.guhsd.net/departments/business-services/transportation",
                            "image":"http://www.guhsd.net/_/rsrc/1478538847231/home/Bus%20for%20Website.jpg"
                        },
                        {
                            "title":"Common Core",
                            "url":"http://www.guhsd.net/departments/educational-services/curriculum/common-core",
                            "image":"http://www.guhsd.net/_/rsrc/1478538847231/home/CommonCore-Button.png"
                        },
                        {
                            "title":"Event Calendar",
                            "url":"http://www.guhsd.net/home/calendars/monthly-calendar",
                            "image":"http://www.guhsd.net/_/rsrc/1478538847538/home/event_calendar.png"
                        },
                        {
                            "title":"Campus Portal",
                            "url":"https://grossmontca.infinitecampus.org/campus/portal/grossmont.jsp",
                            "image":"http://www.guhsd.net/_/rsrc/1478538847539/home/grossmont-portal.png"

                        }
                    ]
                },
                {
                    "id": 6,
                    "type": "staffdirectory",
                    "items": [
                        {
                            "title": "Language",
                            "url": "http://www.google.com",
                            "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                            "teachers": [
                                {
                                    "title": "Rob Stark",
                                    "subject": "English",
                                    "url": "http://www.google.com",
                                    "image": "http://airportrun.it/wp-content/uploads/2014/08/team3.jpg",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Arya Stark",
                                    "subject": "French",
                                    "url": "http://www.google.com",
                                    "image": "http://designingmedia.com/html/genuine/demos/02_team.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Jhon Snow",
                                    "subject": "Hindi",
                                    "url": "http://www.google.com",
                                    "image": "http://wpidiots.com/html/writic/red-writic-template/css/img/demo-images/avatar1.jpg",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Jhon Snow",
                                    "subject": "Hindi",
                                    "url": "http://www.google.com",
                                    "image": "http://gridgum.com/templates/free-themes/store/images/testimonials/1.jpg",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Sansa Stark",
                                    "subject": "Japanese",
                                    "url": "http://www.google.com",
                                    "image": "http://designingmedia.com/html/genuine/demos/02_team.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                }
                            ]
                        },
                        {
                            "title": "Mathematics",
                            "url": "http://www.google.com",
                            "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                            "teachers": [
                                {
                                    "title": "Rob Stark",
                                    "subject": "Algebra",
                                    "url": "http://www.google.com",
                                    "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Arya Stark",
                                    "subject": "Trignometry",
                                    "url": "http://www.google.com",
                                    "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Jhon Snow",
                                    "subject": "Permutations",
                                    "url": "http://www.google.com",
                                    "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Jhon Snow",
                                    "subject": "Hindi",
                                    "url": "http://www.google.com",
                                    "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Sansa Stark",
                                    "subject": "Combinations",
                                    "url": "http://www.google.com",
                                    "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                }
                            ]
                        },
                        {
                            "title": "Physics",
                            "url": "http://www.google.com",
                            "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                            "teachers": [
                                {
                                    "title": "Rob Stark",
                                    "subject": "Kinematics",
                                    "url": "http://www.google.com",
                                    "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Arya Stark",
                                    "subject": "Dynamics",
                                    "url": "http://www.google.com",
                                    "image": "http://designingmedia.com/html/genuine/demos/02_team.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Jhon Snow",
                                    "subject": "Hindi",
                                    "url": "http://www.google.com",
                                    "image": "http://wpidiots.com/html/writic/red-writic-template/css/img/demo-images/avatar1.jpg",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Jhon Snow",
                                    "subject": "Thermodynamics",
                                    "url": "http://www.google.com",
                                    "image": "http://gridgum.com/templates/free-themes/store/images/testimonials/1.jpg",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                },
                                {
                                    "title": "Sansa Stark",
                                    "subject": "Modern Physics",
                                    "url": "http://www.google.com",
                                    "image": "https://parakeetweb.s3.amazonaws.com/images/stickers/Stickers/Pancakes.png",
                                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
                                }
                            ]
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
