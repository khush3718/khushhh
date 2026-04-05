import { Link } from "next-view-transitions";
import { TechIUse } from "./tech-i-use";
import { ThingsIveBuilt } from "./projects-built";
// import { getBlogPosts } from "~~/blog";

function UpRightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

type ExperienceItem = {
  name: string;
  link: string;
  position: string;
  description: string | string[];
  logo?: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <section className="text-left w-full">
      <h3 className="mb-1 text-xl font-medium">{title}</h3>
      <hr className="mb-6 w-28 border-t-2 border-neutral-700 dark:border-white rounded-full" />

      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 sm:gap-5">
            {item.logo && (
              <div className="flex-shrink-0 mt-1">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <a
                href={item.link}
                target="_blank"
                className="font-medium text-[1.05rem] underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
              >
                {item.name}
              </a>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 font-mono1">{item.position}</p>
              <div className="mt-2 text-neutral-700 dark:text-neutral-300 text-[0.95rem]">
                {Array.isArray(item.description) ? (
                  <div className="flex flex-col space-y-1.5">
                    {item.description.map((desc, descIndex) => (
                      <p key={descIndex}>{desc}</p>
                    ))}
                  </div>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DownloadResumeLink() {
  return (
    <a
      className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
      rel="noopener noreferrer"
      target="_blank"
      href="https://drive.google.com/file/d/1_lJvWk8SEbAzqFcu39Xz1xkAf6oAID6d/view?usp=sharing"
    >
      <p className="mr-1 h-7">resume</p>
      <UpRightArrowIcon />
    </a>
  );
}


export default function HomePage() {
  const workItems = [
    {
      name: "creole studios",
      link: "https://www.creolestudios.com/",
      position: "software engineer ( feb 2026 - present )",
      description: [
        "building and steering AI agents",
      ],
      logo: "/creole.png",
    },
    {
      name: "adrta tech",
      link: "https://adrtatech.com/",
      position: "jr. software engineer ( june 2024 - feb 2026 )",
      description: [
        "built AI microservices that were integrated into company's various products",
      ],
      logo: "/adrta.png",
    },

  ] satisfies ExperienceItem[];

  const educationItems = [
    {
      name: "pandit deendayal energy university",
      link: "https://www.pdpu.ac.in/",
      position: "b.tech in comp. science ( 2020-2024 )",
      description: "grade: 9.11 cgpa",
      logo: "/pdpu.jpg",
    },
  ] satisfies ExperienceItem[];

  const projectItems = [
    {
      name: "serene chat",
      link: "",
      position: "",
      description:
        "llm based chatapp to assist users with their mental health issues",
    },
    {
      name: "real time emotion detection",
      link: "https://github.com/khush3718/Real_Time_emotion_detection",
      position: "",
      description:
        "a system that utilizes machine learning to analyze facial expressions, providing instantaneous emotion recognition and insights for improved user interaction.",
    },
    {
      name: "all projects →",
      link: "https://github.com/khush3718",
      position: "",
      description: "",
    },
  ] satisfies ExperienceItem[];

  // const posts = getBlogPosts()
  //   .sort(
  //     (a, b) =>
  //       new Date(b.metadata.date).getTime() -
  //       new Date(a.metadata.date).getTime(),
  //   )
  //   .slice(0, 4);

  return (
    <main className="text-left">
      <h1 className="mb-4 text-2xl font-medium tracking-tighter font-mono1">
        khush shah
      </h1>

      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 font-mono1">
          <LocationIcon />
          <p>ahmedabad, india</p>
        </div>

        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 font-mono1">
          <WorkIcon />
          <p className="inline-flex">software engineer @ creole studios</p>
        </div>
      </div>

      <p className="prose prose-neutral dark:prose-invert">
        i&apos;m a 23 y/o developer who enjoys exploring various fields through machine learning and web development. when i&apos;m not coding, i&apos;m probably listening to music,
        reading mangas and novels or watching football.
      </p>

      <div className="my-8 sm:my-10">
        <ExperienceSection title="work" items={workItems} />
      </div>

      <h3 className="mt-2 text-xl font-medium">projects</h3>
      <hr className="mt-3 w-28 border-t-2 border-neutral-700 dark:border-white rounded-full" />
      <div className="flex flex-col gap-2">
        <ThingsIveBuilt />
      </div>

      <h3 className="mb-2 mt-6 text-xl font-medium">technologies i use</h3>
      <hr className="mt-3 w-36 border-t-2 border-neutral-700 dark:border-white rounded-full" />
      <div className="flex flex-col gap-2">
        <TechIUse />
      </div>

      <div className="my-8 sm:my-10">
        <ExperienceSection title="education" items={educationItems} />
      </div>

      <h3 className="mt-8 text-xl font-medium">connect with me</h3>
      <hr className="my-3 w-36 border-t-2 border-neutral-700 dark:border-white rounded-full" />
      <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 font-sans1"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:khushh3718@gmail.com"
          >
            <p className="mr-1 h-7">email</p>
            <UpRightArrowIcon />
          </a>
        </li>
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/Khushh02708383"
          >
            <p className="mr-1 h-7">x.com</p>
            <UpRightArrowIcon />
          </a>
        </li> */}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/khush3718"
          >
            <p className="mr-1 h-7">github</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/khush-shah-9957351bb/"
          >
            <p className="mr-1 h-7">linkedin</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <DownloadResumeLink />
        </li>
      </ul>
    </main>
  );
}

