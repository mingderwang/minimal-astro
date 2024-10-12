'use client'

import { Button } from "@/components/ui/button"

export function EmojiButton() {
  return (
    <Button 
      className="bg-red-500 hover:bg-red-600 text-white text-xl py-3 px-6"
      size="lg"
    >
      Awesome! <span className="ml-2" role="img" aria-label="rocket">🚀</span>
    </Button>
  )
}