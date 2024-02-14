// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // it easier for us to keep configuration files backwards-compatible in the future.
    version: 1,

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // You can override CSS style variables here. For IE11, Klaro will
    // dynamically inject the variables into the CSS. If you still consider
    // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
    // with an external stylesheet as the dynamic replacement won't work there.
    styling: {
        theme: ['dark', 'bottom', 'wide'],
    },

    // Setting this to true will keep Klaro from automatically loading itself
    // when the page is being loaded.
    noAutoLoad: false,

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group services by their purpose in the modal. This is advisable
    // if you have a large number of services. Users can then enable or disable
    // entire groups of services instead of having to enable or disable every service.
    groupByPurpose: true,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'cbm-consent',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 120,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // You can change to cookie path for the consent manager itself.
    // Use this to restrict the cookie visibility to a specific path.
    // If undefined, Klaro will use '/' as cookie path.
    //cookiePath: '/',

    // Defines the default state for services (true=enabled by default).
    default: true,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: true,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: false,
    
   
    // You can also remove the 'Realized with Klaro!' text in the consent modal.
    // Please don't do this! We provide Klaro as a free open source tool.
    // Placing a link to our website helps us spread the word about it,
    // which ultimately enables us to make Klaro! better for everyone.
    // So please be fair and keep the link enabled. Thanks :)
    disablePoweredBy: true,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    //additionalClass: 'my-klaro',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    lang: 'en',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // translationsed defined under the 'zz' language code act as default
        // translations.
        zz: {
            privacyPolicyUrl: '/privacy-policy',
        },

        en: {
         
          consentNotice: {
                title: 'Cookie Notice',    
                description: 'This website uses cookies to enhance user experience, analyzie web performance and shares information about you with our social media, advertising and analytical partners. We do not sell your information.',
                learnMore: 'Customize Options',
            },
             
          consentModal: {
                title: '<b>Cookie Customization</b>',
                description:
                    'When you browse our website, we use cookies to gather information on your browser. This information includes details about you, your preferences, and your device. We primarily use this data to ensure that our website functions as you would expect, and to tailor your browsing experience to your needs. However, you have the option to decline certain types of cookies, though this may affect how the website functions and the services we can provide. If you want to learn more or customize your settings, you can click on the different categories listed.</n>',
            },
          
          decline: 'Only Functional',
          ok: 'Accept All',
          
            analytics: {
                description: 'Cookies used for analytics help collect data that allows services to understand how users interact with a particular service. These insights allow services both to improve content and to build better features that improve the user’s experience. We do not collect personally identifiable information through these services.<p><b>Examples:</b> Google Analytics, Matomo, Segment</p>',
                title: 'Analytics',
            },
            advertising: {
                description: 'These third-party cookies are for advertising, including serving and rendering ads, personalizing ads, limiting the number of times an ad is shown to a user, muting ads you have chosen to stop seeing, and measuring the effectiveness of ads.<p><b>Examples:</b> Facebook & Instagram Ads, LinkedIn Ads, Google Ads</p>',
                title: 'Advertising',
            },
           
            functionality: {
                description: 'Cookies used for functionality allow users to interact with a service or site to access features that are fundamental to that service. Things considered fundamental to the service include preferences like the user’s choice of language, product optimizations that help maintain and improve a service, and maintaining information relating to a user’s session, such as the content of a shopping cart.<p><b>Examples:</b> Vimeo, Google Fonts, Wordpress</p>',
                title: 'Functionality',
            },
            
      purposes: {
                functionality: 'Functional',
                analytics: 'Analytics',
                security: 'Security',
                advertising: 'Advertising',
            },
            
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
       {
            name: 'functionality',
            title: "Functionality",
            default: true,
            purposes: ['functionality'],
            cookies: ['vuid'],
            required: true,
        },
      
      {
            name: 'analytics',
            title: "Analytics",
            default: true,
            purposes: ['analytics'],
            contextualConsentOnly: true,
            cookies: ['_ga_EMRQ7QDYVK'],
            required: false,
        },  
      {
            name: 'advertising',
            title: "Advertising",
            default: true,
            purposes: ['advertising'],
            contextualConsentOnly: true,
            cookies: ['_fbp','_ga','ADS_VISITOR_ID','_twitter','twid','guest_id','muc_ads','sa-user-id','sa-user-id-v2','sa-user-id-v3','suid','MUID','lidc','li_sugr','bcookie'],
            required: false,
        },  
      
        
    ],
};
