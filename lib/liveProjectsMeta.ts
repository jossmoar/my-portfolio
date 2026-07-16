// Non-translatable metadata for the live projects catalog — parallel-indexed
// with translations.liveProjects.items. Add a new entry here (and a matching
// items[] entry in both locales of lib/translations.ts) for each new project.
export interface LiveProjectMeta {
  url: string;
  repoUrl: string;
  tags: string[];
  icon: string;
  color: string;
  iconBg: string;
}

export const LIVE_PROJECTS_META: LiveProjectMeta[] = [
  {
    url: "https://job-application-tracker-sable-one.vercel.app",
    repoUrl: "https://github.com/jossmoar/job-application-tracker",
    tags: ["React", "TypeScript", "Tailwind CSS", "i18n", "PostHog"],
    icon: "💼",
    color: "bg-indigo-50 border-indigo-100",
    iconBg: "bg-indigo-100",
  },
];
