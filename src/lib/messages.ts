import { promises as fs } from "fs";
import path from "path";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const messagesPath = path.join(dataDir, "messages.json");

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(messagesPath);
  } catch {
    await fs.writeFile(messagesPath, "[]", "utf8");
  }
}

export async function saveMessage(
  input: Omit<ContactMessage, "id" | "createdAt">,
): Promise<ContactMessage> {
  await ensureStore();

  const raw = await fs.readFile(messagesPath, "utf8");
  const messages = JSON.parse(raw || "[]") as ContactMessage[];

  const entry: ContactMessage = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...input,
  };

  messages.unshift(entry);
  await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2), "utf8");

  return entry;
}
