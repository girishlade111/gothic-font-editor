"use client"

import { useState } from "react"
import { Cinzel, UnifrakturMaguntia } from "next/font/google"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Load gothic fonts
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
})

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unifraktur",
})

export default function FontEditor() {
  const [name, setName] = useState("Enter your name")
  const [fontSize, setFontSize] = useState(64)
  const [selectedFont, setSelectedFont] = useState("unifraktur")

  const fonts = {
    unifraktur: unifraktur.variable,
    cinzel: cinzel.variable,
  }

  const fontNames = {
    unifraktur: "var(--font-unifraktur)",
    cinzel: "var(--font-cinzel)",
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Gothic Font Editor</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-8">
            <Label htmlFor="name-input" className="text-sm text-gray-300 mb-2 block">
              Enter Your Name
            </Label>
            <Input
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <Label className="text-sm text-gray-300">Font Style</Label>
              <Select value={selectedFont} onValueChange={setSelectedFont}>
                <SelectTrigger className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="unifraktur">UniFraktur Maguntia</SelectItem>
                  <SelectItem value="cinzel">Cinzel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-gray-300">Font Size: {fontSize}px</Label>
              <Slider
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
                min={20}
                max={120}
                step={1}
                className="py-4"
              />
            </div>
          </div>
        </div>

        <div
          className={`${fonts[selectedFont]} mt-8 bg-gray-800 p-8 rounded-lg shadow-lg flex items-center justify-center min-h-[200px]`}
        >
          <div
            style={{
              fontFamily: fontNames[selectedFont],
              fontSize: `${fontSize}px`,
            }}
            className="text-center break-words max-w-full"
          >
            {name || "Enter your name"}
          </div>
        </div>
      </div>
    </main>
  )
}
