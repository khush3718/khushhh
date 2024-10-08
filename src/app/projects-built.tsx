import clsx from 'clsx';
import NextLink from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import { Link } from './_components/link';
import { projects } from './data/projects';

export const ThingsIveBuilt = () => {
  return (
    <section className="mt-6 mb-2 px-2">
      <div className="mt-5 grid grid-cols-1 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

// Define an explicit type for the ProjectCard props
type ProjectCardProps = {
  title: string;
  description: string;
  gitLink: string;
  prodLink?: string; // Optional if some projects might not have it
  techStack: string[];
};

const ProjectCard = ({
  title,
  description,
  gitLink,
  prodLink,
  techStack,
}: ProjectCardProps) => {
  return (
    <div
      className={clsx(
        'relative rounded-lg border-[1px] border-none bg-white/5 p-4',
        'transition-all duration-500 ease-out',
        'shadow-lg',
        'hover:bg-white/10'
      )}
    >
      <div className="flex flex-col space-y-3">
        {prodLink ? (
          <Link
            href={prodLink}
            external
            // rightIcon={<FiExternalLink size={22} />}
            size="lg"
            className="w-fit font-semibold"
          >
            <span>{title}</span>
          </Link>
        ) : (
          <p className="group flex w-fit items-center gap-2 text-lg font-semibold font-mono">
            <span>{title}</span>
          </p>
        )}
        <p className="text-base">{description}</p>

        <div className="flex flex-wrap items-center">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <NextLink
        href={gitLink}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          'group',
          'absolute top-4 right-4 rounded-lg px-2 py-1'
        )}
      >
        <AiFillGithub
          size={28}
          color="#ffe4e64d"
          className={clsx(
            'fill-neutral-500 dark:fill-rose-100/30',
            'transition-all duration-300 ease-out',
            'group-hover:scale-[1.2] group-hover:fill-black dark:group-hover:fill-white'
          )}
        />
      </NextLink>
    </div>
  );
};
