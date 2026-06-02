# Hashnode Local Writing Kit

This kit helps you write in VS Code and publish to Hashnode through GitHub.

## Recommended setup

Create a dedicated GitHub repository for Hashnode posts, for example:

- `hashnode-posts`

Hashnode's GitHub publishing currently expects:

- Markdown files only
- Post files in the repository root
- Front matter at the top of each file

That means your actual publishing repo should look like this:

```text
hashnode-posts/
  my-first-post.md
  building-ai-systems.md
  writing-better-prompts.md
```

## Suggested workflow

1. Connect your repo in Hashnode Dashboard -> GitHub.
2. Copy `post-template.md` into the root of your publishing repo.
3. Rename it to your new article filename, for example `my-first-post.md`.
4. Fill in the front matter.
5. Write in Markdown from VS Code.
6. Commit and push to GitHub.
7. Check Hashnode for the created draft or published post.

## Important notes

- Use `saveAsDraft: true` while testing.
- The `domain` field should be your final blog domain, for example `blog.jieren-deng.com`.
- `slug` must stay unique.
- If you reuse the same slug, Hashnode updates the existing post.
- Cover images should use a public URL. Hashnode officially recommends uploading cover images to its CDN first.

## Images

For inline images inside the article body, use public URLs.

Practical options:

1. Hashnode uploader URLs
2. A separate GitHub assets repository with jsDelivr URLs

Example jsDelivr image URL:

```text
https://cdn.jsdelivr.net/gh/your-github-username/hashnode-post-assets@main/images/diagram.png
```

## Publishing modes

Draft:

```yaml
saveAsDraft: true
```

Publish immediately:

```yaml
saveAsDraft: false
```

## Good starter habit

Keep one post per commit while you are testing the integration. It makes debugging much easier.
