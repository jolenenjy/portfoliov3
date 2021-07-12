import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import express from "../public/images/express.png";
import express2 from "../public/images/express2.png";
import express3 from "../public/images/express3.png";
import express4 from "../public/images/express4.png";
import express5 from "../public/images/express5.png";
import express6 from "../public/images/express6.png";

export default function Express() {
  return (
    <Layout>
      <div className=" flex justify-center items-center flex-col mt-8 px-4 sm:px-6">
        <div className="max-w-screen-sm">
          <Link href="/">
            <div>
              <p className="font-medium mt-16 text-sm opacity-40 cursor-pointer hover:opacity-100 transition duration-200 ease-in-out">
                ← Back to home
              </p>
            </div>
          </Link>
          <p className="mt-8 text-2xl font-medium">GrabExpress</p>
          <p className="font-mono text-md mt-1 opacity-50 tracking-tight">
            Sr. Product Designer | Jul 2020 to Today
          </p>
          <p className="opacity-80 mt-3">
            Express is Grab's parcel delivery service that operates in South
            East Asia. Upon joining the design team last year, I had the
            opportunity to work on the app and web redesigns as well as various
            other features.
          </p>
        </div>
        <div className="max-w-screen-md">
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-6">
            <Image
              src={express}
              alt="Express project hero image"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="max-w-screen-sm">
          <div className="mt-8 mb-10 flex justify-center opacity-50">—</div>
          <p className="mt-6 text-xl font-medium">App & Web redesign</p>
          <p className="mt-6 font-medium">Background</p>
          <p className="mt-1 opacity-80">
            The parcel delivery products at Grab had been left stagnant with
            minimal improvements for awhile. There was a need to refresh the
            experience and address some fundamental problems with the booking
            flow.
          </p>
          <p className="mt-8 font-medium">My role</p>
          <p className="mt-1 opacity-80">
            I joined the newly reformed design team and took over work on our
            app redesign. Following that, I worked on the web portal redesign
            from scratch.
          </p>
          <p className="mt-8 font-medium">Impact</p>
          <p className="mt-1 opacity-80">
            The new experience led to improvements in the book-through rate on
            both app (+3pp) and web (+29pp), additonally, rentention remained
            unaffected.
          </p>
        </div>
        <div className="max-w-screen-md">
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-10">
            <Image
              src={express2}
              alt="Current express designs"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="max-w-screen-sm mt-2">
          <p className="mt-6 font-medium">Problem</p>
          <p className="mt-1 opacity-80">
            To better understand the current issues with the express product,
            interviews were conducted with social sellers in Indonesia and
            Vietnam. Social sellers - people who sell items on instagram or
            whatsapp are the primary users for our parcel delivery service. We
            found that:
          </p>
          <div className="prose mt-4">
            <ol className="opacity-80">
              <li>It took too many inputs to see the estimated price</li>
              <li>
                It is confusing to see the different delivery options combined
                in one long list
              </li>
              <li>
                It is unclear what to do on the home screen between adding
                drop-off details or choosing a service
              </li>
            </ol>
          </div>
          <p className="mt-8 font-medium">Solutioning</p>
          <p className="mt-1 opacity-80">
            Hence, we revisited the booking flow, the user goals on each screen
            and also took the opportunity to update the overall style to
            something that would be more welcoming. Some of the key changes made
            included:
          </p>
          <div className="prose mt-8">
            <ul>
              <li className="opacity-80">
                <mark>Faster price estimates.</mark> Changed the booking flow to
                allow users to quickly get an estimated price with just the
                location input before asking other details.
              </li>
              <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-4 mb-12">
                <Image
                  src={express4}
                  alt="Current express designs"
                  objectFit="cover"
                />
              </div>
              <li className="opacity-80">
                <mark>Clearer service options.</mark> Instead of having users
                select between multiple types of options in one long list, we
                separated them into clearer distinct selectors.
              </li>
              <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-4 mb-12">
                <Image
                  src={express5}
                  alt="Current express designs"
                  objectFit="cover"
                />
              </div>
              <li className="opacity-80">
                <mark>New Home Screen.</mark> Added sections to cater to
                different tasks users might want to do here while still keeping
                the drop-off input up top
              </li>
              <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-4 mb-12">
                <Image
                  src={express3}
                  alt="Current express designs"
                  objectFit="cover"
                />
              </div>
            </ul>
          </div>
          <p className="mt-8 font-medium">Web portal</p>
          <p className="mt-1 opacity-80">
            Following the app improvements, we carried the same learnings over
            to our web portal along with a similar style update. On top of that,
            we added in additional features that would be helpful for users
            managing a large number of orders like placing multiple bookings via
            excel as well as an overall search across ongoing and completed
            bookings.
          </p>
        </div>
        <div className="max-w-screen-md">
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-10">
            <Image
              src={express6}
              alt="Current express designs"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="max-w-screen-sm mt-4">
          <p className="mt-6 font-medium">Reflection</p>
          <p className="mt-1 opacity-80">
            Working on the redesigns were tricky as every stakeholder involved
            had some imagination of their own with regards to how it should be.
            I learned that the key was really aligning everyone to the main user
            needs and having frequent check-ins.
          </p>
          <p className="mt-4 opacity-80">
            Additionally, doing design jam sessions helped with gathering a lot
            more perspectives and kept the wider design team included with whats
            going on.
          </p>

          <div className="my-12 flex justify-center opacity-50">—</div>
          <div className="flex ">
            <Link href="/food">
              <p className="mr-24 ont-medium   opacity-60 cursor-pointer hover:opacity-100 transition duration-200 ease-in-out">
                View food work →
              </p>
            </Link>
            <Link href="/gov">
              <p className="ont-medium  opacity-60 cursor-pointer hover:opacity-100 transition duration-200 ease-in-out">
                View government work →
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
