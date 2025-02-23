'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidProps{
  chart: string
}
export const Mermaid = ({ chart }: MermaidProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'default', // You can keep this or set to 'default'
      themeVariables: {
        background: '#ffffff', // Set background to white
        primaryColor: '#734F4F', // Box color
        edgeLabelBackground: '#ffffff', // Edge label background
        secondaryColor: '#e74c3c', // Secondary color (optional)
        tertiaryColor: '#2ecc71', // Tertiary color (optional)
        textColor: '#ffffff', // Text color inside boxes
        lineColor: '#734F4F', // Line color
      },
      securityLevel: 'loose'
    })
    
    try {
      mermaid.init(undefined, containerRef.current)
    } catch (err) {
      console.error('Mermaid render error:', err)
    }
  }, [chart])

  return (
    <div 
      ref={containerRef} 
      className="mermaid"
      suppressHydrationWarning
    >
      {chart}
    </div>
  )
}