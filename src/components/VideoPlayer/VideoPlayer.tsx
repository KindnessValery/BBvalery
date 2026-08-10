interface VideoPlayerProps {
  type: "youtube" | "vimeo" | "mp4" | "cloudflare" | "bunny";
  url: string;
  poster?: string;
}

export function VideoPlayer({ type, url, poster }: VideoPlayerProps) {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {type === "bunny" ? (
        <iframe
          src={url}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Видео"
        />
      ) : type === "cloudflare" ? (
        <iframe
          src={`https://customer-${url}.cloudflarestream.com/${url}/iframe`}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Видео"
        />
      ) : type === "mp4" ? (
        <video
          controls
          poster={poster}
          className="absolute inset-0 w-full h-full object-contain"
          src={url}
        />
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src={type === "youtube" ? url.replace("watch?v=", "embed/") : url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Видео"
        />
      )}
    </div>
  );
}
