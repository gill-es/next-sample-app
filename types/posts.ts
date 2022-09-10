import { ObjectWithId } from "./generics";

export type PostData = ObjectWithId & {
  date: string;
  title: string;
  contentHtml: string;
};
