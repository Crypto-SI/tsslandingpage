"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Image {
  id: string
  alt: string
  caption: string
  category: string
  src?: string
}

interface ImageGalleryProps {
  images: Image[]
  title?: string
}

export default function ImageGallery({ images, title = "Program Gallery" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (imageId: string, index: number) => {
    setSelectedImage(imageId)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(images[newIndex].id)
  }

  const goToNext = () => {
    const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0
    setCurrentImageIndex(newIndex)
    setSelectedImage(images[newIndex].id)
  }

  const getImageSrc = (image: Image) => {
    if (image.src) return image.src
    return image.id.includes("-") ? `/${image.id}.png` : `/images/${image.id}.png`
  }

  const currentImage = images.find(img => img.id === selectedImage) || images[0]

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        
        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={image.id} className="overflow-hidden group cursor-pointer">
              <div 
                className="aspect-square bg-muted relative overflow-hidden"
                onClick={() => openLightbox(image.id, index)}
              >
                {/* Actual image */}
                <img
                  src={getImageSrc(image)}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const placeholder = img.parentElement!.querySelector('.image-placeholder') as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 hidden">
                  <div className="text-center">
                    <ZoomIn className="h-12 w-12 text-primary/60 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Program Image</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>

                {/* Category badge */}
                <div className="absolute top-2 left-2 bg-primary/90 text-white text-xs px-2 py-1 rounded">
                  {image.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{image.alt}</h3>
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src={getImageSrc(currentImage)}
                  alt={currentImage.alt}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const placeholder = img.parentElement!.querySelector('.lightbox-placeholder') as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="lightbox-placeholder w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 hidden">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ZoomIn className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-white text-lg font-medium">{currentImage.alt}</p>
                    <p className="text-white/70 text-sm mt-2">{currentImage.caption}</p>
                  </div>
                </div>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
