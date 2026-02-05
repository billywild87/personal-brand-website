export const routes = {
  home: "/",
  about: "/about",
  experiences: "/experiences",
  experience: (id: string) => `/experiences/${id}` as const,
  contact: "/contact",
} as const;

export type Route = (typeof routes)[keyof typeof routes];
