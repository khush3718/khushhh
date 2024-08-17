// import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
// import { api, HydrateClient } from "~/trpc/server";

// export default async function Home() {
//   const hello = await api.post.hello({ text: "from tRPC" });

//   void api.post.getLatest.prefetch();

//   return (
//     <HydrateClient>
//       <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
//         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
//           <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
//             Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
//           </h1>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
//               href="https://create.t3.gg/en/usage/first-steps"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">First Steps →</h3>
//               <div className="text-lg">
//                 Just the basics - Everything you need to know to set up your
//                 database and authentication.
//               </div>
//             </Link>
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
//               href="https://create.t3.gg/en/introduction"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">Documentation →</h3>
//               <div className="text-lg">
//                 Learn more about Create T3 App, the libraries it uses, and how
//                 to deploy it.
//               </div>
//             </Link>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <p className="text-2xl text-white">
//               {hello ? hello.greeting : "Loading tRPC query..."}
//             </p>
//           </div>

//           <LatestPost />
//         </div>
//       </main>
//     </HydrateClient>
//   );
// }



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
  description: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <section className="text-left">
      <h3 className="mb-6 text-xl font-medium">{title}</h3>
      {items.map((item, index) => (
        <div key={index}>
          <a
            href={item.link}
            target="_blank"
            className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          >
            {item.name}
          </a>
          <p className="mt-2">{item.position}</p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {item.description}
          </p>
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </section>
  );
}




export default function HomePage() {
  const workItems = [
    {
      name: "adrta tech",
      link: "https://adrtatech.com/",
      position: "jr. software engineer (june 2024 - present)",
      description:
        "working on building AI tools that can be integrated into company's various products",
    },
    {
      name: "let's enkindle",
      link: "https://letsenkindle.com/",
      position: "app dev intern (june 2023 - aug 2023)",
      description:
        "contributed in the deveopment of react native apps and improved the UI",
    },
  ] satisfies ExperienceItem[];

  const educationItems = [
    {
      name: "pandit deendayal energy university",
      link: "https://www.pdpu.ac.in/",
      position: "b.tech in cse (2020-2024)",
      description:"grade: 9.11 cgpa"
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
        Khush Shah
      </h1>

      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 font-mono1">
          <LocationIcon />
          <p>Ahmedabad, India</p>
        </div>

        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 font-mono1">
          <WorkIcon />
          <p className="inline-flex">Junior Software Engineer @Adrta Tech</p>
        </div>
      </div>

      <p className="prose prose-neutral dark:prose-invert">
        i&apos;m a 22 y/o developer who enjoys exploring various fields through machine learning, web development and i live on
        the terminal. if i&apos;m not coding, i&apos;m probably listening to music,
        watching movies or playing football.
      </p>

      <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ExperienceSection title="work" items={workItems} />
        
        <ExperienceSection title="education" items={educationItems} />
      </div>

      <h3 className="mt-2 text-xl font-mono">Projects</h3>
      <div className="flex flex-col gap-2">
        <ThingsIveBuilt/>
      </div>

      <h3 className="mb-2 mt-6 text-xl font-mono">technologies i use</h3>
      <div className="flex flex-col gap-2">
        <TechIUse/>
      </div>
      

      <h3 className="mt-8 text-xl font-mono">connect with me</h3>
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
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/Khushh02708383"
          >
            <p className="mr-1 h-7">x.com</p>
            <UpRightArrowIcon />
          </a>
        </li>
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
      </ul>
    </main>
  );
}

