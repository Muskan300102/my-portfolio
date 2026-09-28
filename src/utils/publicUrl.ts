/** Prefix a public-folder path so it works on GitHub Pages and on the local site. */
export function publicUrl(path: string) {
  const normalized = path.replace(/^\//, "")
  return `${import.meta.env.BASE_URL}${normalized}`
}
