export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  image: string;
  description: string;
  tags: string[];
  link: string | null;
}