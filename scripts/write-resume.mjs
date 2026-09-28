import { writeFileSync } from "node:fs"

const stream = `BT
/F1 22 Tf
72 700 Td
(Muskan Raghuvanshi) Tj
/F1 12 Tf
0 -32 Td
(Software Engineer, Indore, India) Tj
0 -40 Td
(This is a placeholder resume.) Tj
0 -20 Td
(Replace public/resume.pdf with your latest resume PDF.) Tj
0 -32 Td
(LinkedIn and GitHub links are on the portfolio site.) Tj
ET`

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Count 1 /Kids [3 0 R] >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
]

let pdf = "%PDF-1.4\n"
const offsets = [0]
objects.forEach((obj, index) => {
  offsets.push(Buffer.byteLength(pdf))
  pdf += `${index + 1} 0 obj\n${obj}\nendobj\n`
})
const xref = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += "0000000000 65535 f \n"
for (let index = 1; index < offsets.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`
writeFileSync(new URL("../public/resume.pdf", import.meta.url), pdf)
console.log("wrote resume.pdf")
