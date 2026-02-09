# 部署到 GitHub Pages（说明）

项目已配置自动部署：

- 已在 `vite.config.ts` 中设置 `base` 为 `/win-nexus-ai-corporate-banking/`。
- 已添加 GitHub Actions 工作流：`.github/workflows/gh-pages.yml`，会在推送到 `main` 分支时构建并将 `dist` 发布到 `gh-pages` 分支。

本地推送示例命令：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# SSH 地址示例：
git remote add origin git@github.com:<your-username>/win-nexus-ai-corporate-banking.git
# 或 HTTPS：
# git remote add origin https://github.com/<your-username>/win-nexus-ai-corporate-banking.git
git push -u origin main
```

推送后，Actions 会自动构建并部署，站点地址通常为：

```
https://<your-username>.github.io/win-nexus-ai-corporate-banking/
```

如果你希望我代为执行 `git` 初始化与首次推送（需要在此环境配置好的 SSH key 或允许使用你的凭证），请告诉我你要使用 SSH 还是 HTTPS；或者直接把仓库 URL 发给我，我会继续执行。 
