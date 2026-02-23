import fs from 'node:fs'
import path from 'node:path'

const filePath = path.join(process.cwd(), 'public', 'M_Omair_Sohail_Resume.pdf')

const textLines = [
  { size: 20, y: 760, text: 'M. Omair Sohail - Frontend Developer' },
  { size: 12, y: 738, text: 'Karachi, Pakistan | 03243280234 | omairmedia2020@gmail.com' },
  { size: 12, y: 720, text: 'GitHub: https://github.com/OmairMedia' },
  { size: 14, y: 690, text: 'Professional Summary' },
  { size: 11, y: 672, text: 'Frontend Developer with 3+ years of experience in Vue.js and Nuxt.js.' },
  { size: 11, y: 656, text: 'Focused on scalable architecture, responsive UI, and performance optimization.' },
  { size: 14, y: 628, text: 'Experience' },
  { size: 11, y: 610, text: 'Stabilityy - Frontend Developer (Nov 2023 - Present)' },
  { size: 11, y: 594, text: 'Built Vue.js/Nuxt.js apps, reusable components, and backend integrations.' },
  { size: 11, y: 576, text: 'Yaseo - Frontend Developer (Nov 2022 - Nov 2023)' },
  { size: 11, y: 560, text: 'Designed Vue.js + Tailwind interfaces, improved performance and SEO.' },
  { size: 11, y: 542, text: '4Slash - Frontend Developer (Nov 2020 - Nov 2022)' },
  { size: 11, y: 526, text: 'Developed responsive apps and maintained frontend architecture.' },
  { size: 14, y: 498, text: 'Core Skills' },
  { size: 11, y: 480, text: 'Vue.js, Nuxt.js, JavaScript, TypeScript, Tailwind CSS, Node.js, REST APIs' },
  { size: 14, y: 452, text: 'Projects' },
  { size: 11, y: 434, text: 'MCHD - https://mchd-frontend-new.vercel.app' },
  { size: 11, y: 418, text: 'Life Portal - https://deployment-life-portal-frontend-app.vercel.app' },
  { size: 11, y: 402, text: 'Meribilty - Logistics platform (Vue.js, Node.js)' },
  { size: 11, y: 386, text: 'Austintrim Studio - CRM platform (Vue.js, Node.js)' },
]

const escapePdfText = (text) => text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

const stream = ['BT']
for (const line of textLines) {
  stream.push(`/F1 ${line.size} Tf 50 ${line.y} Td (${escapePdfText(line.text)}) Tj`)
}
stream.push('ET')
const streamContent = `${stream.join('\n')}\n`

const objects = []
objects[1] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'
objects[2] = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>'
objects[3] = '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 1 0 R >> >> /Contents 4 0 R >>'
objects[4] = `<< /Length ${Buffer.byteLength(streamContent, 'utf8')} >>\nstream\n${streamContent}endstream`
objects[5] = '<< /Type /Catalog /Pages 2 0 R >>'

let output = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'
const offsets = [0]

for (let i = 1; i <= 5; i++) {
  offsets[i] = Buffer.byteLength(output, 'binary')
  output += `${i} 0 obj\n${objects[i]}\nendobj\n`
}

const xrefPosition = Buffer.byteLength(output, 'binary')
output += 'xref\n0 6\n0000000000 65535 f \n'
for (let i = 1; i <= 5; i++) {
  output += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}

output += `trailer\n<< /Size 6 /Root 5 0 R >>\nstartxref\n${xrefPosition}\n%%EOF\n`

fs.writeFileSync(filePath, Buffer.from(output, 'binary'))
console.log(`Created ${filePath}`)
