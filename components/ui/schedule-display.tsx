"use client"

import { Calendar, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ScheduleItem {
  day: string
  time: string
  location: string
  duration: string
  notes?: string
}

interface ScheduleDisplayProps {
  schedule: ScheduleItem[]
  title?: string
  subtitle?: string
}

export default function ScheduleDisplay({ 
  schedule, 
  title = "Program Schedule", 
  subtitle = "Weekly sessions available" 
}: ScheduleDisplayProps) {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  
  // Group schedule by day
  const scheduleByDay: Record<string, ScheduleItem[]> = {}
  daysOfWeek.forEach(day => {
    scheduleByDay[day] = schedule.filter(item => item.day === day)
  })

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Schedule by day */}
          <div className="space-y-4">
            {daysOfWeek.map(day => {
              const daySchedule = scheduleByDay[day]
              if (daySchedule.length === 0) return null

              return (
                <Card key={day}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      {day}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {daySchedule.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{item.time}</span>
                            <span className="text-sm text-muted-foreground">({item.duration})</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </div>
                          {item.notes && (
                            <p className="text-sm text-muted-foreground italic">
                              {item.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Program Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Session Duration</h4>
                  <p className="text-sm text-muted-foreground">
                    All sessions are carefully timed to maintain engagement and maximize learning. 
                    Sessions include warm-up, skill development, and match play.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">What to Bring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Suitable sports clothing</li>
                    <li>• Football boots or trainers</li>
                    <li>• Water bottle</li>
                    <li>• Shin pads (recommended)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Weather Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Sessions will proceed in light rain. In case of severe weather, 
                    participants will be notified at least 2 hours before the session.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">Central Sports Centre</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    123 Sports Avenue, Sportsville<br />
                    Ample parking available on-site<br />
                    Changing facilities and toilets provided
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}