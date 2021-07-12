import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import gov from "../public/images/gov.png";
import gov2 from "../public/images/gov2.png";

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
          <p className="mt-8 text-2xl font-medium">
            Governemnt digital services
          </p>
          <p className="font-mono text-md mt-1 opacity-50 tracking-tight">
            UX Designer | Jan 2017 to Mar 2019
          </p>
          <p className="opacity-80 mt-3">
            At the government technology agency, I was part of a team that
            operated in mini pods to help other agencies improve their digital
            services or build new products. Additionally, we serve as the
            central design team providing guidelines for all Singapore
            government websites.
          </p>
          <p className="mt-4 opacity-80">
            Here, I streamlined the process for buying and selling public
            housing, build a new product to facilitate communications between
            parents and teachers and initiated a project to update the masthead
            and footer guidelines.
          </p>

          <div className="mt-8 mb-10 flex justify-center opacity-50">—</div>
          <p className="mt-6 text-xl font-medium">Masthead Update</p>
          <p className="mt-6 font-medium">Background</p>
          <p className="mt-1 opacity-80">
            The Web Interface Standards is a guideline that all Singapore
            Government websites have to follow. Unfortunately, since it was
            written before there were any designers in the government, it had a
            number of strange clauses. The most limiting one of them all were
            the ones dictating what goes into the masthead.
          </p>
          <p className="mt-8 font-medium">My role</p>
          <p className="mt-1 opacity-80">
            I initiated the project as part of a week-long hackathon and
            eventually saw it through to presentations with leadership and into
            the final guidlines.
          </p>
        </div>
        <div className="max-w-screen-md">
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-6">
            <Image src={gov} alt="Food project hero image" objectFit="cover" />
          </div>
        </div>
        <div className="max-w-screen-sm">
          <p className="mt-6 font-medium">Problem</p>
          <p className="mt-1 opacity-80">The purpose of a mast head was:</p>
          <div className="prose mt-4">
            <ol className="opacity-90">
              <li>
                To allow a site to be instantly recognisable as an official
                government website
              </li>
              <li>
                To provide a consistent experience across government websites
              </li>
            </ol>
          </div>
          <p className="mt-4 opacity-80">
            The current masthead guidelines attempt to achieve that by cramping
            as many items as possible into the top right-hand corner of the
            header. However, from our usability testing sessions, we noticed
            that users started to tune out the various items in the masthead due
            to the visual overload.
          </p>
          <p className="mt-8 font-medium">Solutioning</p>
          <p className="mt-1 opacity-80">
            We explored a few options and eventually landed on a sleeker
            masthead component that focuses on verifying the website as a
            Singapore government website. At the same time, we move all other
            information like FAQ and contact to the footer.
          </p>
          <div className="flex bg-gray-50 w-full overflow-hidden rounded-xl mt-10">
            <Image src={gov2} alt="Current express designs" objectFit="cover" />
          </div>

          <div className="my-12 flex justify-center opacity-50">—</div>
          <div className="flex ">
            <Link href="/express">
              <p className="mr-24 ont-medium   opacity-60 cursor-pointer hover:opacity-100 transition duration-200 ease-in-out">
                View express work →
              </p>
            </Link>
            <Link href="/food">
              <p className="ont-medium  opacity-60 cursor-pointer hover:opacity-100 transition duration-200 ease-in-out">
                View food work →
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
