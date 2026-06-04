// app/components/searchEngine.ts
import { portfolioRegistry } from '../data/portfolioData'

export const executeRegistrySearch = (searchQuery: string) => {
  const query = searchQuery.trim().toLowerCase()
  if (!query) return []

  return portfolioRegistry.filter((section) => {
    // 1. Setup text streams correctly
    const title = (section.title || '').toLowerCase()
    const subtitle = (section.subtitle || '').toLowerCase()

    const matchTitle = title.includes(query)
    const matchSubtitle = subtitle.includes(query)

    // 2. Scan normal description sentences
    const contentBlocks = Array.isArray(section.contentBlocks)
      ? section.contentBlocks
      : []
    const matchContent = contentBlocks.some((block) =>
      String(block || '')
        .toLowerCase()
        .includes(query),
    )

    // 3. Scan the hidden technology list inside meta safely
    const stackItems = Array.isArray(section.meta?.stack)
      ? section.meta.stack
      : []
    const matchStack = stackItems.some((tech) =>
      String(tech || '')
        .toLowerCase()
        .includes(query),
    )

    // 4. Return the complete verified true/false matrix matching parameters
    return matchTitle || matchSubtitle || matchContent || matchStack
  })
}
