import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";
import { getClientNotion } from "@/api/issues";
import { Issue, IssueStatus } from "@/models/issue";

const handler = nc(options);
handler.use(database);
handler.post(async (req, res) => {
  const { database_id, notion } = getClientNotion();
  if (!database_id || !notion)
    return res.status(500).json({ error: "Notion not configured" });
  const { title, description, email } = req.body.issue as Issue;
  const status: IssueStatus = "Not Started";
  if (!title || !description || !email)
    return res.status(404).json({ error: "Missing required fields" });
  try {
    const response = await notion.pages.create({
      parent: {
        database_id,
      },
      icon: {
        emoji: "🔥",
      },
      properties: {
        Title: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Status: {
          select: {
            name: status,
          },
        },
      },
      children: [
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: "Descripción",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: description.content,
                  link: {
                    url: description.link,
                  },
                },
              },
            ],
          },
        },
      ],
    });
    return res.status(200).json({
      response,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default handler;
