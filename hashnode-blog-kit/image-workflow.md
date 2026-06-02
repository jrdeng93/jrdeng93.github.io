# Image Workflow

If the web editor feels clunky for images, use one of these two workflows.

## Option 1: Hashnode uploader for covers and article images

Best when:

- You want the simplest publishing path
- You do not want to manage a separate assets repo

Steps:

1. Upload the image to Hashnode's uploader from the web UI.
2. Copy the generated CDN URL.
3. Paste the URL into:
   - `cover:` for cover images
   - Markdown image syntax for inline images

Example:

```md
![Architecture](https://cdn.hashnode.com/res/hashnode/image/upload/v1234567890/example.png)
```

## Option 2: Separate GitHub assets repo

Best when:

- You want all writing assets versioned
- You want to manage diagrams locally from VS Code

Recommended repo shape:

```text
hashnode-post-assets/
  images/
    post-1-cover.png
    post-1-diagram-1.png
    post-2-chart.png
```

Reference them with jsDelivr:

```text
https://cdn.jsdelivr.net/gh/your-github-username/hashnode-post-assets@main/images/post-1-diagram-1.png
```

## Recommendation

Start simple:

- Cover image: Hashnode uploader
- Inline diagrams and screenshots: GitHub assets repo + jsDelivr

That gives you a clean writing flow in VS Code without fighting the editor.
