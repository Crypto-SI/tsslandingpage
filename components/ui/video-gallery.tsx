"use client"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
}

interface VideoGalleryProps {
  videos: Video[]
  title?: string
}

export default function VideoGallery({ videos, title = "Program Videos" }: VideoGalleryProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [muted, setMuted] = useState(false)

  const handlePlay = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null)
    } else {
      setPlayingVideo(videoId)
    }
  }

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden group">
              <div className="relative aspect-video bg-muted">
                {/* Placeholder for video thumbnail */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      {playingVideo === video.id ? (
                        <Pause className="h-8 w-8 text-primary" />
                      ) : (
                        <Play className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Video Preview</p>
                  </div>
                </div>
                
                {/* Video controls overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => handlePlay(video.id)}
                    className="gap-2"
                  >
                    {playingVideo === video.id ? (
                      <>
                        <Pause className="h-4 w-4" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" /> Play
                      </>
                    )}
                  </Button>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}