document.addEventListener('DOMContentLoaded', async () => {
  const feed = document.getElementById('latest-writing-feed');
  if (!feed) return;

  const host = feed.dataset.hashnodeHost;
  const limit = Number.parseInt(feed.dataset.postLimit || '3', 10);
  if (!host) return;

  const query = `
    query Publication($host: String!, $first: Int!) {
      publication(host: $host) {
        title
        posts(first: $first) {
          edges {
            node {
              id
              title
              brief
              slug
              url
              publishedAt
              readTimeInMinutes
              tags {
                name
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { host, first: limit },
      }),
    });

    if (!response.ok) {
      throw new Error(`Hashnode request failed: ${response.status}`);
    }

    const payload = await response.json();
    const posts = payload?.data?.publication?.posts?.edges?.map((edge) => edge.node) || [];

    if (posts.length === 0) {
      feed.innerHTML = `
        <article class="latest-writing-card latest-writing-card-empty">
          <p class="latest-writing-eyebrow">No posts yet</p>
          <h3>Your Hashnode blog is connected.</h3>
          <p>Publish your first post and it will appear here automatically.</p>
        </article>
      `;
      return;
    }

    feed.innerHTML = posts
      .map((post) => {
        const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const tags = (post.tags || []).slice(0, 3).map((tag) => `<span>${tag.name}</span>`).join('');

        return `
          <article class="latest-writing-card">
            <p class="latest-writing-eyebrow">${date} · ${post.readTimeInMinutes || 1} min read</p>
            <h3><a href="${post.url}" target="_blank" rel="noopener noreferrer">${post.title}</a></h3>
            <p>${post.brief || ''}</p>
            <div class="latest-writing-tags">${tags}</div>
          </article>
        `;
      })
      .join('');
  } catch (error) {
    feed.innerHTML = `
      <article class="latest-writing-card latest-writing-card-empty">
        <p class="latest-writing-eyebrow">Connection issue</p>
        <h3>Couldn't load posts from Hashnode.</h3>
        <p>Please verify the publication host in <code>_config.yml</code>.</p>
      </article>
    `;
    console.error(error);
  }
});
