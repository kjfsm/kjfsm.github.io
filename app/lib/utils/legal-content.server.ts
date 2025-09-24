import fs from "node:fs";
import path from "node:path";

// Markdown ファイルのメタデータを抽出する関数
function extractMetadata(content: string) {
  const lines = content.split("\n");
  let version = 1;
  let lastUpdated = "";

  // メタデータの抽出（**バージョン**: 1 の形式）
  for (const line of lines) {
    if (line.includes("**バージョン**:")) {
      const versionMatch = line.match(/\*\*バージョン\*\*:\s*(\d+)/);
      if (versionMatch) {
        version = parseInt(versionMatch[1], 10);
      }
    }
    if (line.includes("**最終更新日**:")) {
      const dateMatch = line.match(/\*\*最終更新日\*\*:\s*(.+)/);
      if (dateMatch) {
        lastUpdated = dateMatch[1].trim();
      }
    }
  }

  return { version, lastUpdated };
}

// 利用規約を読み込む関数
export function loadTermsContent() {
  try {
    const filePath = path.join(process.cwd(), "docs", "legal", "terms.md");
    const content = fs.readFileSync(filePath, "utf-8");
    const { version, lastUpdated } = extractMetadata(content);

    return {
      content,
      version,
      lastUpdated,
    };
  } catch (error) {
    console.error("Error loading terms content:", error);
    return {
      content: "# 利用規約\n\n利用規約を読み込めませんでした。",
      version: 1,
      lastUpdated: "",
    };
  }
}

// プライバシーポリシーを読み込む関数
export function loadPrivacyContent() {
  try {
    const filePath = path.join(process.cwd(), "docs", "legal", "privacy.md");
    const content = fs.readFileSync(filePath, "utf-8");
    const { version, lastUpdated } = extractMetadata(content);

    return {
      content,
      version,
      lastUpdated,
    };
  } catch (error) {
    console.error("Error loading privacy content:", error);
    return {
      content:
        "# プライバシーポリシー\n\nプライバシーポリシーを読み込めませんでした。",
      version: 1,
      lastUpdated: "",
    };
  }
}
