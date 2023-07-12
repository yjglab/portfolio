export interface Content {
  name: string;
  href: string;
  imageAlt: string;
  date: number;
  month: string;
  tags: string[];
  subtitle: string;
  thumb: string;
  details: {
    version?: string;
    banner: string;
    link: any;
    skills?: Array<{
      name: string;
      content: string;
    }>;
    description: string;
    implements?: Array<{
      name: string;
      content: string[];
    }>;
    images: Array<{ name: string; src: string }>;
  };
}
