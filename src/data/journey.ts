import { education } from "./education"
import { experience } from "./experience"
import type { TimelineEntry } from "../types"

export function getJourney(): TimelineEntry[] {
  return [...education, ...experience].sort((a, b) => a.order - b.order)
}
