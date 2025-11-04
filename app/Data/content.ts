// DEFAULT: Import statements with enhanced error handling for all JSON content files
let aboutData: any;
let contactPageDataJson: any;
let contactDataJson: any;
let homePageDataJson: any;
let locationPageDataJson: any;
let brandsDataJson: any;
let servicePageDataJson: any;
let subDomainUrlContentJson: any;

// DEFAULT: Enhanced error handling with detailed console warnings
try {
  aboutData = require("@/components/Content/about.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load about.json, using comprehensive default values",
  );
  aboutData = {};
}



try {
  contactPageDataJson = require("@/components/Content/contact.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load contact.json, using default contact page content",
  );
  contactPageDataJson = {};
}

try {
  contactDataJson = require("@/components/Content/ContactInfo.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load ContactInfo.json, using default contact information",
  );
  contactDataJson = {};
}

try {
  homePageDataJson = require("@/components/Content/home.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load home.json, using default home page content",
  );
  homePageDataJson = {};
}

try {
  locationPageDataJson = require("@/components/Content/location.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load location.json, using default location content",
  );
  locationPageDataJson = {};
}

try {
  brandsDataJson = require("@/components/Content/ourBrand.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load ourBrand.json, using default brand information",
  );
  brandsDataJson = {};
}

try {
  servicePageDataJson = require("@/components/Content/servicePage.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load servicePage.json, using default service page content",
  );
  servicePageDataJson = {};
}


try {
  subDomainUrlContentJson = require("@/components/Content/subDomainUrlContent.json");
} catch (error) {
  console.warn(
    "DEFAULT: Failed to load subDomainUrlContent.json, using default subdomain content",
  );
  subDomainUrlContentJson = {};
}

// DEFAULT: Comprehensive helper function to provide fallback for empty, null, or missing values
function getValueOrDefault(value: any, defaultValue: any): any {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0)
  ) {
    return defaultValue;
  }
  return value;
}

// DEFAULT: Enhanced helper function to ensure mission section has complete data with fallbacks
function ensureMissionSection(missionSection: any[]): any[] {
  const defaultMissionSections = [
    {
      title: "DEFAULT: Our Mission",
      description:
        "DEFAULT: Our mission is to provide top-tier porta potty rental services focused on cleanliness, reliability, and customer satisfaction in [location].",
    },
    {
      title: "DEFAULT: Our Vision",
      description:
        "DEFAULT: We're building the most reliable name in porta potty rental in [location] by staying committed to clear communication, fast deliveries, and simple pricing.",
    },
    {
      title: "DEFAULT: Our Values",
      description:
        "DEFAULT: We believe in showing up on time, offering honest prices, maintaining clean facilities, and keeping your event or project running smoothly.",
    },
  ];

  if (!Array.isArray(missionSection) || missionSection.length === 0) {
    return defaultMissionSections;
  }

  return missionSection.map((item: any, index: number) => ({
    title: getValueOrDefault(
      item?.title,
      defaultMissionSections[index]?.title || "DEFAULT: Our Mission",
    ),
    description: getValueOrDefault(
      item?.description,
      defaultMissionSections[index]?.description ||
        "DEFAULT: Our commitment to excellence in porta potty rental service in [location].",
    ),
  }));
}

// DEFAULT: Helper function to ensure FAQ array has complete data with fallbacks
function ensureFaqSection(faqSection: any[]): any[] {
  const defaultFaq = [
    {
      FAQ: "DEFAULT: How much does a porta potty rental cost in [location]?",
      Answer:
        "DEFAULT: Pricing depends on the porta potty type and rental duration. We provide upfront quotes with no hidden charges.",
      question: "DEFAULT: How much does a porta potty rental cost in [location]?",
      answer:
        "DEFAULT: Pricing depends on the porta potty type and rental duration. We provide upfront quotes with no hidden charges.",
    },
    {
      FAQ: "DEFAULT: What types of porta potties do you offer in [location]?",
      Answer:
        "DEFAULT: We offer standard, deluxe, handicap accessible, and luxury porta potties for all types of events and construction sites.",
      question: "DEFAULT: What types of porta potties do you offer in [location]?",
      answer:
        "DEFAULT: We offer standard, deluxe, handicap accessible, and luxury porta potties for all types of events and construction sites.",
    },
    {
      FAQ: "DEFAULT: Can I get same-day porta potty rental in [location]?",
      Answer:
        "DEFAULT: Yes. We offer same-day or next-day delivery depending on availability. Just give us a quick call to schedule.",
      question: "DEFAULT: Can I get same-day porta potty rental in [location]?",
      answer:
        "DEFAULT: Yes. We offer same-day or next-day delivery depending on availability. Just give us a quick call to schedule.",
    },
  ];

  if (!Array.isArray(faqSection) || faqSection.length === 0) {
    return defaultFaq;
  }

  return faqSection.map((item: any, index: number) => ({
    FAQ: getValueOrDefault(
      item?.FAQ || item?.question,
      defaultFaq[index]?.FAQ || "DEFAULT: Porta Potty Rental Question",
    ),
    Answer: getValueOrDefault(
      item?.Answer || item?.answer,
      defaultFaq[index]?.Answer ||
        "DEFAULT: Professional porta potty rental answer for [location].",
    ),
    question: getValueOrDefault(
      item?.question || item?.FAQ,
      defaultFaq[index]?.question || "DEFAULT: Porta Potty Rental Question",
    ),
    answer: getValueOrDefault(
      item?.answer || item?.Answer,
      defaultFaq[index]?.answer ||
        "DEFAULT: Professional porta potty rental answer for [location].",
    ),
  }));
}

// DEFAULT: Helper function to ensure reviews array has complete data with fallbacks
function ensureReviewsSection(reviewsSection: any[]): any[] {
  const defaultReviews = [
    {
      name: "DEFAULT: John D.",
      rating: 5,
      review:
        "DEFAULT: Excellent service! Fast delivery and pickup. Highly recommended!",
      Review:
        "DEFAULT: Excellent service! Fast delivery and pickup. Highly recommended!",
    },
    {
      name: "DEFAULT: Sarah M.",
      rating: 5,
      review:
        "DEFAULT: Professional and reliable. Great pricing and customer service.",
      Review:
        "DEFAULT: Professional and reliable. Great pricing and customer service.",
    },
    {
      name: "DEFAULT: Mike R.",
      rating: 5,
      review:
        "DEFAULT: Fast response time and helpful team. Made our cleanup project easy.",
      Review:
        "DEFAULT: Fast response time and helpful team. Made our cleanup project easy.",
    },
  ];

  if (!Array.isArray(reviewsSection) || reviewsSection.length === 0) {
    return defaultReviews;
  }

  return reviewsSection.map((item: any, index: number) => ({
    name: getValueOrDefault(
      item?.name,
      defaultReviews[index]?.name || "DEFAULT: Satisfied Customer",
    ),
    rating: getValueOrDefault(item?.rating, defaultReviews[index]?.rating || 5),
    review: getValueOrDefault(
      item?.review || item?.Review,
      defaultReviews[index]?.review ||
        "DEFAULT: Great porta potty rental service in [location]!",
    ),
    Review: getValueOrDefault(
      item?.Review || item?.review,
      defaultReviews[index]?.Review ||
        "DEFAULT: Great porta potty rental service in [location]!",
    ),
  }));
}

// DEFAULT: Helper function to ensure types data lists have complete data with comprehensive fallbacks for all typesPage.json fields
function ensureTypesDataLists(serviceData: any): any {
  const defaultTypesData = {
    title: "DEFAULT: Find Your Perfect Porta Potty Type",
    p: "DEFAULT: We offer various porta potty types to accommodate events and projects of all scales in [location]. From basic units to luxury facilities.",
    lists: [
      {
        title: "DEFAULT: Standard Porta Potty in [location]",
        shortDescription:
          "DEFAULT: A basic porta potty ideal for construction sites, outdoor events, and temporary facilities.",
        description:
          "DEFAULT: <ul><li><p><strong>Capacity</strong>: Standard size</p></li><li><p><strong>Benefits</strong>:</p><ul class='list-disc pl-4'><li><p>Easy to place anywhere</p></li><li><p>Ideal for construction sites, events, and temporary needs</p></li><li><p>Cost-effective solution</p></li></ul></li></ul>",
        h2: "DEFAULT: What Is a Standard Porta Potty in [location]",
        p2: "DEFAULT: Planning an event or project? Our standard porta potties are perfect for basic sanitation needs in [location]. These units are clean, reliable, and perfect for outdoor events.",
        h2Image:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        tyesHeading:
          "DEFAULT: When Do You Need a Standard Porta Potty in [location]?",
        slug: "DEFAULT: standard-porta-potty",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        overViewHeading: "DEFAULT: Overview Of Standard Porta Potty",
        overViewContent:
          "DEFAULT: <ul><li><p><strong>Not Accepted</strong>:</p><ul class='list-disc pl-4'><li><p>Hazardous materials</p></li><li><p>Flammable substances</p></li><li><p>Contact us with questions about specific items.</p></li></ul></li></ul><div class='mb-2 font-semibold'>What's Included:</div><ul class='list-disc pl-4 mb-4'><li><p>Delivery and pickup</p></li><li><p>Regular cleaning and maintenance</p></li><li><p>Toilet paper and hand sanitizer</p></li></ul><div class='mb-2 font-semibold'>Unit Dimensions:</div><div class='mb-2'>Standard portable restroom</div><div class='text-sm text-gray-500'>Serves: Up to 10 people per day</div>",
        overViewImage:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        leftSection: {
          title: "DEFAULT: STANDARD PORTA POTTIES",
          description:
            "DEFAULT: Basic needs: construction sites, outdoor events, temporary facilities",
        },
        rightSection: {
          title: "DEFAULT: How to Select the Right Porta Potty Type",
          description:
            "DEFAULT: A porta potty can handle events and projects of all sizes. Use our guide to select the right type for your needs.",
        },
        comapreHeading: "DEFAULT: What Can You Use a Standard Porta Potty For?",
        allowedHeading: "DEFAULT: Ideal For",
        allowedItems: [
          "DEFAULT: Construction sites and work areas",
          "DEFAULT: Outdoor events and festivals",
          "DEFAULT: Temporary facilities",
          "DEFAULT: Emergency sanitation needs",
          "DEFAULT: Camping and recreational areas",
        ],
        prohibitedHeading: "DEFAULT: Not Suitable For",
        prohibitedItems: [
          "DEFAULT: Hazardous waste disposal",
          "DEFAULT: Chemical or flammable materials",
          "DEFAULT: Medical waste",
          "DEFAULT: Heavy industrial use without maintenance",
        ],
        idealHeading: "DEFAULT: Ideal Situations for a Standard Porta Potty:",
        idealImage:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        idealProjects: [
          "DEFAULT: Construction and renovation projects",
          "DEFAULT: Outdoor weddings and events",
          "DEFAULT: Festivals and concerts",
          "DEFAULT: Emergency sanitation needs",
          "DEFAULT: Temporary work sites",
        ],
      },
    ],
  };

  if (!serviceData || typeof serviceData !== "object") {
    return defaultTypesData;
  }

  const ensuredLists =
    Array.isArray(serviceData.lists) && serviceData.lists.length > 0
      ? serviceData.lists.map((item: any, index: number) => {
          const typedItem = item as any; // Handle inconsistent data structure
          return {
            title: getValueOrDefault(
              typedItem?.title,
              defaultTypesData.lists[index]?.title || "DEFAULT: Porta Potty Type",
            ),
            shortDescription: getValueOrDefault(
              typedItem?.shortDescription,
              defaultTypesData.lists[index]?.shortDescription ||
                "DEFAULT: A versatile porta potty for various events and projects.",
            ),
            description: getValueOrDefault(
              typedItem?.description,
              defaultTypesData.lists[index]?.description ||
                "DEFAULT: Perfect for various events and projects.",
            ),
            h2: getValueOrDefault(
              typedItem?.h2,
              defaultTypesData.lists[index]?.h2 ||
                "DEFAULT: What Is This Porta Potty?",
            ),
            p2: getValueOrDefault(
              typedItem?.p2,
              defaultTypesData.lists[index]?.p2 ||
                "DEFAULT: Our porta potties are perfect for events and projects in [location].",
            ),
            h2Image: getValueOrDefault(
              typedItem?.h2Image,
              defaultTypesData.lists[index]?.h2Image ||
                "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            ),
            tyesHeading: getValueOrDefault(
              typedItem?.tyesHeading,
              defaultTypesData.lists[index]?.tyesHeading ||
                "DEFAULT: When Do You Need This Porta Potty?",
            ),
            slug: getValueOrDefault(
              typedItem?.slug,
              defaultTypesData.lists[index]?.slug || "default-porta-potty",
            ),
            imageUrl: getValueOrDefault(
              typedItem?.imageUrl,
              defaultTypesData.lists[index]?.imageUrl ||
                "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            ),
            overViewHeading: getValueOrDefault(
              typedItem?.overViewHeading,
              defaultTypesData.lists[index]?.overViewHeading ||
                "DEFAULT: Overview Of This Porta Potty",
            ),
            overViewContent: getValueOrDefault(
              typedItem?.overViewContent,
              defaultTypesData.lists[index]?.overViewContent ||
                "DEFAULT: <p>Perfect for various events and projects.</p>",
            ),
            overViewImage: getValueOrDefault(
              typedItem?.overViewImage,
              defaultTypesData.lists[index]?.overViewImage ||
                "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            ),
            leftSection: (() => {
              const defaultLeft = {
                title: "DEFAULT: PORTA POTTIES",
                description:
                  "DEFAULT: Various needs: events, construction sites, temporary facilities",
              };

              if (
                !typedItem?.leftSection ||
                typeof typedItem.leftSection !== "object"
              ) {
                return defaultLeft;
              }

              return {
                title: getValueOrDefault(
                  typedItem.leftSection.title,
                  defaultLeft.title,
                ),
                description: getValueOrDefault(
                  typedItem.leftSection.description,
                  defaultLeft.description,
                ),
              };
            })(),
            rightSection: (() => {
              const defaultRight = {
                title: "DEFAULT: How to Select the Right Porta Potty Type",
                description:
                  "DEFAULT: A porta potty can handle events and projects of all sizes. Use our guide to select the right type for your needs.",
              };

              if (
                !typedItem?.rightSection ||
                typeof typedItem.rightSection !== "object"
              ) {
                return defaultRight;
              }

              return {
                title: getValueOrDefault(
                  typedItem.rightSection.title,
                  defaultRight.title,
                ),
                description: getValueOrDefault(
                  typedItem.rightSection.description,
                  defaultRight.description,
                ),
              };
            })(),
            comapreHeading: getValueOrDefault(
              typedItem?.comapreHeading,
              defaultTypesData.lists[index]?.comapreHeading ||
                "DEFAULT: What Can You Use This Porta Potty For?",
            ),
            allowedHeading: getValueOrDefault(
              typedItem?.allowedHeading,
              defaultTypesData.lists[index]?.allowedHeading ||
                "DEFAULT: Ideal For",
            ),
            allowedItems:
              Array.isArray(typedItem?.allowedItems) &&
              typedItem.allowedItems.length > 0
                ? typedItem.allowedItems.map(
                    (allowedItem: any, allowedIndex: number) =>
                      getValueOrDefault(
                        allowedItem,
                        defaultTypesData.lists[index]?.allowedItems?.[
                          allowedIndex
                        ] || "DEFAULT: Various materials",
                      ),
                  )
                : defaultTypesData.lists[index]?.allowedItems || [
                    "DEFAULT: Various events and facilities",
                  ],
            prohibitedHeading: getValueOrDefault(
              typedItem?.prohibitedHeading,
              defaultTypesData.lists[index]?.prohibitedHeading ||
                "DEFAULT: Not Suitable For",
            ),
            prohibitedItems:
              Array.isArray(typedItem?.prohibitedItems) &&
              typedItem.prohibitedItems.length > 0
                ? typedItem.prohibitedItems.map(
                    (prohibitedItem: any, prohibitedIndex: number) =>
                      getValueOrDefault(
                        prohibitedItem,
                        defaultTypesData.lists[index]?.prohibitedItems?.[
                          prohibitedIndex
                        ] || "DEFAULT: Hazardous materials",
                      ),
                  )
                : defaultTypesData.lists[index]?.prohibitedItems || [
                    "DEFAULT: Hazardous materials",
                  ],
            idealHeading: getValueOrDefault(
              typedItem?.idealHeading,
              defaultTypesData.lists[index]?.idealHeading ||
                "DEFAULT: Ideal Situations for This Porta Potty:",
            ),
            idealImage: getValueOrDefault(
              typedItem?.idealImage,
              defaultTypesData.lists[index]?.idealImage ||
                "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
            ),
            idealProjects:
              Array.isArray(typedItem?.idealProjects) &&
              typedItem.idealProjects.length > 0
                ? typedItem.idealProjects.map(
                    (idealProject: any, idealIndex: number) =>
                      getValueOrDefault(
                        idealProject,
                        defaultTypesData.lists[index]?.idealProjects?.[
                          idealIndex
                        ] || "DEFAULT: Various events and projects",
                      ),
                  )
                : defaultTypesData.lists[index]?.idealProjects || [
                    "DEFAULT: Various events and projects",
                  ],
          };
        })
      : defaultTypesData.lists;

  return {
    title: getValueOrDefault(serviceData.title, defaultTypesData.title),
    p: getValueOrDefault(serviceData.p, defaultTypesData.p),
    lists: ensuredLists,
  };
}

// DEFAULT: Helper function to ensure service data lists have complete data with comprehensive fallbacks
function ensureServiceDataLists(serviceData: any): any {
  const defaultServiceData = {
    title: "DEFAULT: Complete Porta Potty Rental Solutions",
    p: "",
    lists: [
      {
        title: "DEFAULT: Event Porta Potty Rental in [location]",
        description:
          "DEFAULT: Call Us At [phone]. We offer event porta potty rental in [location] for weddings, festivals, concerts, and special occasions.",
        h2: "DEFAULT: Need Porta Potties for Your Event?",
        p2: "DEFAULT: Event porta potty rental in [location] makes it easy to provide clean, convenient restroom facilities for your guests. Whether you're planning a wedding or hosting a festival, we've got the right facilities for the job. Call Us At [phone]",
        h3: "DEFAULT: Perfect For All Types of Events",
        p3: "DEFAULT: Outdoor weddings | Music festivals | Corporate events | Birthday parties | Sporting events | Community gatherings | Food festivals | Charity events",
        seoContent:
          "DEFAULT: <h2>Event Porta Potty Rentals in [location]</h2><p>Our event porta potty rental service in [location] is designed to keep your celebrations clean and convenient. We deliver quality restroom facilities with flexible rental periods, perfect for events big and small. Call Us At [phone]</p>",
        slug: "DEFAULT: event-porta-potty-rental",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Construction Porta Potty Rental in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Dependable construction porta potty rental in [location] for contractors and job sites needing reliable restroom facilities.",
        h2: "DEFAULT: Built for Heavy-Duty Work Sites",
        p2: "DEFAULT: Our construction porta potty rental in [location] supports job sites, construction projects, and work areas with clean, durable restroom facilities. With fast delivery and regular maintenance, you keep workers happy and productive. Call Us At [phone]",
        h3: "DEFAULT: Trusted by Local Contractors",
        p3: "DEFAULT: Construction sites | Roofing projects | Renovation work | Road work | Utility projects | Contractor jobs | Industrial sites | Infrastructure projects",
        seoContent:
          "DEFAULT: <h2>Construction Porta Potty Rentals in [location]</h2><p>We supply reliable construction porta potty rental in [location] tailored to meet the demanding needs of local contractors and work crews. From daily maintenance to emergency service, we've got your site covered. Call Us At [phone]</p>",
        slug: "DEFAULT: construction-porta-potty-rental",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Commercial Porta Potty Rental in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Commercial porta potty rental in [location] with flexible terms for businesses, retail spaces, and offices.",
        h2: "DEFAULT: Keep Business Running Smoothly",
        p2: "DEFAULT: Our commercial porta potty rental in [location] is ideal for business events, retail locations, and temporary facilities. We provide scalable solutions and dependable service with flexible scheduling. Call Us At [phone]",
        h3: "DEFAULT: Ideal for Business Needs",
        p3: "DEFAULT: Business events | Retail locations | Office buildings | Warehouses | Manufacturing facilities | Commercial properties | Temporary offices | Business relocations",
        seoContent:
          "DEFAULT: <h2>Commercial Porta Potty Rentals in [location]</h2><p>For dependable commercial porta potty rental in [location], businesses trust us for on-time delivery, quality facilities, and flexible rental schedules. We help keep your business operations running smoothly. Call Us At [phone]</p>",
        slug: "DEFAULT: commercial-porta-potty-rental",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Luxury Porta Potty Rental in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Premium luxury porta potty rental in [location] for upscale events and occasions requiring elegant restroom facilities.",
        h2: "DEFAULT: Elegant Restroom Trailers for Special Events",
        p2: "DEFAULT: We provide luxury porta potty rental in [location] with same-day or next-day delivery. Choose from premium restroom trailers for your upscale event—no compromising on quality or comfort. Call Us At [phone]",
        h3: "DEFAULT: Luxury Porta Potties Work Great For",
        p3: "DEFAULT: Upscale weddings | Corporate galas | VIP events | High-end parties | Executive functions | Premium gatherings | Luxury outdoor events | Special celebrations",
        seoContent:
          "DEFAULT: <h2>Luxury Porta Potty Rental in [location]</h2><p>Our luxury porta potty rental service in [location] is elegant, comfortable, and built to make your event exceptional. With premium amenities and responsive service, your guests will be impressed. Call Us At [phone]</p>",
        slug: "DEFAULT: luxury-porta-potty-rental",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Same Day Porta Potty Rental in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Get same day porta potty rental in [location] when you're on a tight deadline or last-minute event needs quick restroom facilities.",
        h2: "DEFAULT: Need Porta Potties Fast? We've Got You",
        p2: "DEFAULT: When time's tight, we're the go-to for same day porta potty rental in [location]. Call in the morning, get your facilities delivered that afternoon—no stress, no wait. Call Us At [phone]",
        h3: "DEFAULT: Perfect for Urgent Situations",
        p3: "DEFAULT: Last-minute events | Emergency facilities | Contractor deadlines | Weekend gatherings | Urgent work sites | Event changes | Emergency situations | Quick turnarounds",
        seoContent:
          "DEFAULT: <h2>Same Day Porta Potty Rental in [location]</h2><p>Our same day porta potty rental in [location] helps you handle urgent situations fast. With responsive service and real-time availability, you get the facilities you need without missing a beat. Call Us At [phone]</p>",
        slug: "DEFAULT: same-day-porta-potty-rental",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
      {
        title: "DEFAULT: Festival Porta Potty Rental in [location]",
        description:
          "DEFAULT: Call Us At [phone]. Reliable festival porta potty rental in [location] for music festivals, food events, and large outdoor gatherings.",
        h2: "DEFAULT: Keep Your Festival Clean and Convenient",
        p2: "DEFAULT: Our festival porta potty rental in [location] provides clean, accessible restroom facilities for large crowds and outdoor events. Keep your attendees comfortable and happy. Call Us At [phone]",
        h3: "DEFAULT: Great For All Types of Festivals",
        p3: "DEFAULT: Music festivals | Food festivals | Art fairs | Community events | Street festivals | Outdoor concerts | Craft shows | Cultural celebrations",
        seoContent:
          "DEFAULT: <h2>Festival Porta Potty Rental in [location]</h2><p>Make your festival successful with festival porta potty rental in [location]. We deliver clean facilities right to your event location and handle all maintenance and pickup. Call Us At [phone]</p>",
        slug: "DEFAULT: festival-porta-potty-rental",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      },
    ],
  };

  if (!serviceData || typeof serviceData !== "object") {
    return defaultServiceData;
  }

  const ensuredLists =
    Array.isArray(serviceData.lists) && serviceData.lists.length > 0
      ? serviceData.lists.map((item: any, index: number) => ({
          title: getValueOrDefault(
            item?.title,
            defaultServiceData.lists[index]?.title ||
              "DEFAULT: Porta Potty Rental Service",
          ),
          description: getValueOrDefault(
            item?.description,
            defaultServiceData.lists[index]?.description ||
              "DEFAULT: Professional porta potty rental service in [location].",
          ),
          h2: getValueOrDefault(
            item?.h2,
            defaultServiceData.lists[index]?.h2 ||
              "DEFAULT: Professional Service",
          ),
          p2: getValueOrDefault(
            item?.p2,
            defaultServiceData.lists[index]?.p2 ||
              "DEFAULT: Quality porta potty rental service in [location].",
          ),
          h3: getValueOrDefault(
            item?.h3,
            defaultServiceData.lists[index]?.h3 || "DEFAULT: Service Benefits",
          ),
          p3: getValueOrDefault(
            item?.p3,
            defaultServiceData.lists[index]?.p3 ||
              "DEFAULT: Professional solutions for all your needs.",
          ),
          seoContent: getValueOrDefault(
            item?.seoContent,
            defaultServiceData.lists[index]?.seoContent ||
              "DEFAULT: <h2>Professional Porta Potty Rental Service</h2><p>Quality service in [location].</p>",
          ),
          slug: getValueOrDefault(
            item?.slug,
            defaultServiceData.lists[index]?.slug || "default-service",
          ),
          imageUrl: getValueOrDefault(
            item?.imageUrl,
            defaultServiceData.lists[index]?.imageUrl ||
              "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
          ),
        }))
      : defaultServiceData.lists;

  return {
    title: getValueOrDefault(serviceData.title, defaultServiceData.title),
    p: getValueOrDefault(serviceData.p, defaultServiceData.p),
    lists: ensuredLists,
  };
}

// DEFAULT: Contact Content with comprehensive default fallbacks
const {
  No = "DEFAULT: (555) 123-4567",
  tel = "DEFAULT: +15551234567",
  mail = "DEFAULT: info@portapottyrental.com",
  baseUrl = "DEFAULT: https://portapottyrental.com/",
  host = "DEFAULT: portapottyrental.com",
  name = "DEFAULT: Premier Porta Potty Rental",
  address = "DEFAULT: 123 Main Street, Your City, State 12345",
  service = "DEFAULT: Porta Potty Rental",
  location = "DEFAULT: Your City, State",
  zipCode = "DEFAULT: 12345",
  bannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  logoImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  favicon = "DEFAULT: /favicon.ico",
  googleAnalytics = "DEFAULT: GA_MEASUREMENT_ID",
  minor = "DEFAULT: #fed700",
  main = "DEFAULT: #283143",
} = (contactDataJson as any) || {};

const contactContent: any = {
  No: getValueOrDefault(contactDataJson?.No, "DEFAULT: (555) 123-4567"),
  tel: getValueOrDefault(contactDataJson?.tel, "DEFAULT: +15551234567"),
  mail: getValueOrDefault(
    contactDataJson?.mail,
    "",
  ),
  baseUrl: getValueOrDefault(
    contactDataJson?.baseUrl,
    "DEFAULT: https://portapottyrental.com/",
  ),
  host: getValueOrDefault(contactDataJson?.host, "DEFAULT: portapottyrental.com"),
  name: getValueOrDefault(
    contactDataJson?.name,
    "DEFAULT: Premier Porta Potty Rental",
  ),
  address: getValueOrDefault(
    contactDataJson?.address,
    "",
  ),
  service: getValueOrDefault(
    contactDataJson?.service,
    "DEFAULT: Porta Potty Rental",
  ),
  location: getValueOrDefault(
    contactDataJson?.location,
    "DEFAULT: Your City, State",
  ),
  zipCode: getValueOrDefault(contactDataJson?.zipCode, "DEFAULT: 12345"),
  bannerImage: getValueOrDefault(
    contactDataJson?.bannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  logoImage: getValueOrDefault(
    contactDataJson?.logoImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  favicon: getValueOrDefault(contactDataJson?.favicon, "DEFAULT: /favicon.ico"),
  googleAnalytics: getValueOrDefault(
    contactDataJson?.googleAnalytics,
    "DEFAULT: GA_MEASUREMENT_ID",
  ),
  minor: getValueOrDefault(contactDataJson?.minor, "DEFAULT: #fed700"),
  main: getValueOrDefault(contactDataJson?.main, "DEFAULT: #283143"),
};

// DEFAULT: About Content with comprehensive enhanced default fallbacks
const {
  metaTitle,
  metaDescription,
  bannerQuote,
  bannerImage: aboutBannerImage,
  h1Banner,
  p1Banner,
  p2,
  h2Image,
  missionSection,
  areaweserveSection,
} = aboutData || {};

const aboutContent: any = {
  metaTitle: getValueOrDefault(
    metaTitle,
    "DEFAULT: Affordable Porta Potty Rental in [location] | About Us",
  ),
  metaDescription: getValueOrDefault(
    metaDescription,
    "DEFAULT: Need affordable porta potty rental in [location]? Fast delivery, clean facilities, and easy scheduling. Call Us at [phone] to reserve your porta potties.",
  ),
  bannerQuote: getValueOrDefault(
    bannerQuote,
    "DEFAULT: Your Trusted Partner for Waste Management Solutions",
  ),
  bannerImage: getValueOrDefault(
    aboutBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    h1Banner,
    "DEFAULT: Reliable Porta Potty Rental in [location] for Events & Projects",
  ),
  p1Banner: getValueOrDefault(
    p1Banner,
    "DEFAULT: Need affordable porta potty rental in [location]? Fast delivery, clean facilities, and easy scheduling. Call Us at [phone] to reserve your porta potties.",
  ),
  p2: getValueOrDefault(
    p2,
    "DEFAULT: We provide affordable porta potty rental in [location] for event planners, businesses, contractors, and construction sites. Whether you're managing a wedding, hosting a festival, or running a construction project, our porta potties are ready to provide clean, convenient restroom facilities. From standard units to luxury restroom trailers, we deliver the right facilities based on your event or project needs. With flexible rental periods, same-day or next-day delivery, and no hidden fees, our service is trusted by customers who need fast and reliable solutions.",
  ),
  h2Image: getValueOrDefault(
    h2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  missionSection: ensureMissionSection(missionSection),
  areaweserveSection: (() => {
    const defaultAreaSection = {
      description:
        "DEFAULT: We proudly provide porta potty rental services across [location], delivering to event venues, construction sites, offices, and outdoor locations.",
      linkText: "DEFAULT: Check our Porta Potty Rental service locations here.",
      link: "DEFAULT: /locations",
    };

    if (!areaweserveSection || typeof areaweserveSection !== "object") {
      return defaultAreaSection;
    }

    return {
      description: getValueOrDefault(
        areaweserveSection.description,
        defaultAreaSection.description,
      ),
      linkText: getValueOrDefault(
        areaweserveSection.linkText,
        "DEFAULT: Check our Porta Potty Rental service locations here.",
      ),
      link: getValueOrDefault(areaweserveSection.link, defaultAreaSection.link),
    };
  })(),
};




// DEFAULT: Contact Page Content with comprehensive default fallbacks
const {
  metaTitle:
    contactPageMetaTitle = "DEFAULT: Contact Us - [location] Porta Potty Rental | Get Your Quote Today",
  metaDescription:
    contactPageMetaDescription = "DEFAULT: Contact our [location] porta potty rental team for fast, reliable service. Call [phone] or fill out our form for instant quotes and same-day delivery.",
  bannerQuote:
    contactPageBannerQuote = "DEFAULT: Ready to Get Started? Contact Us Today!",
  bannerImage:
    contactPageBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner:
    contactPageH1Banner = "DEFAULT: Contact Our [location] Porta Potty Rental Team",
  p1Banner:
    contactPageP1Banner = "DEFAULT: Get in touch with our experienced team for fast, reliable porta potty rental service in [location]. Call [phone] for instant quotes and same-day delivery.",
  h2 = "DEFAULT: Get Your Free Quote Today",
  h2Image:
    contacth2Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  p2: contactp2 = "DEFAULT: Our team is ready to help you find the perfect porta potty type for your event or project. Whether it's a wedding, festival, or construction job, we have the right facilities for you in [location].",
  h3 = "DEFAULT: Why Choose Our Porta Potty Rental Service?",
  p3 = "DEFAULT: Fast delivery, competitive pricing, and excellent customer service make us the top choice for porta potty rental in [location]. Call [phone] to experience the difference.",
  h3Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ctaText = "DEFAULT: Ready to get started? Call [phone] now for fast, reliable porta potty rental service in [location]!",
  mapLink = "https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
} = (contactPageDataJson as any) || {};

const contactPageContent: any = {
  metaTitle: getValueOrDefault(
    contactPageMetaTitle,
    "DEFAULT: Contact Us - [location] Porta Potty Rental | Get Your Quote Today",
  ),
  metaDescription: getValueOrDefault(
    contactPageMetaDescription,
    "DEFAULT: Contact our [location] porta potty rental team for fast, reliable service. Call [phone] or fill out our form for instant quotes and same-day delivery.",
  ),
  bannerQuote: getValueOrDefault(
    contactPageBannerQuote,
    "DEFAULT: Ready to Get Started? Contact Us Today!",
  ),
  bannerImage: getValueOrDefault(
    contactPageBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    contactPageH1Banner,
    "DEFAULT: Contact Our [location] Porta Potty Rental Team",
  ),
  p1Banner: getValueOrDefault(
    contactPageP1Banner,
    "DEFAULT: Get in touch with our experienced team for fast, reliable porta potty rental service in [location]. Call [phone] for instant quotes and same-day delivery.",
  ),
  h2: getValueOrDefault(h2, "DEFAULT: Get Your Free Quote Today"),
  h2Image: getValueOrDefault(
    contacth2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  p2: getValueOrDefault(
    contactp2,
    "DEFAULT: Our team is ready to help you find the perfect porta potty type for your event or project. Whether it's a wedding, festival, or construction job, we have the right facilities for you in [location].",
  ),
  h3: getValueOrDefault(h3, "DEFAULT: Why Choose Our Porta Potty Rental Service?"),
  p3: getValueOrDefault(
    p3,
    "DEFAULT: Fast delivery, competitive pricing, and excellent customer service make us the top choice for porta potty rental in [location]. Call [phone] to experience the difference.",
  ),
  h3Image: getValueOrDefault(
    h3Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  ctaText: getValueOrDefault(
    ctaText,
    "DEFAULT: Ready to get started? Call [phone] now for fast, reliable porta potty rental service in [location]!",
  ),
  mapLink: getValueOrDefault(
    mapLink,
    "https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
  ),
};

// DEFAULT: Home Content with comprehensive enhanced default fallbacks
const {
  metaTitle:
    homeMetaTitle = "DEFAULT: #1 Porta Potty Rental in [location] | Fast Delivery & Fair Prices",
  metaDescription:
    homeMetaDescription = "DEFAULT: Top-rated porta potty rental service in [location]. Fast delivery, competitive prices, and reliable service. Call [phone] for your free quote today!",
  bannerQuote: homeBannerQuote = "DEFAULT: Fast, Reliable, Affordable",
  bannerImage:
    homeBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner: homeH1Banner = "DEFAULT: #1 Porta Potty Rental Service in [location]",
  p1Banner:
    homeP1Banner = "DEFAULT: Get fast, reliable porta potty rental service in [location]. Same-day delivery available. Call [phone] for your free quote!",
  h2: homeh2 = "DEFAULT: Why Choose Our Porta Potty Rental Service?",
  p2: homep2 = "DEFAULT: We provide the fastest, most reliable porta potty rental service in [location] with competitive pricing and exceptional customer service.",
  h2Image:
    homeh2Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h3: homeh3 = "DEFAULT: Professional Porta Potty Rental Solutions",
  p3: homep3 = "DEFAULT: From outdoor events to construction projects, we have the right porta potty type for your needs in [location].",
  h3Image:
    homeh3Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  mapLink:
    homemapLink = " https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
  faq = [
    {
      FAQ: "DEFAULT: What types of porta potties do you offer?",
      Answer:
        "DEFAULT: We offer standard, deluxe, handicap accessible, and luxury porta potties to meet all your event needs.",
      question: "DEFAULT: What types of porta potties do you offer?",
      answer:
        "DEFAULT: We offer standard, deluxe, handicap accessible, and luxury porta potties to meet all your event needs.",
    },
    {
      FAQ: "DEFAULT: How quickly can you deliver?",
      Answer:
        "DEFAULT: We offer same-day and next-day delivery in [location] for your convenience.",
      question: "DEFAULT: How quickly can you deliver?",
      answer:
        "DEFAULT: We offer same-day and next-day delivery in [location] for your convenience.",
    },
  ],
  reviews = [
    {
      name: "DEFAULT: John D.",
      rating: 5,
      review:
        "DEFAULT: Excellent service! Fast delivery and pickup. Highly recommended!",
      Review:
        "DEFAULT: Excellent service! Fast delivery and pickup. Highly recommended!",
    },
    {
      name: "DEFAULT: Sarah M.",
      rating: 5,
      review:
        "DEFAULT: Professional and reliable. Great pricing and customer service.",
      Review:
        "DEFAULT: Professional and reliable. Great pricing and customer service.",
    },
  ],
  whyChooseSection = {
    title: "DEFAULT: Why Choose Our Porta Potty Rental Service?",
    whyChooseData: [
      {
        title: "DEFAULT: Fast Delivery",
        description: "DEFAULT: Same-day and next-day delivery available",
        imageUrl: "DEFAULT: Comprehensive-Services.svg",
      },
      {
        title: "DEFAULT: Clean Facilities",
        description: "DEFAULT: Well-maintained, sanitized porta potties in [location]",
        imageUrl: "DEFAULT: Transparent-Pricing.png",
      },
      {
        title: "DEFAULT: Professional Service",
        description:
          "DEFAULT: Experienced team with excellent customer service",
        imageUrl: "DEFAULT: Expert-Team.png",
      },
    ],
  },
  affordableWidget = {
    title: "DEFAULT: Affordable Porta Potty Rental Solutions",
    description:
      "DEFAULT: Get the best prices on porta potty rentals in [location] with transparent pricing and no hidden fees.",
    ctaText: "DEFAULT: Get Your Free Quote",
    cards: [
      {
        title: "DEFAULT: Event Rentals",
        description: "DEFAULT: Perfect for weddings, festivals, and outdoor events",
        price: "DEFAULT: Starting at $99",
      },
      {
        title: "DEFAULT: Construction Sites",
        description: "DEFAULT: Ideal for construction and work sites",
        price: "DEFAULT: Starting at $149",
      },
    ],
  },
  processWidget = {
    title: "DEFAULT: Simple 3-Step Process",
    description:
      "",
    steps: [
      {
        step: "DEFAULT: 1",
        title: "DEFAULT: Call or Book Online",
        description: "DEFAULT: Contact us at [phone] or book online",
      },
      {
        step: "DEFAULT: 2",
        title: "DEFAULT: We Deliver",
        description: "DEFAULT: Fast delivery to your location in [location]",
      },
      {
        step: "DEFAULT: 3",
        title: "DEFAULT: We Pick Up",
        description: "DEFAULT: We handle pickup and servicing for you",
      },
    ],
  },
  hourCtaWidget = {
    title: "DEFAULT: 24-Hour Porta Potty Rental Service Available",
  },
} = (homePageDataJson as any) || {};

const homePageContent: any = {
  metaTitle: getValueOrDefault(
    homeMetaTitle,
    "DEFAULT: #1 Porta Potty Rental in [location] | Fast Delivery & Fair Prices",
  ),
  metaDescription: getValueOrDefault(
    homeMetaDescription,
    "DEFAULT: Top-rated porta potty rental service in [location]. Fast delivery, competitive prices, and reliable service. Call [phone] for your free quote today!",
  ),
  bannerQuote: getValueOrDefault(
    homeBannerQuote,
    "DEFAULT: Fast, Reliable, Affordable",
  ),
  bannerImage: getValueOrDefault(
    homeBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    homeH1Banner,
    "DEFAULT: #1 Porta Potty Rental Service in [location]",
  ),
  p1Banner: getValueOrDefault(
    homeP1Banner,
    "DEFAULT: Get fast, reliable porta potty rental service in [location]. Same-day delivery available. Call [phone] for your free quote!",
  ),
  h2: getValueOrDefault(
    homeh2,
    "DEFAULT: Why Choose Our Porta Potty Rental Service?",
  ),
  p2: getValueOrDefault(
    homep2,
    "DEFAULT: We provide the fastest, most reliable porta potty rental service in [location] with competitive pricing and exceptional customer service.",
  ),
  h2Image: getValueOrDefault(
    homeh2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h3: getValueOrDefault(
    homeh3,
    "DEFAULT: Professional Porta Potty Rental Solutions",
  ),
  p3: getValueOrDefault(
    homep3,
    "DEFAULT: From outdoor events to construction projects, we have the right porta potty type for your needs in [location].",
  ),
  h3Image: getValueOrDefault(
    homeh3Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  mapLink: getValueOrDefault(
    homemapLink,
    "https://maps.google.com/maps?q=[location]&t=&z=10&ie=UTF8&iwloc=&output=embed",
  ),
  faq: ensureFaqSection(faq),
  reviews: ensureReviewsSection(reviews),
  whyChooseSection: (() => {
    const defaultWhyChoose = {
      title: "DEFAULT: Why Choose Our Porta Potty Rental Service?",
      whyChooseData: [
        {
          title: "DEFAULT: Fast Delivery",
          description: "DEFAULT: Same-day and next-day delivery available",
          imageUrl: "DEFAULT: Comprehensive-Services.svg",
        },
        {
          title: "DEFAULT: Clean Facilities",
          description: "DEFAULT: Well-maintained, sanitized porta potties in [location]",
          imageUrl: "DEFAULT: Transparent-Pricing.png",
        },
        {
          title: "DEFAULT: Professional Service",
          description:
            "DEFAULT: Experienced team with excellent customer service",
          imageUrl: "DEFAULT: Expert-Team.png",
        },
      ],
    };

    if (!whyChooseSection || typeof whyChooseSection !== "object") {
      return defaultWhyChoose;
    }

    const ensuredWhyChooseData =
      Array.isArray(whyChooseSection.whyChooseData) &&
      whyChooseSection.whyChooseData.length > 0
        ? whyChooseSection.whyChooseData.map((item: any, index: number) => ({
            title: getValueOrDefault(
              item?.title,
              defaultWhyChoose.whyChooseData[index]?.title ||
                "DEFAULT: Service Feature",
            ),
            description: getValueOrDefault(
              item?.description,
              defaultWhyChoose.whyChooseData[index]?.description ||
                "DEFAULT: Quality service description",
            ),
            imageUrl: getValueOrDefault(
              item?.imageUrl,
              defaultWhyChoose.whyChooseData[index]?.imageUrl ||
                "DEFAULT: service-icon.svg",
            ),
          }))
        : defaultWhyChoose.whyChooseData;

    return {
      title: getValueOrDefault(whyChooseSection.title, defaultWhyChoose.title),
      whyChooseData: ensuredWhyChooseData,
    };
  })(),
  affordableWidget: (() => {
    const defaultAffordable = {
      title: "DEFAULT: Affordable Porta Potty Rental Solutions",
      description:
        "DEFAULT: Get the best prices on porta potty rentals in [location] with transparent pricing and no hidden fees.",
      ctaText: "DEFAULT: Get Your Free Quote",
      cards: [
        {
          title: "DEFAULT: Event Rentals",
          description: "DEFAULT: Perfect for weddings, festivals, and outdoor events",
          price: "DEFAULT: Starting at $99",
        },
        {
          title: "DEFAULT: Construction Sites",
          description: "DEFAULT: Ideal for construction and work sites",
          price: "DEFAULT: Starting at $149",
        },
      ],
    };

    if (!affordableWidget || typeof affordableWidget !== "object") {
      return defaultAffordable;
    }

    const ensuredCards =
      Array.isArray(affordableWidget.cards) && affordableWidget.cards.length > 0
        ? affordableWidget.cards.map((card: any, index: number) => ({
            title: getValueOrDefault(
              card?.title,
              defaultAffordable.cards[index]?.title ||
                "DEFAULT: Service Package",
            ),
            description: getValueOrDefault(
              card?.description,
              defaultAffordable.cards[index]?.description ||
                "DEFAULT: Service description",
            ),
            price: getValueOrDefault(
              card?.price,
              defaultAffordable.cards[index]?.price ||
                "DEFAULT: Contact for pricing",
            ),
          }))
        : defaultAffordable.cards;

    return {
      title: getValueOrDefault(affordableWidget.title, defaultAffordable.title),
      description: getValueOrDefault(
        affordableWidget.description,
        defaultAffordable.description,
      ),
      ctaText: getValueOrDefault(
        affordableWidget.ctaText,
        defaultAffordable.ctaText,
      ),
      cards: ensuredCards,
    };
  })(),
  processWidget: (() => {
    const defaultProcess = {
      title: "DEFAULT: Simple 3-Step Process",
      description:
        "",
      steps: [
        {
          step: "DEFAULT: 1",
          title: "DEFAULT: Call or Book Online",
          description: "DEFAULT: Contact us at [phone] or book online",
        },
        {
          step: "DEFAULT: 2",
          title: "DEFAULT: We Deliver",
          description: "DEFAULT: Fast delivery to your location in [location]",
        },
        {
          step: "DEFAULT: 3",
          title: "DEFAULT: We Pick Up",
          description: "DEFAULT: We handle pickup and disposal for you",
        },
      ],
    };

    if (!processWidget || typeof processWidget !== "object") {
      return defaultProcess;
    }

    const ensuredSteps =
      Array.isArray(processWidget.steps) && processWidget.steps.length > 0
        ? processWidget.steps.map((step: any, index: number) => ({
            step: getValueOrDefault(
              step?.step,
              defaultProcess.steps[index]?.step || `DEFAULT: ${index + 1}`,
            ),
            title: getValueOrDefault(
              step?.title,
              defaultProcess.steps[index]?.title || "DEFAULT: Process Step",
            ),
            description: getValueOrDefault(
              step?.description,
              defaultProcess.steps[index]?.description ||
                "DEFAULT: Step description",
            ),
          }))
        : defaultProcess.steps;

    return {
      title: getValueOrDefault(processWidget.title, defaultProcess.title),
      description: getValueOrDefault(
        processWidget.description,
        defaultProcess.description,
      ),
      steps: ensuredSteps,
    };
  })(),
  hourCtaWidget: (() => {
    const defaultHourCta = {
      title: "DEFAULT: 24-Hour Porta Potty Rental Service Available",
    };

    if (!hourCtaWidget || typeof hourCtaWidget !== "object") {
      return defaultHourCta;
    }

    return {
      title: getValueOrDefault(hourCtaWidget.title, defaultHourCta.title),
    };
  })(),
};

// DEFAULT: Location Page Content with comprehensive default fallbacks
const {
  metaTitle:
    locationMetaTitle = "DEFAULT: Porta Potty Rental Service Areas | [location] and Surrounding Areas",
  metaDescription:
    locationMetaDescription = "DEFAULT: We provide porta potty rental services throughout [location] and surrounding areas. Find your location and get fast, reliable service today.",
  bannerQuote:
    locationBannerQuote = "DEFAULT: Serving [location] and Surrounding Areas",
  bannerImage:
    locationBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner:
    locationH1Banner = "DEFAULT: Porta Potty Rental Service Areas in [location]",
  p1Banner:
    locationP1Banner = "DEFAULT: We proudly serve [location] and surrounding areas with fast, reliable porta potty rental services. Find your location below or call [phone] to confirm service availability.",
  blogMetas = {
    metaTitle: "DEFAULT: Local Porta Potty Rental Tips and Information",
    metaDescription:
      "DEFAULT: Get helpful tips and information about porta potty rental in your area.",
  },
} = (locationPageDataJson as any) || {};

const locationPageContent: any = {
  metaTitle: getValueOrDefault(
    locationMetaTitle,
    "DEFAULT: Porta Potty Rental Service Areas | [location] and Surrounding Areas",
  ),
  metaDescription: getValueOrDefault(
    locationMetaDescription,
    "DEFAULT: We provide porta potty rental services throughout [location] and surrounding areas. Find your location and get fast, reliable service today.",
  ),
  bannerQuote: getValueOrDefault(
    locationBannerQuote,
    "DEFAULT: Serving [location] and Surrounding Areas",
  ),
  bannerImage: getValueOrDefault(
    locationBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    locationH1Banner,
    "DEFAULT: Porta Potty Rental Service Areas in [location]",
  ),
  p1Banner: getValueOrDefault(
    locationP1Banner,
    "DEFAULT: We proudly serve [location] and surrounding areas with fast, reliable porta potty rental services. Find your location below or call [phone] to confirm service availability.",
  ),
  blogMetas: (() => {
    const defaultBlogMetas = {
      metaTitle: "DEFAULT: Local Porta Potty Rental Tips and Information",
      metaDescription:
        "DEFAULT: Get helpful tips and information about porta potty rental in your area.",
    };

    if (!blogMetas || typeof blogMetas !== "object") {
      return defaultBlogMetas;
    }

    return {
      metaTitle: getValueOrDefault(
        blogMetas.metaTitle,
        defaultBlogMetas.metaTitle,
      ),
      metaDescription: getValueOrDefault(
        blogMetas.metaDescription,
        defaultBlogMetas.metaDescription,
      ),
    };
  })(),
};

// DEFAULT: Brands Content with comprehensive default fallbacks
const {
  metaTitle:
    brandsMetaTitle = "DEFAULT: Our Trusted Porta Potty Rental Partners | Quality Equipment & Service",
  metaDescription:
    brandsMetaDescription = "DEFAULT: Learn about our trusted porta potty rental partners and equipment. We use only the highest quality facilities for reliable service in [location].",
  bannerImage:
    brandsBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner: brandsH1Banner = "DEFAULT: Our Trusted Porta Potty Rental Partners",
  h2: brandh2 = "DEFAULT: Quality Facilities You Can Trust",
  p2: brandsP2 = "DEFAULT: We partner with the most reliable suppliers in the industry to ensure you get quality porta potties and professional service every time in [location].",
  h2Image:
    brandsh2Image = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  brandslist = [
    {
      name: "DEFAULT: Premium Porta Potty Solutions",
      description: "DEFAULT: Industry-leading porta potty rental equipment",
      image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930+1",
      brandName: "DEFAULT: Premium Porta Potty Solutions",
      brandLink: "DEFAULT: #",
      brandDescription:
        "DEFAULT: Industry-leading Porta Potty rental equipment and professional service",
    },
    {
      name: "DEFAULT: Reliable Waste Management",
      description: "DEFAULT: Trusted waste management solutions",
      image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930+2",
      brandName: "DEFAULT: Reliable Waste Management",
      brandLink: "DEFAULT: #",
      brandDescription:
        "DEFAULT: Trusted waste management solutions for all your needs",
    },
  ],
} = (brandsDataJson as any) || {};

const brandsContent: any = {
  metaTitle: getValueOrDefault(
    brandsMetaTitle,
    "DEFAULT: Our Trusted Porta Potty Rental Partners | Quality Equipment & Service",
  ),
  metaDescription: getValueOrDefault(
    brandsMetaDescription,
    "DEFAULT: Learn about our trusted porta potty rental partners and equipment. We use only the highest quality facilities for reliable service in [location].",
  ),
  bannerImage: getValueOrDefault(
    brandsBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    brandsH1Banner,
    "DEFAULT: Our Trusted Porta Potty Rental Partners",
  ),
  h2: getValueOrDefault(brandh2, "DEFAULT: Quality Equipment You Can Trust"),
  p2: getValueOrDefault(
    brandsP2,
    "DEFAULT: We partner with the most reliable suppliers in the industry to ensure you get quality porta potties and professional service every time in [location].",
  ),
  h2Image: getValueOrDefault(
    brandsh2Image,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  brandslist: (() => {
    const defaultBrandsList = [
      {
        name: "DEFAULT: Premium Porta Potty Solutions",
        description: "DEFAULT: Industry-leading porta potty rental equipment",
        image:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        brandName: "DEFAULT: Premium Porta Potty Solutions",
        brandLink: "DEFAULT: #",
        brandDescription:
          "DEFAULT: Industry-leading Porta Potty rental equipment and professional service",
      },
      {
        name: "DEFAULT: Reliable Sanitation Management",
        description: "DEFAULT: Trusted sanitation and portable restroom solutions",
        image:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        brandName: "DEFAULT: Reliable Waste Management",
        brandLink: "DEFAULT: #",
        brandDescription:
          "DEFAULT: Trusted waste management solutions for all your needs",
      },
    ];

    if (!Array.isArray(brandslist) || brandslist.length === 0) {
      return defaultBrandsList;
    }

    return brandslist.map((brand: any, index: number) => ({
      name: getValueOrDefault(
        brand?.name || brand?.brandName,
        defaultBrandsList[index]?.name || "DEFAULT: Trusted Brand",
      ),
      description: getValueOrDefault(
        brand?.description || brand?.brandDescription,
        defaultBrandsList[index]?.description ||
          "DEFAULT: Quality service provider",
      ),
      image: getValueOrDefault(
        brand?.image,
        defaultBrandsList[index]?.image ||
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      ),
      brandName: getValueOrDefault(
        brand?.brandName || brand?.name,
        defaultBrandsList[index]?.brandName || "DEFAULT: Trusted Brand",
      ),
      brandLink: getValueOrDefault(
        brand?.brandLink,
        defaultBrandsList[index]?.brandLink || "DEFAULT: #",
      ),
      brandDescription: getValueOrDefault(
        brand?.brandDescription || brand?.description,
        defaultBrandsList[index]?.brandDescription ||
          "DEFAULT: Quality service provider",
      ),
    }));
  })(),
};

// DEFAULT: Service Page Content with comprehensive default fallbacks
const {
  metaTitle:
    serviceMetaTitle = "DEFAULT: Professional Porta Potty Rental Services in [location] | All Event Types",
  metaDescription:
    serviceMetaDescription = "DEFAULT: Complete porta potty rental services in [location]. Events, construction, festivals, and emergency needs. Call [phone] for fast service.",
  bannerQuote:
    serviceBannerQuote = "DEFAULT: Professional Porta Potty Rental Services",
  bannerImage:
    serviceBannerImage = "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  h1Banner:
    serviceH1Banner = "DEFAULT: Professional Porta Potty Rental Services in [location]",
  p1Banner:
    serviceP1Banner = "DEFAULT: We provide comprehensive porta potty rental services for all types of events and projects in [location]. From weddings to construction sites, we have you covered.",
  serviceTitle = "DEFAULT: Our Porta Potty Rental Services",
  serviceData = {
    title: "DEFAULT: Complete Porta Potty Rental Solutions",
    p: "DEFAULT: We offer a full range of porta potty rental services to meet all your sanitation needs in [location].",
    lists: [
      {
        title: "DEFAULT: Residential Porta Potty Rental in [location]",
        description:
          "DEFAULT: Call Us At [phone]. We offer residential Porta Potty rental in [location] for home cleanouts, remodeling, yard waste, and more.",
        h2: "DEFAULT: Need a Porta Potty for Your Home Project?",
        p2: "DEFAULT: Residential Porta Potty rental in [location] makes it easy to get rid of clutter, renovation debris, and junk without the trips to the dump. Whether you're clearing the garage or remodeling your kitchen, we've got the right size bin for the job. Call Us At [phone]",
        h3: "DEFAULT: Perfect For Everyday Home Cleanup",
        p3: "DEFAULT: Spring cleaning | Garage cleanouts | DIY renovations | Moving day trash | Yard debris | Storm cleanup | Furniture disposal | Basement junk removal",
        seoContent:
          "DEFAULT: <h2>Residential Porta Potty Rentals in [location]</h2><p>Our residential Porta Potty rental service in [location] is designed to keep your home projects organized and stress-free. We deliver driveway-friendly bins with flexible rental periods, perfect for cleanups big and small. Call Us At [phone]</p>",
        slug: "DEFAULT: residential-porta-potty-rental",
        imageUrl:
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      }
    ],
  },
} = (servicePageDataJson as any) || {};

const servicePageContent: any = {
  metaTitle: getValueOrDefault(
    serviceMetaTitle,
    "DEFAULT: Professional Porta Potty Rental Services in [location] | All Event Types",
  ),
  metaDescription: getValueOrDefault(
    serviceMetaDescription,
    "DEFAULT: Complete porta potty rental services in [location]. Events, construction, festivals, and emergency needs. Call [phone] for fast service.",
  ),
  bannerQuote: getValueOrDefault(
    serviceBannerQuote,
    "DEFAULT: Professional Porta Potty Rental Services",
  ),
  bannerImage: getValueOrDefault(
    serviceBannerImage,
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  ),
  h1Banner: getValueOrDefault(
    serviceH1Banner,
    "DEFAULT: Professional Porta Potty Rental Services in [location]",
  ),
  p1Banner: getValueOrDefault(
    serviceP1Banner,
    "DEFAULT: We provide comprehensive porta potty rental services for all types of events and projects in [location]. From weddings to construction sites, we have you covered.",
  ),
  serviceTitle: getValueOrDefault(
    serviceTitle,
    "DEFAULT: Our Porta Potty Rental Services",
  ),
  serviceData: ensureServiceDataLists(serviceData),
};



// DEFAULT: SubDomain URL Content with comprehensive default fallbacks
const subDomainUrlContent: any = (() => {
  const defaultSubDomainContent = {
    "default-location": {
      name: "DEFAULT: Your City",
      publishedAt: "DEFAULT: 2025-01-01",
      slug: "DEFAULT: your-city",
      metaTitle: "DEFAULT: Affordable Porta Potty Rental Services in Your City",
      metaDescription:
        "DEFAULT: Looking for reliable Porta Potty rental in Your City? We offer fast delivery, flexible sizes, and affordable pricing. Call us at [phone]!",
      bannerImage:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      h1Banner: "DEFAULT: Porta Potty Rentals in Your City Near You",
      h2: "DEFAULT: Your Trusted Porta Potty Rental Partner in Your City",
      p2: "DEFAULT: Whether you're managing a home renovation, clearing out a property, or running a construction site, our Porta Potty rental service in Your City has the right bin for the job.",
      h2Image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      serviceTtile: "DEFAULT: Our Porta Potty Rental Services",
      needsSection: {
        title: "DEFAULT: Why Choose Us for Porta Potty Rental in Your City",
        description: "DEFAULT: Professional service you can trust",
        needslist: [
          {
            title: "DEFAULT: Same-Day Delivery",
            description:
              "DEFAULT: Get your Porta Potty when you need it. We offer fast delivery so your project doesn't have to wait.",
          },
          {
            title: "DEFAULT: Flat-Rate Pricing",
            description:
              "DEFAULT: No hidden fees. Just straightforward pricing that makes budgeting simple.",
          },
        ],
      },
      processSection: {
        title: "DEFAULT: How Our Porta Potty Rental Process Works",
        processData: [
          {
            title: "DEFAULT: Choose Your Porta Potty",
            description:
              "DEFAULT: Pick the size that fits your cleanup. Not sure? Our team can help you decide.",
          },
          {
            title: "DEFAULT: Schedule Delivery",
            description:
              "DEFAULT: Tell us when and where. We'll drop the bin off right where you need it.",
          },
        ],
      },
      h5: "DEFAULT: Affordable Porta Potty Rentals Company for Every Occasion",
      p5: "DEFAULT: Whether it's an outdoor event or a construction project, our porta potty rentals offer the ideal sanitation solution.",
      h5Image:
        "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
      faq: [
        {
          ques: "DEFAULT: What types of porta potties do you offer?",
          ans: "DEFAULT: We offer multiple types including standard, deluxe, handicap accessible, and luxury porta potties to suit every event.",
        },
      ],
      reviews: [],
      neighbourhoods: "DEFAULT: Local Neighborhoods",
      zipCodes: "DEFAULT: 12345",
      address: "DEFAULT: 123 Main Street, Your City, State 12345",
    },
  };

  if (
    !subDomainUrlContentJson ||
    typeof subDomainUrlContentJson !== "object" ||
    Object.keys(subDomainUrlContentJson).length === 0
  ) {
    return defaultSubDomainContent;
  }

  const processedSubdomains: any = {};
  for (const [key, locationData] of Object.entries(subDomainUrlContentJson)) {
    if (locationData && typeof locationData === "object") {
      const location = locationData as any;
      processedSubdomains[key] = {
        name: getValueOrDefault(location?.name, `DEFAULT: ${key}`),
        publishedAt: getValueOrDefault(
          location?.publishedAt,
          "DEFAULT: 2025-01-01",
        ),
        slug: getValueOrDefault(location?.slug, `DEFAULT: ${key}`),
        metaTitle: getValueOrDefault(
          location?.metaTitle,
          `DEFAULT: Affordable Porta Potty Rental Services in ${location?.name || key}`,
        ),
        metaDescription: getValueOrDefault(
          location?.metaDescription,
          `DEFAULT: Looking for reliable porta potty rental in ${location?.name || key}? We offer fast delivery and clean facilities.`,
        ),
        bannerImage: getValueOrDefault(
          location?.bannerImage,
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        ),
        h1Banner: getValueOrDefault(
          location?.h1Banner,
          `DEFAULT: Porta Potty Rentals in ${location?.name || key} Near You`,
        ),
        h2: getValueOrDefault(
          location?.h2,
          `DEFAULT: Your Trusted Porta Potty Rental Partner in ${location?.name || key}`,
        ),
        p2: getValueOrDefault(
          location?.p2,
          `DEFAULT: Professional porta potty rental service in ${location?.name || key} for all your event and project needs.`,
        ),
        h2Image: getValueOrDefault(
          location?.h2Image,
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        ),
        serviceTtile: getValueOrDefault(
          location?.serviceTtile,
          "DEFAULT: Our Porta Potty Rental Services",
        ),
        serviceTitle: getValueOrDefault(
          location?.serviceTitle || location?.serviceTtile,
          "DEFAULT: Our Porta Potty Rental Services",
        ),
        needsSection: (() => {
          const defaultNeeds = {
            title: `DEFAULT: Why Choose Us for Porta Potty Rental in ${location?.name || key}`,
            description: "DEFAULT: Professional service you can trust",
            needslist: [
              {
                title: "DEFAULT: Same-Day Delivery",
                description:
                  "DEFAULT: Fast delivery so your project doesn't have to wait.",
              },
            ],
          };

          if (
            !location?.needsSection ||
            typeof location.needsSection !== "object"
          ) {
            return defaultNeeds;
          }

          const ensuredNeedsList =
            Array.isArray(location.needsSection.needslist) &&
            location.needsSection.needslist.length > 0
              ? location.needsSection.needslist.map(
                  (need: any, index: number) => ({
                    title: getValueOrDefault(
                      need?.title,
                      `DEFAULT: Service Feature ${index + 1}`,
                    ),
                    description: getValueOrDefault(
                      need?.description,
                      "DEFAULT: Quality service description",
                    ),
                  }),
                )
              : defaultNeeds.needslist;

          return {
            title: getValueOrDefault(
              location.needsSection.title,
              defaultNeeds.title,
            ),
            description: getValueOrDefault(
              location.needsSection.description,
              defaultNeeds.description,
            ),
            needslist: ensuredNeedsList,
          };
        })(),
        processSection: (() => {
          const defaultProcess = {
            title: "DEFAULT: How Our Porta Potty Rental Process Works",
            processData: [
              {
                title: "DEFAULT: Choose Your Porta Potty",
                description: "DEFAULT: Pick the type that fits your event or project.",
              },
            ],
          };

          if (
            !location?.processSection ||
            typeof location.processSection !== "object"
          ) {
            return defaultProcess;
          }

          const ensuredProcessData =
            Array.isArray(location.processSection.processData) &&
            location.processSection.processData.length > 0
              ? location.processSection.processData.map(
                  (process: any, index: number) => ({
                    title: getValueOrDefault(
                      process?.title,
                      `DEFAULT: Step ${index + 1}`,
                    ),
                    description: getValueOrDefault(
                      process?.description,
                      "DEFAULT: Process description",
                    ),
                  }),
                )
              : defaultProcess.processData;

          return {
            title: getValueOrDefault(
              location.processSection.title,
              defaultProcess.title,
            ),
            processData: ensuredProcessData,
          };
        })(),
        h5: getValueOrDefault(
          location?.h5,
          "DEFAULT: Affordable Porta Potty Rentals Company for Every Occasion",
        ),
        p5: getValueOrDefault(
          location?.p5,
          "DEFAULT: Whether it's an outdoor event or a construction project, our porta potty rentals offer the ideal sanitation solution.",
        ),
        h5Image: getValueOrDefault(
          location?.h5Image,
          "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        ),
        faq:
          Array.isArray(location?.faq) && location.faq.length > 0
            ? location.faq.map((faqItem: any, index: number) => ({
                ques: getValueOrDefault(
                  faqItem?.ques,
                  `DEFAULT: Frequently Asked Question ${index + 1}`,
                ),
                ans: getValueOrDefault(
                  faqItem?.ans,
                  "DEFAULT: Professional answer to your porta potty rental question.",
                ),
              }))
            : [
                {
                  ques: "DEFAULT: What types of porta potties do you offer?",
                  ans: "DEFAULT: We offer multiple types to suit every event.",
                },
              ],
        reviews: Array.isArray(location?.reviews) ? location.reviews : [],
        neighbourhoods: getValueOrDefault(
          location?.neighbourhoods,
          "DEFAULT: Local Neighborhoods",
        ),
        zipCodes: getValueOrDefault(location?.zipCodes, "DEFAULT: 12345"),
        address: getValueOrDefault(
          location?.address,
          "DEFAULT: 123 Main Street, Your City, State 12345",
        ),
      };
    }
  }

  return Object.keys(processedSubdomains).length > 0
    ? processedSubdomains
    : defaultSubDomainContent;
})();

// DEFAULT: Enhanced utility function to replace placeholders in strings with comprehensive error handling
function replacePlaceholders(obj: any, ContactInfo: any): any {
  // DEFAULT: Ensure ContactInfo has comprehensive default values if missing
  const safeContactInfo = {
    location: ContactInfo?.location || "DEFAULT: Your City, State",
    No: ContactInfo?.No || "DEFAULT: (555) 123-4567",
    tel: ContactInfo?.tel || "DEFAULT: +15551234567",
    mail: ContactInfo?.mail ,
    baseUrl: ContactInfo?.baseUrl || "DEFAULT: https://portapottyrental.com/",
    host: ContactInfo?.host || "DEFAULT: portapottyrental.com",
    name: ContactInfo?.name || "DEFAULT: Premier Porta Potty Rental",
    address:
      ContactInfo?.address ||
      "DEFAULT: 123 Main Street, Your City, State 12345",
    service: ContactInfo?.service || "DEFAULT: Porta Potty Rental",
    zipCode: ContactInfo?.zipCode || "DEFAULT: 12345",
    ...ContactInfo,
  };

  if (typeof obj === "string") {
    return obj
      .split("[location]")
      .join(safeContactInfo.location)
      .split("[phone]")
      .join(safeContactInfo.No);
  } else if (Array.isArray(obj)) {
    return obj.map((item) => replacePlaceholders(item, safeContactInfo));
  } else if (obj && typeof obj === "object") {
    const result: any = {};
    for (const key in obj) {
      result[key] = replacePlaceholders(obj[key], safeContactInfo);
    }
    return result;
  }
  return obj;
}

// DEFAULT: Use contactContent as ContactInfo for replacements with enhanced error handling
const ContactInfo = contactContent || {
  location: "DEFAULT: Your City, State",
  No: "DEFAULT: (555) 123-4567",
  tel: "DEFAULT: +15551234567",
  mail: "",
  baseUrl: "DEFAULT: https://portapottyrental.com/",
  host: "DEFAULT: portapottyrental.com",
  name: "DEFAULT: Premier Porta Potty Rental",
  address: "DEFAULT: 123 Main Street, Your City, State 12345",
  service: "DEFAULT: Porta Potty Rental",
  zipCode: "DEFAULT: 12345",
  bannerImage:
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  logoImage:
    "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
  favicon: "DEFAULT: /favicon.ico",
  googleAnalytics: "DEFAULT: GA_MEASUREMENT_ID",
  minor: "DEFAULT: #fed700",
  main: "DEFAULT: #283143",
};

// DEFAULT: Enhanced comprehensive content export with complete error handling and subdomain support
const content: {
  aboutContent: any;
  contactContent: any;
  contactPageContent: any;
  homePageContent: any;
  locationPageContent: any;
  brandsContent: any;
  servicePageContent: any;
  subDomainUrlContent: any;
} = {
  aboutContent: replacePlaceholders(aboutContent || {}, ContactInfo),
  contactContent: replacePlaceholders(
    contactContent || ContactInfo,
    ContactInfo,
  ),
  
  contactPageContent: replacePlaceholders(
    contactPageContent || {},
    ContactInfo,
  ),
  homePageContent: replacePlaceholders(homePageContent || {}, ContactInfo),
  locationPageContent: replacePlaceholders(
    locationPageContent || {},
    ContactInfo,
  ),
  brandsContent: replacePlaceholders(brandsContent || {}, ContactInfo),
  servicePageContent: replacePlaceholders(
    servicePageContent || {},
    ContactInfo,
  ),
  subDomainUrlContent: replacePlaceholders(
    subDomainUrlContent || {},
    ContactInfo,
  ),
};

// DEFAULT: Enhanced debug logging to help troubleshoot content loading with comprehensive details
// if (typeof window === 'undefined') {
//   console.log('DEFAULT: Content processing summary:', {
//     aboutContentKeys: Object.keys(content.aboutContent),
//     contactContentKeys: Object.keys(content.contactContent),
//     blogPostsCount: content.blogContent?.posts?.length || 0,
//     blogCategoriesCount: Object.keys(content.blogCategoryMetaMap).length,
//     homeContentKeys: Object.keys(content.homePageContent),
//     locationContentKeys: Object.keys(content.locationPageContent),
//     brandsContentKeys: Object.keys(content.brandsContent),
//     serviceContentKeys: Object.keys(content.servicePageContent),
//     typesContentKeys: Object.keys(content.typesJsonContent),
//     subdomainLocationsCount: Object.keys(content.subDomainUrlContent).length,
//     missionSectionLength: content.aboutContent?.missionSection?.length || 0,
//     hasAreaweserveSection: !!content.aboutContent?.areaweserveSection,
//     faqCount: content.homePageContent?.faq?.length || 0,
//     reviewsCount: content.homePageContent?.reviews?.length || 0,
//     whyChooseDataCount: content.homePageContent?.whyChooseSection?.whyChooseData?.length || 0,
//     processStepsCount: content.homePageContent?.processWidget?.steps?.length || 0,
//     affordableCardsCount: content.homePageContent?.affordableWidget?.cards?.length || 0,
//     serviceListsCount: content.servicePageContent?.serviceData?.lists?.length || 0,
//     typesListsCount: content.typesJsonContent?.serviceData?.lists?.length || 0,
//     brandsListCount: content.brandsContent?.brandslist?.length || 0
//   });
// }

export default content;
