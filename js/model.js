var Recommendation = function(data,index) {
	// this is my recommendation/place class.
	// I will be passing from google place search (perhaps)
	// data = model.results[i]..
	// could this also be a AJAX request? Am I missing something here on how
	// Google Maps and AJAX Connects?
	this.name = ko.observable(data.name);
	this.placeID = ko.observable(data.place_id);
	this.icon = ko.observable(data.icon);
	this.types = ko.observable(data.types);
	this.location = ko.observable(data.geometry.location);
	// Okay I'm not sure how hiding things will go but I'm going to add this visible property anyways
	this.visible = ko.observable(true);
	this.clicked = ko.observable(false);
	this.index = ko.observable(index);
	//with the place ID in hand, I could go ahead and create a function to do
	// a Place details search and populate the recommendation inside of this constructor
};

// I've been struggling to make the yelp api request work, from my research online, it seems that making a request requiring Oauth2 from clientside javascript is not an encouraged practice. I stumbled across the following code in this github issue discussion https://github.com/Yelp/yelp-api/issues/99
// Also I am using yelp api v2 which is only Oauth1, not sure that one can even make the javascript request using v3. fyi students wont be able to sign up for v2 after april 1st 2017

var auth = {
	consumerKey: 'imbGMl5m7H9J10hAZddqJw',
	consumerSecret: '5RhUMDWit7lbiTl8qbnJfkCbRZ0',
	accessToken: 'aD7mXgyX9Do8cXKXks6EQ7ama4Td6G4g',
	accessTokenSecret: 'I9OlDtXLYIPAcuxi3WUt9dpkoLM',
	serviceProvider: {signatureMethod: 'HMAC-SHA1'}
};

function yelp(name, location){

}

var terms = 'Bovine & Barley';
var location = '29.761133,-95.361722';

var accessor = {
	consumerSecret: auth.consumerSecret,
	tokenSecret: autho.accessTokenSecret
};

var parameters = [];
parameters.push(['term', terms]);
parameters.push(['ll', location]);
parameters.push(['oauth_consumer_key', auth.consumerKey]);
parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
parameters.push(['oauth_token', auth.accessToken]);
parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
parameters.push(['callback', cb]);

var message = {
	'action': 'https://api.yelp.com/v2/search?',
	'method': 'GET',
	'parameters': parameters
};
console.log(message.action);

OAuth.setTimestampAndNonce(message);
OAuth.signatureMethod.sign(message, accessor);

var parameterMap = OAuth.getParameterMap(message.parameters);
console.log(parameterMap);

$.ajax({
	'url': message.action,
	'data': parameterMap,
	'dataType': 'jsonp',
	'jsonpCallback': 'cb',
	'async': 'false',
	'cache': true
})
	.done(function(data, textStats, XMLHttpRequest) {
		console.log(data);
	})
	.fail(function(jqXHR, textStatus, errorThrown) {
		console.log('error[' + errorThrown + ']');
	});

// var jso = new JSO({
// 	providerID: "yelp",
// 	client_id: "zZye2ASIHsyL-n2pzkVvew",
// 	authorization: "Bearer EIe7EsoPfscOIzt0kSm2GxhbOAfF-OUzCQ-Xa94-Sn1dDiul5_6KStKqDvZE6_uF3jKg3bVFELZAsIBkRs-ZY4NjOq3XWZmVmnC-E1GtVQVdEqUNWWN_1jaZ1PS5WHYx",
// });

//yelp
// {
//   "token_type": "Bearer",
//   "expires_in": 15551999,
//   "access_token": "EIe7EsoPfscOIzt0kSm2GxhbOAfF-OUzCQ-Xa94-Sn1dDiul5_6KStKqDvZE6_uF3jKg3bVFELZAsIBkRs-ZY4NjOq3XWZmVmnC-E1GtVQVdEqUNWWN_1jaZ1PS5WHYx"
// }

var model = {
    "html_attributions": [],
    "next_page_token": "CpQCAgEAAHhtNkKbqeNaIpYzkP135SMmdDxNEc4plLvUhootpTjvlq5RywOpKyL8z6EIAxoshDlGPXf_Gpy2LYPhSeBRZmAjMLQWLlY40Ah5LouU--x3vpTPxpJ9rvvhaqjneDM8FPJ5k6ph7NnQTp5pn-6K5H7Wpdz9ACrTjyzn9arzgCuNCZNCoMZ6xvKDbzQWRK5nSPTm9A8Sq-OwsaBbJupjg5KWClaH0ZZ2FBQc8G7t7OKh-trwQdbxj_si7Kz9uRCKk3C7GXsLkaxUIRS--imRdxw9QJqlW45R37KMCqtocXxv9MeTma7tfOF0yxQ1q4e8SefvE7K7xguj4IhNXO67tL0cBfyWz2gr7Jn9kQM9ucZYEhA67JR6YyzhD0N3_-ApX8IDGhRxft9IB9PhHk91S4KGaiUYkuOcgA",
    "results": [
        {
            "geometry": {
                "location": {
                    "lat": 29.761133,
                    "lng": -95.36196299999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7624290802915,
                        "lng": -95.36052521970848
                    },
                    "southwest": {
                        "lat": 29.7597311197085,
                        "lng": -95.36322318029148
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "419f3d52f8d0018d484dae1fafe485803d36e4ef",
            "name": "Bovine & Barley",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 640,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114773087168478514901/photos\">Bovine &amp; Barley</a>"
                    ],
                    "photo_reference": "CoQBdwAAAKybTVkCX8KC9N_3K2uU1xLhDJI3PxyyNJglo2qmpp2Vlr9zzEdfihvRLPKxvH9ub1S48uvZISx2A3fKplgskJ7guieHcZd86U1mRyN7PPDAacDvQCcbTOaz0ifNC7xzjMs_Zp7x265zbMw3T74Jk4eUUc35WeGrP2uSme3jsn3oEhD5-_D-P--F4qIzEY1sGpnRGhT-oLm-5nZBQxsYmfxumgOJI7-kqA",
                    "width": 960
                }
            ],
            "place_id": "ChIJk2m5UCW_QIYRYQ3L4J0i9dA",
            "price_level": 2,
            "rating": 4,
            "reference": "CmRSAAAAzP7V1Vexq8xzQp0xWoB_9vfXVfr6esoPnvMBx9QPdzm2MIIhwb-5iiBJwlg7jySwh6a5lfWuQ9fkuJ7X6Y06i1o7_SYg0iM4hfAO9hB8BXu9UtAMnZ9SqYrysj-0-qgzEhDmDLRK7hSFa2agkQpZ2e5eGhSmmyIQfHeWRThomt7n8Jg78gNJtQ",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "416 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.761269,
                    "lng": -95.361722
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7625802802915,
                        "lng": -95.36033891970848
                    },
                    "southwest": {
                        "lat": 29.7598823197085,
                        "lng": -95.3630368802915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "7d67ad526aaa59e79277dd11c58e9d89c9c3db95",
            "name": "The Commoner & The Boulevardier",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 2321,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105976331058990070645/photos\">WOLFGANG DEMINO</a>"
                    ],
                    "photo_reference": "CoQBdwAAAKzIzL2Ww5YBof6W-5SA9i3A2puQ9Q07yk-aQyZL08ZNkXM3GaLB7J8-WLgteedigiVw9oDUhpB7YgF7V_jatyEHLehAhMNKNSRBNOdBg2wthCDO2Ihk_C-4kSZkpAjvVjSK1VI4ppTGqFJ7rB_2nTKV9QFPAASyV_2L-Q2CV8h2EhAYmkuGSl_MAlr4tBWdcYsVGhS-KfKP6rfwXMHYohF8Uc4rrRcFCQ",
                    "width": 3648
                }
            ],
            "place_id": "ChIJK5jDWSW_QIYR6xkfhqm69tw",
            "price_level": 2,
            "rating": 4.4,
            "reference": "CmRSAAAAKUIV3z3gWm2cSUUH7wj94jWmXFWoR2Y_He6BK7VsJIBJPUdaGReimU01dehIgq7mG6VjlIWWjK-EVedhKhgzyvXT3i0TviUGui-OkZp1s4iyNHYxyxs-CXytcaU9eukLEhCyETw8rGJHFb6iH39zbFCaGhTJQIEii2AwH1-avvjEUGkOZ-x6PQ",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "410 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.76126,
                    "lng": -95.3624789
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7626653802915,
                        "lng": -95.36125051970849
                    },
                    "southwest": {
                        "lat": 29.75996741970851,
                        "lng": -95.3639484802915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "a5d9c01ec1b721bba7c0aadabb944942b1d9a622",
            "name": "El Big Bad",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 1176,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108458558972428062636/photos\">El Big Bad</a>"
                    ],
                    "photo_reference": "CoQBdwAAADA64QzMTxRpyYmFwFKqj6QKU0qn-_8_9gVtJPblBE2hhHR_LFloJF4ULm7NN3Jorq2g6MJahaqyQBmMEK9kIFVot0BiQoOEAD2VDRvMr0MtQEfIEUbxbnG8SLfCPlapjvH9LFxOtXYEz1K4imQh2XzIut_XXmQMktx8fARmua9oEhAxIG0Dy4bFpnxPYnXdO1JZGhRNlpsJPzkC5WicnrUmO4v5lotKrg",
                    "width": 1176
                }
            ],
            "place_id": "ChIJd5y_VCW_QIYRSdz--xgpUvg",
            "price_level": 1,
            "rating": 3.6,
            "reference": "CmRSAAAAMcmLz9HhIQD5D0j3uEbEahVXxhaeJnb6fYSLaSmqbTxtt2e_TIOoh2fSWRHhquEIIHbnEQnvVsIWZ2PNHceVpdVcr0zJhClF4G37ThVPZ20o08metFGNjKjscrOFJpV8EhBGsSKmZqq3UUSdmWVbN3fVGhTdftcY7sdYV_DIKnEhotSlIkqanA",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "419 Travis Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.76137610000001,
                    "lng": -95.3623881
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7627902802915,
                        "lng": -95.3611553697085
                    },
                    "southwest": {
                        "lat": 29.76009231970851,
                        "lng": -95.3638533302915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "c40f4afef5f6a7ccb50df3618126c8339c011866",
            "name": "Frank's Back Yard",
            "place_id": "ChIJ4wmqVSW_QIYRsqYH2Ds_WEI",
            "reference": "CmRRAAAAlH_EpfIr-WkrAY_j9i7mQacYSrMDORa4eusnfTi1jNNTVpVNi-8sIu8bDRuLWa0vTgo4Aa3MiFanTkGSz8okCBiyCjlRCvcTUMtD-bm4FdUiS95z4cl54bgghSd79XB_EhAUlFIiMmjs_uBLURciYqhEGhRspHoS7JxgEnlpEQpW0tDiGmLp-w",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "413 Travis Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.760658,
                    "lng": -95.36233
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7619556802915,
                        "lng": -95.36089536970849
                    },
                    "southwest": {
                        "lat": 29.7592577197085,
                        "lng": -95.3635933302915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
            "id": "36be5a306590e9c88bbfc0d262c812953b2ea888",
            "name": "Boots n Shoots",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 315,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116008641957553998005/photos\">Boots n Shoots</a>"
                    ],
                    "photo_reference": "CoQBdwAAAAenxtqXVmBOV7VitPzTuXTL6db9x415yquTc0AD19s0uOIM7QGzIcm4K8y00nd6FBx4UfPY1vUUxYwZAKc6j_2r5-q-6i1hcnh1wYadRp7eHil4ld0KhoLf_KEywFVQn8nJlCvjEK6cA583kbcs3hv3goTxb6Eh4yXFcq94BxQ3EhDTctfNuBWr1rc_phWobiZmGhR0YZc3qOCHt_OdkwDYDctGFu0qHA",
                    "width": 851
                }
            ],
            "place_id": "ChIJQ--zTSW_QIYR9W66UeJa-Z0",
            "price_level": 2,
            "rating": 3.9,
            "reference": "CmRSAAAAplFsAPPnjo3Oi9TmNuRY9joreWH7gniDh4XL_nhpdaPBBCvo-1NoVMccScucoiRGExbP3aVsvYnig85htMzvd-b5diJmzseX4t653EanCU5e7FZjfa1Sl_jr_ZNzj9UFEhDnvNjKfVDPw_NSsOFnoWf_GhS1t78cbbDNRVnkWS8Em-PsnirYQA",
            "scope": "GOOGLE",
            "types": [
                "night_club",
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "506 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7605377,
                    "lng": -95.3618803
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7619514302915,
                        "lng": -95.3604794697085
                    },
                    "southwest": {
                        "lat": 29.7592534697085,
                        "lng": -95.3631774302915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "c251bfa17d0527f1d467155892910ad720be9299",
            "name": "The Moonshiners Southern Table + Bar",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 1356,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108227199005771702261/photos\">The Moonshiners Southern Table + Bar</a>"
                    ],
                    "photo_reference": "CoQBdwAAAGepye-6t-rKQ7TPl6ln2vUoc4LTqddRUVDbyuL7lUuZdgLxVb4eSUnnDHvR0TlBTTNezTr6c6p_IMWYFFTpfZpSowTABgAYzkwYsMMD1qsAigGw8zZDMoexnExxLvTEf0cTEiveQ0u2XlAZqd7QxX5UZeycPvZnXbRMDrIlGIpQEhAYqRowZPh0Ke0aYVGBjR2SGhQXUdreKvfIzN3cT34YHnW_8l-KmA",
                    "width": 2048
                }
            ],
            "place_id": "ChIJs1xxRSW_QIYRvgzsZIJbctw",
            "price_level": 2,
            "rating": 3.9,
            "reference": "CmRSAAAAPFd9mDi10BhvfFIBqam6zFCVJOHLJw1yVxNeix0vd-hmC3MD94qgduYcE3vWfnGE5wk-iUnBUKKz6tYmVx6Q42vsPMYtrBTbDxNisHGwfq_BtKXixs1vX6E4oqnypc2cEhDePnwWcvuSdjWjUjQcc6s_GhQxkKOhK2ZQslkCnaIQKidDBpdikg",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "1000 Prairie Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7611854,
                    "lng": -95.36141219999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7625610302915,
                        "lng": -95.3600733697085
                    },
                    "southwest": {
                        "lat": 29.7598630697085,
                        "lng": -95.36277133029151
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "6294c0065c313fdfa2cc551ec87a7b6df0a451be",
            "name": "Live Sports Bar & Grill",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 1519,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115914254178376083608/photos\">Live Sports Bar &amp; Grill</a>"
                    ],
                    "photo_reference": "CoQBdwAAAOqOuNQ8MiaD3_MhzNfY2kSTsayDYA22OWxCleOfnjK7QEiM2c65odT3URjX9H1YhqMNunVjxIM_HFXWWqPcbUoFYWYrXF-SfOauzeIDWGnRC1eJGmsoWpxZX1sgPHUfmrkPUm3SY0yrTwLaz8SMq8Y_Z8HOXLLhcgSNLjJn2TxFEhDUrJCEtP10BVRQcIbaKAIXGhRi-ZdsAoPMdCr5I0GP2TRuHHNb7A",
                    "width": 2700
                }
            ],
            "place_id": "ChIJB0jVXSW_QIYRDtiVUFE7JDk",
            "rating": 4.7,
            "reference": "CmRRAAAARjgvjQSKCgTTtoM_nZmC2lTMTlGelm1naF2jKFcozJ-1_pVCi7I-Eq34XjDyUhD3aksKXcTjnSa0vk3NdbPbd9cLX1-tB6Jplisgr1MU664hfonZhmN2sP_hFnohUwINEhCo14nXoQh25HxhZFAjsn_mGhQvxrh1CKy5up3tRDSGxG1Uc-X3eQ",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "407 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.76041639999999,
                    "lng": -95.36200629999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7617929802915,
                        "lng": -95.36067891970849
                    },
                    "southwest": {
                        "lat": 29.7590950197085,
                        "lng": -95.36337688029151
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "e26130f9289de5d963176a0165dc1181b16a3415",
            "name": "Pure Lounge",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 1536,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102183266543286731718/photos\">Pure Lounge</a>"
                    ],
                    "photo_reference": "CoQBdwAAALBXbSJDzPs3s_APT1edWjdhO1jM3sgn440FO4dtPLAco6ONhqRHNQ6TOLHW1OpdwQtB_20fzh-lGn46f-TCXIp9FToM1zWZHL7iI5DQWkruoV4UqfspZnfG2WQxwPsHN55MasppCMfrAnMuv0PK7oYmTFAzxe-u73Jr7jQav3nBEhBMZT1lPENzEUb80bCUgd98GhR1zpOJm_CHS1A2Hn3jp3y9J1ZYbQ",
                    "width": 2048
                }
            ],
            "place_id": "ChIJ918kRiW_QIYResp-P8oz-18",
            "rating": 4.1,
            "reference": "CmRRAAAAGfE7eJKtcxUAd_MNglw6Nq_IcdU56NU0fVJWULTzxwVI7IG6j6V--iMfAXnDOkjSjz4IeIqm8wDZscY0nwF3fXVMdGnGoFUDpUH1aHs-xRPBj2bLQLzVbPbZ9ICjJqTKEhB-0L5lql1Wmea5JXhENeS-GhSkkDZmDD_Aw661bDJNIpm4aCISvw",
            "scope": "GOOGLE",
            "types": [
                "night_club",
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "505 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.76034529999999,
                    "lng": -95.3620057
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7617250302915,
                        "lng": -95.36070836970849
                    },
                    "southwest": {
                        "lat": 29.7590270697085,
                        "lng": -95.3634063302915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "0804021745dbdf2f6a7f8af86c65106e941bb71b",
            "name": "Latin Fridays Club and Lounge",
            "place_id": "ChIJOVzuSCW_QIYRw8ueBEl3eJw",
            "reference": "CmRSAAAARMNHPj3j9JtEz6YMB0QPDo-DrlCt1wbd6ri66dk8eqXQTfYs0UTfMZ7GCuVaYt6E0TWZ3QTV7ltvwVDJ7_ZL5dK4mXrAzlEV16o9F5d1n2ArE3oUq5qKKsvnZAif24cfEhAPP3oSRn3-krNpSDkjc0lFGhRNFsn5gC4L7n56XQ7HpRwUVvl_jQ",
            "scope": "GOOGLE",
            "types": [
                "night_club",
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "505 Main street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7612001,
                    "lng": -95.36126399999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7626010302915,
                        "lng": -95.35998381970849
                    },
                    "southwest": {
                        "lat": 29.7599030697085,
                        "lng": -95.3626817802915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
            "id": "f728e1b532e64ee7973b07b7c04ee24061df060c",
            "name": "1150 Wines",
            "photos": [
                {
                    "height": 400,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107168959671628841596/photos\">1150 Wines</a>"
                    ],
                    "photo_reference": "CoQBdwAAAO-Wsd5TFFYm3ThUt6vblfil3_ChlKMqBpfGGWSGbOuc_484T2a_Cl8C6fXxZHMqiZs6aYVDpPkzQUN8oUNOjfdRXrcdu2rUe8RoD-yAqJykBjRDeKvy7pCcNlcGxa7e9uFdUnq-yeUEiaQoioUS0e_Z91EMLciHoPW4ChsF2u50EhCFzpn6Eds-7YQ8GSeDLaP7GhSCtLN54bH2Hvep-9GBSq4yrzbZsA",
                    "width": 600
                }
            ],
            "place_id": "ChIJc696XiW_QIYRAzScCI-iVt4",
            "rating": 5,
            "reference": "CmRSAAAA6AYL-LTAoda-MxEx7gjS3jHTQcJZnTmWkmSgXaR3x5dF0bhMRuiei_C_fSFqh3gX4OPU1SeS2TrD6ek7wfhzuKwjT8di_nGhlWCtBTrPSaEPmszFPvCBHYR7VlpCsgM_EhAzdyvGu94fUFpvM1ZUHdt1GhRRZ_YYK8hNSxBwrfEp2WC6Y3S4jA",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "liquor_store",
                "food",
                "store",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "405 Main Street #602, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7604056,
                    "lng": -95.36168339999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7616868302915,
                        "lng": -95.3600923697085
                    },
                    "southwest": {
                        "lat": 29.7589888697085,
                        "lng": -95.3627903302915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "01e84d81ea83d1cbdec05da569af1bb1657ba6d1",
            "name": "Prohibition Supperclub & Bar",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 3006,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114019815354823764197/photos\">Russell Roy Tritico</a>"
                    ],
                    "photo_reference": "CoQBdwAAAI5U1ue8J6Sff7mqC3lZSphOej18KVYamGJbr3YS7AC-_W2uchoqjgfrz5R1koVTskUO8Y334ZnAJmi3sMXkZg02YsNyaaVaraQ5xIQKZR-WOhDjMFdyQxS9ihMIIapVCCFAsC468tDnDCei_iIHNZr5A7TRV7hYRKKrbILASxnmEhBAEtvq_wab0hDCdUzo7mGuGhSE86pU5BwgSPco_QQkI8Yxq4Z0pQ",
                    "width": 5344
                }
            ],
            "place_id": "ChIJB3kvtmjBQIYRKYSl9uO0gbQ",
            "price_level": 2,
            "rating": 4.2,
            "reference": "CmRSAAAAmplO1baRciR-pXydDQtotRReHeD5abgqUhqAbnk5if95q4GHulA-JSm-n7Z5bs1wE8IhbZWYxFYnWo90R1_1bDeimeA51oq-GCP0Hkb6ABKXH6w79J9_lP_wW26Ojt92EhC5g--XFT0FAEWEaywu7ZbmGhTj3pHTW8z4oOFIN_fbFAx685TKiA",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "1008 Prairie, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7605059,
                    "lng": -95.36273779999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7618548802915,
                        "lng": -95.36138881970848
                    },
                    "southwest": {
                        "lat": 29.7591569197085,
                        "lng": -95.36408678029149
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "7e49526d9b32abbfe4000284005f80abe0cdc028",
            "name": "Shay McElroy's Irish Pub",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108566042087043981611/photos\">Chad Bursiek</a>"
                    ],
                    "photo_reference": "CoQBdwAAAKoS3UFiB5CJwHdRBB3Cz4UJe8UCZWnOBDb20RUpBQ1hTlwEtPGc8DzlErOEH8Gv9IjuHghkN8y0Qx_0EVR4lHDLiiyAcO2d84XL_M08P8-yPBGnulJHOAW8yww01807hFMqyFEqMEw7yzionBibJ6vDOFdDvCv6ZuAnhomQJeX2EhCd71RJgcVtt4ABU7Z1uCmwGhT9JFyDpAeibVzF8Lavw_vwmts8Ew",
                    "width": 4048
                }
            ],
            "place_id": "ChIJO40StDq_QIYRSCG4YqTPDxc",
            "rating": 4,
            "reference": "CmRRAAAAT7gvfHKh_Ye-lXg9TDYT1XdiwS9B3apj5i18BD5zVmxdz5OMH-V7qpEv65r0kSFiglsDnyA3x5h4w5j1tLhSz6-XdnZ2TvDyglmFp1GbyGW9mFp7htyDsIC1KYDADXiREhDKCJshvMUucnX5dy9mt1A7GhRFMEeRsI6oZxitZ8QAwEwWtHwOBw",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "909 Texas St # A, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.760246,
                    "lng": -95.3619559
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7616535802915,
                        "lng": -95.3607007197085
                    },
                    "southwest": {
                        "lat": 29.7589556197085,
                        "lng": -95.36339868029151
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "40235c5681d57f1ede09035b83f3f6ed7e6a3a0b",
            "name": "Molly's Pub",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 918,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115004442776864951619/photos\">Molly&#39;s Pub</a>"
                    ],
                    "photo_reference": "CoQBdwAAADDciN_-rwmSYwcwfa0wmbk0LqKiKCan8dH_RkVR8Nw5tRBFNxhVzNK_psHoYfkNedBnnMExeF0GYxzy7DqNZ63jdvvBKKNs-yje-VJePNnAb1ySFY66LgY6v7_iwIGdNIUYSWS7-LLFl6FT54LEqY9AhvbzQRCL1flu_T2Bs93tEhA0bB8BPswriFi2xaNAjywXGhTqIDjO5EgzYwHJtliqSRxd5osSBg",
                    "width": 921
                }
            ],
            "place_id": "ChIJuYcaSSW_QIYR59aoSUgt1dw",
            "rating": 4.3,
            "reference": "CmRSAAAAgeqSQTtH265xvRSCp3PUH2dWTo373cGaxq0ZsIiYrJkyk4pd-HYKR7PGyqqSb114OD5DrGVmR4zSRj-NEJ4BahBImVWK880pHefS6l8hXyRYLw03A5nSKXyk6mw1C7qREhDVWWDK8bsEUE3tLCBT_6DxGhRn4G0599eHZjBxBn-rLRR4kAqerg",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "509 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7604305,
                    "lng": -95.3628188
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7616802802915,
                        "lng": -95.3615508697085
                    },
                    "southwest": {
                        "lat": 29.7589823197085,
                        "lng": -95.36424883029152
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "e2db4b0e8c6438641591c8b43181cc9e2a2bbd43",
            "name": "Lawless Spirits & Kitchen",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 2992,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104388239679752586886/photos\">Mel Adamaitis</a>"
                    ],
                    "photo_reference": "CoQBdwAAALXMzQVzhopboPP8sgw4stj6YLq-tHcMpIEEdkOE8Dt4_-JtCvXRYzsWBa3o8K3EwreoG3eXdzmq92VJbXrTIc0KWoxQFd21ZqzeSSdzoJpahmCE4tDPGNlzTlz9glfz-GCGGi8S08tJIkR1W-lYLENezN_GdzwgTToWUxecT-3kEhDl9HF55gOjz0LyBSfAKtrNGhSFhRYQbC1OVjDm4350s6BjnroiQg",
                    "width": 4000
                }
            ],
            "place_id": "ChIJ244JtDq_QIYRYNe9AJf3UXc",
            "price_level": 2,
            "rating": 4,
            "reference": "CmRRAAAAm28yRfdMzQdFeeQYWTIIP36x7yTItWfhHHhCr5_JctH41mGrughNHYQQ50xJsfteEsp5OoocaLh0dUAlu-FzbcHWwcotJkNqI6_L9sICJKqtQ6KTAwbownT6IBBOy9oJEhB8nuXD53jsQc71ht0PnQuLGhTpQxBbdsMxWnmOkkaU_P-DQMM4rw",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "909 Texas Avenue #2a, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7602811,
                    "lng": -95.3614846
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7617017802915,
                        "lng": -95.36007881970849
                    },
                    "southwest": {
                        "lat": 29.7590038197085,
                        "lng": -95.3627767802915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "29c820fe02900bf55577002c0e747438e0086e45",
            "name": "Conservatory Underground Beer Garden & Food Hall",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 886,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108007298034368386187/photos\">Ivan Alexander</a>"
                    ],
                    "photo_reference": "CoQBdwAAAJnEDrw_LfuplsHdHmAAWz0axD__WAzbJv7HRChDLk4XEQYibCG3G4YdWdr6X8DlKLWD2Ysj-CNZ3evcQ1yIM9RH9KClxikWDqvCkqVkJFJaH1SxYPFWPWxD76j5hsdMxs1WbRTa1jjDpt8WZmi-XuBnHiQtOcVTEhl8z6tKoiy8EhDxf_Z2LVHV7_Ix8BafXWIBGhTjbD8ffCJjJXeHzpcq38nEznL8PA",
                    "width": 2160
                }
            ],
            "place_id": "ChIJv23nQCW_QIYRzQRJkpjeYUw",
            "price_level": 2,
            "rating": 4.6,
            "reference": "CmRRAAAAQCRyOHnw_uPDgnLWRb9vzruWPPX43E4Idt1VMCSuvhVkB9Xb1Uck78wSUNqymRx4tZTDxs7LanWNx8srUUjNCsUVl7kJbQ1S3liZuJSdZEGcwsrgbYhfXBlfiMfkgVdpEhC16TEg4J6OzKQPpvuL9ejpGhTlUPqxH_n_Z3biChDNpg9b5DUYuA",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "1010 Prairie Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7618501,
                    "lng": -95.3614023
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7631443302915,
                        "lng": -95.35996251970849
                    },
                    "southwest": {
                        "lat": 29.7604463697085,
                        "lng": -95.3626604802915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "f1f580df16dc63d6e71ebd3118a5c7c0ed2d74bb",
            "name": "Dean's",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 640,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115682213077799371222/photos\">Dean&#39;s</a>"
                    ],
                    "photo_reference": "CoQBdwAAADnowkRCzOFdlXRZutc6u3OtvxmyhI9u8AG9unrJqEoCS17rxxaPVX4J-7YDdnEjPlh4shoeMSqt8NZQdkytP-pw-pbfYdI7j3jnaWg375zDbgqPzSbiJvvCUJZBj_Rce7I9jRIkIPwEl8OZsTKowTiK7VXZOxoogQVporbbO4NQEhAu2g0kn5nKZMgNNzP3arqJGhTCGYA8fonLlMZiz1Ha2H7HOa8L1g",
                    "width": 930
                }
            ],
            "place_id": "ChIJcRTX9C-_QIYRrJdSf7yN6T8",
            "rating": 4.4,
            "reference": "CmRRAAAASdFUZnLCG0jPr6YTNHA3OPzx5wY7xUqv6U7MgNnOO7SdDcm0gQB1gBrWYikAdsRT8p92SOwA7qgLOSNPVjCTvnbNy7TcE_LVJTN9kwvypF2BRijyzZYV0HoLUE497IEaEhChcagAsW5YvPl-n9MZxOmVGhTe0mMst22XQZAsqgJWXrczNB0Vmg",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "night_club",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "316 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7603284,
                    "lng": -95.3629303
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7616225802915,
                        "lng": -95.3615894197085
                    },
                    "southwest": {
                        "lat": 29.7589246197085,
                        "lng": -95.36428738029151
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "196311505f334934425e2deb97d10ebefbec5132",
            "name": "Azuma Downtown",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 4640,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117534130130605775940/photos\">Johnathan VanSkyhawk</a>"
                    ],
                    "photo_reference": "CoQBdwAAACSORfwD3ZqAaNZUpTy7xuhLSnyzyEdwr6cimBI-RpbXcOFNM4aY9VC7OD0hUeMI9tR3HQaCTh8Mqmb3mysJhJ_p0k7V3EAg3EtcJGjcFeU4mbVionZ3ZxjBejNWIo6jox5Z97oAyA8BhokV_UcWOYP4qA4Ofry49zmCCb0vhzPIEhBUyRxsfiA6t_yhAOmgRnD1GhTg1gidLoSVcbuN32Ozrm8anSDzHQ",
                    "width": 3480
                }
            ],
            "place_id": "ChIJI9bOtTq_QIYRoZSa7qV6rAA",
            "price_level": 2,
            "rating": 4.2,
            "reference": "ClRQAAAAHxlBfb_51b0Bwlc-wYAbpOTL5AdRkU77JNwbF88FCyhyxnKrJ2hpN4I5qjzIWXidw1CyWCsAsO1WvOSF9x0VvE7FJA2136Tcdqct1fr1xOsSEFwKEY1Cc_TZGu8xxYsXbOEaFAa2iUwA4lT4Jl71zPYHkfEuXAS0",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "909 Texas Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7618975,
                    "lng": -95.3613395
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.7631983302915,
                        "lng": -95.3599071197085
                    },
                    "southwest": {
                        "lat": 29.7605003697085,
                        "lng": -95.3626050802915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "8c7e08aa0c843562a7c630233d04e98190b50be9",
            "name": "Notsuoh",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 2992,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111090400532187514711/photos\">Aaron Rubinstein</a>"
                    ],
                    "photo_reference": "CoQBdwAAACGTP5ejSjZATcfj7neadTeVi2c_ALxhjLJxXpt7X0x_6GMvJ-Fn1plw9S71IZlcHIiHS3iUYCVEjUwc2yRFc1x96FnR-TX0DhSQdf0TFO5fTqyIDyGd5LjcTAdNLrEs420pkymrDWipd3UgMsElVTwKvou3TJE7cmrgNzN-oDtiEhBrz5AJBjIy6z-AAJte334fGhQAZPrc88MiWRTbqB-q5AmFwe6AVA",
                    "width": 4000
                }
            ],
            "place_id": "ChIJfzCI9C-_QIYRgmSfnBIh0wE",
            "rating": 4.2,
            "reference": "CmRRAAAAXpEIiLR5FuJgoN8pFsca_uXsoJe8qxnRC5ASA0GIJIZbqVn6CXOJdYlLIWPryzKZYZc71yF3YNB9JYtfEFrXoeI0nOH4Xsre1A_XHbmvNN8M2bRcMdbZ5WOpmKC-b0FyEhAg3EHQ7LPMITRRkTQe1NlGGhSsgdRoVgauuhDHvh83EVCmDTvRAw",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "314 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7619511,
                    "lng": -95.3613027
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.76324963029149,
                        "lng": -95.3598692697085
                    },
                    "southwest": {
                        "lat": 29.76055166970849,
                        "lng": -95.3625672302915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "bdc80539848bacfd056557de8cad0d80ee7b09eb",
            "name": "Casa Blanca Lounge",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113077759041648594805/photos\">Casa Blanca Lounge</a>"
                    ],
                    "photo_reference": "CoQBdwAAAPxqGVMDVGdxGki9SngQZ_Z-FG8oBokqvbGGafHxnEQDmdd1HJ8vbeEJWe7uu4tDTFagwj3SUVqJJK4jjwstwd8RMHmOuELefwrwCASiay3taYlz9AIKvl5Xnblukgwbav0VXyCUixEMvpzp1xQQz1XUoG6gxJCCG131vCa7Wc7BEhBF9525XT64BevlxDKs14FsGhRn6JMwnp2FZ4w1H6HKvezLh3aUGA",
                    "width": 2048
                }
            ],
            "place_id": "ChIJ2c9Y8y-_QIYRnti6frBKRqU",
            "rating": 5,
            "reference": "CmRSAAAAkNVypNgFGhG8Yozsv7WxsUrVw53PCH4pjeD7XmW0bmKGfSfHQeVaTPEE1oBl0xabNyoYF3Rh-9CTwaSr7WSa8IJ45r8YMWt27GN8kHm6D8-c8v2KSBkVzMGRLyjo2BQ9EhD-B7R7MU7KbJ9IJgcTaOwGGhSXEGOJABVzdEg68J0r1RLcwrRjjA",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "312 Main Street, Houston"
        },
        {
            "geometry": {
                "location": {
                    "lat": 29.7605458,
                    "lng": -95.36324309999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.76182718029149,
                        "lng": -95.36190091970848
                    },
                    "southwest": {
                        "lat": 29.7591292197085,
                        "lng": -95.3645988802915
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "57f661ed795b1155ad076395eda41fa9ac6984c9",
            "name": "Sambuca",
            "opening_hours": {
                "exceptional_date": [],
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114961373161597206142/photos\">Karl Petters</a>"
                    ],
                    "photo_reference": "CoQBdwAAANeZGWUchyJ6rGLRAEAWxoS9aSWwo-W3NsdkKIIP8Vey8_Jjue8o69rnBcaJ6cd5kMammQCaOXsB7rIsL96_zT05ZpKDMFh7GFmmTJaTabfXAdema4guW1-LLLNEKBAdootvXyAo4BVqTai-s81I09SuG7c3iXt54sYwdMH7usqJEhBcyKGcZxjx4IzkMw0LN5_7GhTow8NAzjZpB6sEqhvsdsYMLcyR9w",
                    "width": 5312
                }
            ],
            "place_id": "ChIJI9bOtTq_QIYRNhRNu8yE9uE",
            "price_level": 3,
            "rating": 3.8,
            "reference": "CmRSAAAAaxZoKbrX63SdUcYtVJOWedzoElA6ka-oG0YxAam617N15HRic2Jkt01Vmg34JxEsgHtE0Jgb0GLDZmdsVhaxNLGwrNjipfpMgxHUaawUflsSkVyBTrU_Arei04ECXrq6EhCgAGhS_HenIvLFJ7O-Rf8WGhSMP2kF3p86OJBSOw2uyVBWXgwiyA",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "909 Texas Avenue, Houston"
        }
    ],
    "status": "OK"
};
