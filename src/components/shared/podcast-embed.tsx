interface PodcastEmbedProps {
  spotifyUrl: string;
  title: string;
}

export function PodcastEmbed({ spotifyUrl, title }: PodcastEmbedProps) {
  // Convert Spotify URL to embed URL
  const embedUrl = spotifyUrl.replace("open.spotify.com", "open.spotify.com/embed");

  return (
    <div className="rounded-xl overflow-hidden">
      <iframe
        src={embedUrl}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`${title} on Spotify`}
        className="border-0"
      />
    </div>
  );
}
