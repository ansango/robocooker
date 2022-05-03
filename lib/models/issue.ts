export type Issue = {
  id?: string;
  title: string;
  description: {
    content: Content;
    link: Url;
  };
  status?: IssueStatus;
  email: Email;
};

export type IssueStatus = "Not Started" | "In Review" | "In Progress" | "Done";
