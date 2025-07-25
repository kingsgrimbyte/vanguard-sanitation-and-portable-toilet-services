import Image from "next/image";
import { notFound } from "next/navigation";
import Banner from "@/app/components/Home/Banner";
import Service from "@/app/components/Home/Service";
import Faq from "@/app/components/Home/Faq";
import HourCta from "@/app/components/Home/HourCta";
import ReviewWidget from "@/app/components/Widgets/ReviewWidget";
import AreaWeServe from "@/app/components/Widgets/AreaWeServe";
import Affordable from "@/app/components/Home/Affordable";
import ProcessWidget from "@/app/components/Widgets/ProcessWidget";
import NavbarState from "@/app/components/State/NavbarState";
import Link from "next/link";
import ZipAndNeighAccordian from "@/app/components/Home/ZipAndNeighAccordian";

import contactContent from "@/app/Data/content";
import subdomainContent from "@/app/Data/FinalContent";
import PortaPottyCalculator from "@/app/components/Widgets/Calculator";

const ContactInfo: any = contactContent.contactContent;
const content: any = subdomainContent.subdomainData;

interface SubdomainPageProps {
  params: { State: string };
}
const stateName: Record<string, string> = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};
export function generateMetadata({ params }: SubdomainPageProps) {
  const { State } = params;
  const cityData: any = content;
  const ContentData = cityData[State];
  
  return {
    title: ContentData?.metaTitle?.split("[location]").join(ContentData?.name || ContactInfo.location)
    ?.split("[phone]").join(ContactInfo.No),
    description: ContentData?.metaDescription?.split("[location]").join(ContentData?.name || ContactInfo.location)
    ?.split("[phone]").join(ContactInfo.No),
    alternates: {
      canonical: `https://${State}.${ContactInfo.host}`,
    },
  };
}
export default function SubdomainPage({ params }: SubdomainPageProps) {
  // console.log(params)
  const { State } = params;
  const cityData: any = content;
  const abbrevations: any = State.split("-").pop();

  // console.log(State)
  // Validate subdomain
  const subDomain = Object.keys(cityData);
  const validSubdomains = subDomain;
  if (!validSubdomains.includes(State)) {
    notFound();
  }
  // nity or db query us particular subdomain read data from database .... neeche theme nu pass hoyega and page render hojaega
  // Render subdomain-specific content
  const ContentData = cityData[State];
  const slugs: any = Object.keys(cityData)
    .filter((key) => key !== State)
    .map((key) => cityData[key]);
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `${ContactInfo.name}`,
          image: `${ContactInfo.logoImage}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${stateName[abbrevations.toUpperCase()]} ${ContactInfo.service}`,
            addressLocality: `${ContentData?.name}, ${abbrevations.toUpperCase()}`,
            addressRegion: stateName[abbrevations.toUpperCase()],
            postalCode: ContentData?.zipCodes.split("|")[0] || "",
            addressCountry: "US",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4.9",
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: `${stateName[abbrevations.toUpperCase()]} ${ContactInfo.service}`,
            },
          },
          telephone: ContactInfo.No,
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "20:00",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: `${ContactInfo.service} in ${ContentData?.name}, ${abbrevations.toUpperCase()}`,
          brand: {
            "@type": "Brand",
            name: `${ContactInfo.service} ${ContentData?.name}, ${abbrevations.toUpperCase()} Pros`,
          },
          description: `${ContentData?.metaDescription?.split("[location]").join(ContentData?.name || ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No)}`,
          url: `https://${State}.${ContactInfo.host}`,
          aggregateRating: {
            "@type": "AggregateRating",
            reviewCount: 7,
            ratingValue: 4.802,
          },
        },
      ],
    };
  
  return (
    <div className="">
      <NavbarState />
      <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ... */}
      </section>
      <div className="mx-auto max-w-[2100px] overflow-hidden">
        <Banner
          h1={`${ContentData.h1Banner?.split("[location]").join( ContentData?.name || ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No)} ${ContentData.zipCodes && ContentData.zipCodes.split("|")[0]}`}
          image={ContentData.bannerImage}
          header={ContentData.bannerQuote}
          p1={`${ContentData?.metaDescription?.split("[location]").join( ContentData?.name || ContactInfo.location)
            ?.split("[phone]").join(ContactInfo.No)}.`}
        />
        {/* Section 1 */}
        <div className="mt-14 grid w-full grid-cols-1 items-center  gap-6 px-6 md:mt-28 md:grid-cols-2 md:px-24">
          <div className=" h-full">
            <Image
              height={1000}
              width={1000}
              src={`${ContentData?.h2Image}`}
              className="h-full w-full  rounded-lg object-cover shadow-lg"
              alt={ContentData?.h2Image.split("/").pop()?.split(".")[0] || "image"}
            />
          </div>
          <div className=" flex w-full flex-col gap-3 ">
            <span className="text-sm font-bold text-main">
              {ContentData?.name} {ContactInfo.name} Services
            </span>
            <h2 className="text-3xl font-bold">{ContentData?.h2}</h2>

            <div
              className="mt-3  text-justify"
              dangerouslySetInnerHTML={{ __html: ContentData?.p2 }}
            ></div>
            <div className="gap-4 md:flex">
              <div className="rounded-lg bg-gray-100 p-4 shadow-lg">
                <h4 className="text-xl font-bold">
                  Residential {ContactInfo.name} Services
                </h4>
                <p>
                  Professional Residential {ContactInfo.service} in{" "}
                  {ContentData?.name}, {State.split("-").pop()?.toUpperCase()}.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 shadow-lg">
                <h4 className="text-xl font-bold">
                  Commercial {ContactInfo.name} Services
                </h4>
                <p>
                  Commercial {ContactInfo.service} in {ContentData?.name},{" "}
                  {State.split("-").pop()?.toUpperCase()}.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 1 */}
        {/* Section 2 */}
        {ContentData.h3 && (
          <div className="mt-14 flex flex-col items-center justify-center bg-main p-6 px-6 text-center text-white md:mt-28 md:px-24">
            <h2 className="text-2xl font-bold ">{ContentData?.h3}</h2>
            <p
              className="mt-4 text-lg"
              dangerouslySetInnerHTML={{ __html: ContentData?.p3 }}
            ></p>
          </div>
        )}
        {/* Section 2 */}
        {/* Service */}
        <div className="mt-14 md:mt-20">
          <Service value={State} />
        </div>
        {/* Service */}
        {/* Needs */}
        {ContentData?.needsSection ? (
          <div className="mt-14 w-full px-6 md:mt-28 md:px-24">
            <h2 className="text-first text-center text-3xl font-extrabold">
              {ContentData?.needsSection.title}
            </h2>
            <p
              className="mt-4 text-center text-lg"
              dangerouslySetInnerHTML={{
                __html: ContentData?.needsSection.description,
              }}
            ></p>
            <div className="event mt-6 grid grid-cols-1 gap-5 text-center sm:grid-cols-2 md:gap-16 md:px-20 lg:grid-cols-3">
              {ContentData?.needsSection.needslist.map(
                (item: any, index: any) => {
                  return (
                    <div
                      className=" 1 rounded-md border p-4 shadow-md "
                      key={index}
                    >
                      <div className="1 text-center text-xl font-bold text-minor">
                        {item.title}
                      </div>
                      <div className="mt-4 text-lg">{item.description}</div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        ) : null}
        {/* Needs  */}
        <div className="mt-10">
          <Affordable />
        </div>
        {/* Section 4 */}
        {ContentData.h5 && (
          <div className="mt-14 grid grid-cols-1  gap-10 px-6 md:mt-28 md:grid-cols-2 md:px-24 ">
            <div className="flex flex-col justify-center    ">
              <h2 className="text-first text-3xl font-bold">
                {ContentData.h5}
              </h2>
              <div
                className="mt-4  list-disc text-justify"
                dangerouslySetInnerHTML={{ __html: ContentData.p5 }}
              ></div>
            </div>
            <div className="">
              <Image
                height={10000}
                width={10000}
                src={`${ContentData.h5Image}`}
                className=" h-[16rem] w-full rounded-lg object-cover shadow-lg"
                alt={ContentData.h5Image.split("/").pop()?.split(".")[0] || "image"}
                title={ContentData.h5Image.split("/").pop()?.split(".")[0] || "image"}
              />
            </div>
          </div>
        )}
        {/* Section 4 */}
        {/* Section 5 */}
        {ContentData.h6 && (
          <div className="mt-14 grid grid-cols-1  gap-10 px-6 md:mt-28 md:grid-cols-2 md:px-24">
            <div className="">
              <Image
                height={10000}
                width={10000}
                src={`${ContentData?.h6Image}`}
                className=" h-[17rem] w-full rounded-lg object-cover  shadow-lg"
                alt={ContentData?.h6Image.split("/").pop()?.split(".")[0] || "image"}
                title={`${ContentData.h6Image.split("/").pop()?.split(".")[0] || "image"} ,${ContentData.name}`}
              />
            </div>
            <div className="flex flex-col justify-center    ">
              <h2 className="text-first text-3xl font-bold">
                {ContentData.h6}
              </h2>
              <div
                className="mt-4  text-justify"
                dangerouslySetInnerHTML={{ __html: ContentData.p6 }}
              ></div>
            </div>
          </div>
        )}
        {/* Section 5 */}
        {/* Section 3 */}
        {ContentData.h4 && (
          <div className="mt-14 flex flex-col items-center justify-center bg-main p-6 px-6 text-center text-white md:mt-28 md:px-24">
            <h2 className="text-2xl font-bold ">{ContentData?.h4}</h2>
            <p
              className="mt-4 text-lg"
              dangerouslySetInnerHTML={{ __html: ContentData?.p4 }}
            ></p>
          </div>
        )}
        {/* Section 3 */}
        {/* Pricing Section */}
        {ContentData?.pricingSection ? (
          <div className="mt-14 px-6 md:mt-28 md:px-24">
            <h2 className=" text-3xl font-bold">
              {ContentData?.pricingSection.title}
            </h2>
            <div
              className="mt-4 text-lg"
              dangerouslySetInnerHTML={{
                __html: ContentData?.pricingSection.description,
              }}
            ></div>
            <div className="mt-10 grid grid-cols-1  gap-6 md:grid-cols-2">
              {ContentData?.pricingSection.list.map((item: any, index: any) => {
                return (
                  <div
                    className=" 1 rounded-md border p-4 shadow-md"
                    key={index}
                  >
                    <div className="1 text-center text-lg font-bold ">
                      {item.title}
                    </div>
                    <div
                      className="my-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {/* Pricing Section */}
        {/* Season Section */}
        {ContentData?.seasonSection ? (
          <div className="mt-14 px-6 md:mt-28 md:px-24">
            <h2 className=" text-center text-3xl font-bold">
              {ContentData.seasonSection.ttile}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              {ContentData?.seasonSection.list.map((item: any, index: any) => {
                return (
                  <div
                    className="rounded-xl border px-10 py-4 shadow-lg"
                    key={index}
                  >
                    <div className="text-2xl font-semibold">{item.title}</div>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {/* Season Section */}
        <ProcessWidget />
        <PortaPottyCalculator/>
        {/* Cta */}
        <div className="mt-14 md:mt-28">
          <HourCta />
        </div>
        {/* Cta */}
        {/* History */}
        {ContentData.h7 && (
          <div className="mt-14 grid w-full grid-cols-1 gap-10  px-6 md:mt-28 md:grid-cols-2 md:px-24">
            <div className=" flex w-full flex-col justify-around gap-3   ">
              <div className="">
                <h2 className="text-3xl font-bold">{ContentData?.h7}</h2>
                <p
                  className="mt-10  text-justify"
                  dangerouslySetInnerHTML={{ __html: ContentData?.p7 }}
                ></p>
              </div>
            </div>
            <div className="">
              <Image
                src={`${ContentData?.h7Image}`}
                className="h-[100%] w-full rounded-lg border object-cover shadow-lg "
                alt={ContentData?.h7Image.split("/").pop()?.split(".")[0] || "image"}
                width={1000}
                height={500}
              />
            </div>
          </div>
        )}
        {/* History */}
        {/* Top Sight */}
        {ContentData?.topSight ? (
          <div className="mt-14 md:mt-28">
            <h2 className={`  text-center text-3xl font-bold`}>Top Sights</h2>
            <div className="mt-10 grid gap-6 px-6 text-center sm:grid-cols-2 md:px-40 lg:grid-cols-3">
              {ContentData?.topSight.map((item: any) => (
                <div className="rounded-xl p-4 shadow-lg" key={item}>
                  <div className="">
                    {/* <Image
                      src={`/${item?.image}`}
                      alt={item?.name}
                      width={900}
                      height={950}
                      className="h-60 w-full object-cover "
                    /> */}
                  </div>
                  <div className="">
                    <div className={` text-center font-bold`}>
                      <br />
                      {item?.name}
                    </div>
                    <div className=""> {item?.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {/* Top Sight */}
        {/* Area we Serve */}
        {slugs.length > 0 && (
          <div id="area-we-serve" className="pt-14 md:pt-28">
            <h2 className={`  text-center text-3xl font-bold text-main`}>
              Cities We Serve{" "}
            </h2>
            <AreaWeServe slugs={slugs} />
          </div>
        )}
        {/* Neighborhood */}
      {ContentData?.neighbourhoods ? (
        <div className="">
          <div className="block border px-4 md:hidden">
            <ZipAndNeighAccordian
              ques={`Neighborhoods we serve in  ${ContentData?.name}`}
              ans={ContentData?.neighbourhoods?.split("|")}
              slug={ContentData?.slug}
            />
          </div>
          <div className="mt-28 hidden items-center justify-start md:mx-40 md:block ">
            <div className="text-center text-3xl font-bold">
              <p className="text-main">
                Neighborhoods we serve in {ContentData?.name}
              </p>
            </div>
            <div className="mx-10 mt-4 flex h-fit w-auto flex-wrap justify-center gap-4">
              {ContentData?.neighbourhoods?.split("|").map((item: any) => (
                <div className="" key={item}>
                  <a
                    target="_blank"
                    href={`https://www.google.com/maps/search/?api=1&query=${item}, ${ContentData?.slug},`}
                  >
                    <p className="border bg-minor px-2 py-1 text-white duration-100 ease-in-out hover:text-main">
                      {item}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {/* Neighborhood */}
      {/* Zip */}
      {ContentData?.zipCodes ? (
        <div className="">
          <div className="block border px-4 md:hidden">
            <ZipAndNeighAccordian
              ques={` Zip Codes we serve in ${ContentData?.name}`}
              ans={ContentData?.zipCodes?.split("|")}
              slug={ContentData?.slug}
            />
          </div>
          <div className="mt-28 hidden items-center justify-start md:mx-40 md:block  ">
            <div className="text-center text-3xl font-bold">
              <p className="text-main">
                Zip&nbsp;Codes we serve in {ContentData?.name}
              </p>
            </div>
            <div className="mx-10 mt-4 flex h-fit w-auto flex-wrap justify-center gap-4">
              {ContentData?.zipCodes?.split("|").map((item: any) => (
                <div className="" key={item}>
                  <Link
                    target="_blank"
                    href={`https://www.google.com/maps/search/?api=1&query=${item}, ${ContentData?.slug},`}
                  >
                    <p className="border bg-minor px-2 py-1 text-white duration-100 ease-in-out hover:text-main">
                      {item}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {/* Zip */}
        {/* FAQ */}
        {ContentData?.faq ? <Faq value={State} /> : null}
        {/* FAQ */}
        {/* CounterCta */}
        {/* CounterCta */}
        {/* Reviews */}
        <ReviewWidget value={State} />
        {/* Reviews */}
        {/* -----------------------------------------Map End---------------------------- */}
        <div className="block w-full">
          <div className="mt-14 overflow-hidden rounded-xl border md:mt-20">
            <iframe
              title="Google Map"
              height="350"
              width={"100%"}
              src={`https://maps.google.com/maps?q=${ContentData?.slug}+USA&t=&z=7&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* -----------------------------------------Map End---------------------------- */}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const cityData: any = content;
  const subDomain = Object.keys(cityData);
  return subDomain.map((locations: any) => ({
    State: locations.toString(),
  }));
}
