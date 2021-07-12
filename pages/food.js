import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import food from "../public/images/food.png";
import food2 from "../public/images/food2.png";
import food3 from "../public/images/food3.png";
import food4 from "../public/images/food4.png";
import food5 from "../public/images/food5.png";

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
          <p className="mt-8 text-2xl font-medium">GrabFood</p>
          <p className="font-mono text-md mt-1 opacity-50 tracking-tight">
            Product Designer - Sr. Product Designer | Mar 2019 to Jul 2020
          </p>
          <p className="opacity-80 mt-3">
            As part of the food design team, I worked on various delivery
            features on our consumer app and was the first designer on the new
            business team where I got to explore new verticals like self pick-up
            and order at table.
          </p>
        </div>
        <div className="max-w-screen-md">
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-6">
            <Image src={food} alt="Food project hero image" objectFit="cover" />
          </div>
        </div>
        <div className="max-w-screen-sm">
          <div className="mt-8 mb-10 flex justify-center opacity-50">—</div>
          <p className="mt-6 text-xl font-medium">Self pick-up</p>
          <p className="mt-6 font-medium">Background</p>
          <p className="mt-1 opacity-80">
            Self pick-up is a new product developed as an extension of
            Grab&apos;s food delivery service. The idea is to allow customers to
            pick up their order from the restaurant themselves.
          </p>
          <p className="mt-8 font-medium">My role</p>
          <p className="mt-1 opacity-80">
            As the sole designer, I conducted fundamental research, usability
            testing, and designed the product experience for both customers and
            merchants.
          </p>
          <p className="mt-8 font-medium">Impact</p>
          <p className="mt-1 opacity-80">
            The Self Pick-up product has been growing steadily since the launch
            last year and is now available in 6 countries across South East Asia
            with over 610k+ restaurants onboard and 2.4mil orders in Q1 2021.
          </p>
        </div>
        <div className="max-w-screen-md">
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-10">
            <Image
              src={food2}
              alt="Current express designs"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="max-w-screen-sm mt-2">
          <p className="mt-6 font-medium">Fundamental research</p>
          <p className="mt-1 opacity-80">
            Unlike for delivery, we had more to learn about today’s takeout
            experience. Hence, we did interviews and concept testing sessions in
            Indonesia, Vietnam, and Singapore. We found that:
          </p>
          <div className="prose mt-4">
            <ol className="opacity-80">
              <li>
                People prefer not having to queue and wait for their food.
              </li>
              <li>
                People are less adventurous for takeout and like to find a few
                good spots near their home & office.
              </li>
              <li>
                Singaporeans tend to walk or take a bus for takeout while
                Indonesians & Vietnamese would take their bikes.
              </li>
            </ol>
          </div>
          <p className="mt-8 font-medium">Solutioning</p>
          <p className="mt-1 opacity-80">
            As this was a new product, we spent some time mapping out the
            service blueprint and verifying with the different country operation
            teams what they would have to prepare. At the same time, we worked
            out the necessary design details.
          </p>
          <div className="prose mt-8">
            <ul>
              <li className="opacity-80">
                <mark>For consumers.</mark> We made sure to show how far the
                restaurant is to help with decision making. At the same time,
                after an order is placed, we provided a way for users to get
                directions via their preferred map app.
              </li>
              <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-4 mb-12">
                <Image
                  src={food3}
                  alt="Current express designs"
                  objectFit="cover"
                />
              </div>
              <li className="opacity-80">
                <mark>For merchants.</mark> We made sure they were kept aware
                that a customer will be arriving to collect the order rather
                than a driver. We also made sure there was a distinction between
                delivery and pick-up orders in their earnings report.
              </li>
              <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-4 mb-12">
                <Image
                  src={food4}
                  alt="Current express designs"
                  objectFit="cover"
                />
              </div>
            </ul>
          </div>
          <p className="mt-8 font-medium">Post-pilot fix</p>
          <p className="mt-1 opacity-80">
            We noticed a high number of cancellations post-pilot and realised it
            was coming from customers who thought they made a delivery order.
            Even though we had considered this, we mistakenly thought the cues
            we had were sufficient.
          </p>
          <p className="mt-4 opacity-80">
            We implemented stronger visual cues in a week. With the fix,
            cancellation rates went down from 24% to 5% in a few weeks and is
            nowadays holding steady at 0.5%
          </p>
        </div>
        <div className="max-w-screen-md">
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-10">
            <Image
              src={food5}
              alt="Current express designs"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="max-w-screen-sm mt-4">
          <p className="mt-6 font-medium">Reflection</p>
          <p className="mt-1 opacity-80">
            It has been a fascinating journey seeing a product grow from a blank
            google slide to serving thousands of orders daily. In particular, I
            cherish the experience of working closely with the team to roll out
            fixes when things were not going as planned.
          </p>
          <p className="mt-4 opacity-80">
            Since the launch, we have also made further enhancements like
            showing a map view of nearby restaurants. I&apos;m excited to see
            how the product will continue to grow as part of Grab&apos;s super
            app.
          </p>

          <div className="my-12 flex justify-center opacity-50">—</div>
          <div className="flex ">
            <Link href="/express">
              <p className="mr-24 ont-medium   opacity-60 cursor-pointer hover:opacity-100 transition duration-200 ease-in-out">
                View express work →
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
