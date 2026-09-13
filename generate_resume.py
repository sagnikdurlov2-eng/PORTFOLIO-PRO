from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

out_path = Path(__file__).resolve().parent / 'public' / 'resume.pdf'
out_path.parent.mkdir(parents=True, exist_ok=True)

c = canvas.Canvas(str(out_path), pagesize=A4)
w, h = A4

c.setFillColor(HexColor('#0b1020'))
c.rect(0, 0, w, h, fill=1, stroke=0)

c.setFillColor(HexColor('#141b2d'))
c.roundRect(42, 42, w - 84, h - 84, 18, fill=1, stroke=0)

c.setFillColor(HexColor('#ffffff'))
c.setFont('Helvetica-Bold', 24)
c.drawString(70, h - 110, 'SWASTIKA MITRA')

c.setFillColor(HexColor('#b9c6dc'))
c.setFont('Helvetica', 11)
c.drawString(70, h - 140, 'Front-End Developer | UI/UX Designer | Web Developer')

c.setFillColor(HexColor('#8fe3ff'))
c.setFont('Helvetica-Bold', 10)
c.drawString(70, h - 180, 'CONTACT')

c.setFillColor(HexColor('#dfe9ff'))
c.setFont('Helvetica', 9)
contact = [
    'Email: swastikamitra55@gmail.com',
    'Phone: +91 00000 00000',
    'Location: Kolkata, India',
    'GitHub: github.com/swastikamitra05-coder',
    'LinkedIn: linkedin.com/in/swastika-mitra-768b2836a',
]
for idx, line in enumerate(contact):
    c.drawString(70, h - 195 - idx * 16, line)

c.setFillColor(HexColor('#8fe3ff'))
c.setFont('Helvetica-Bold', 11)
c.drawString(390, h - 110, 'SUMMARY')

c.setFillColor(HexColor('#eaf2ff'))
c.setFont('Helvetica', 9.2)
summary = [
    'Creative and detail-oriented front-end developer with a strong focus on user-friendly',
    'web experiences, responsive design, and modern UI development. Skilled in HTML, CSS,',
    'JavaScript, React, and intuitive interface design. Passionate about building clean,',
    'engaging digital products that combine visual quality with smooth functionality.',
]
for idx, line in enumerate(summary):
    c.drawString(390, h - 135 - idx * 16, line)

c.setFillColor(HexColor('#8fe3ff'))
c.setFont('Helvetica-Bold', 11)
c.drawString(70, h - 310, 'SKILLS')

c.setFillColor(HexColor('#eaf2ff'))
c.setFont('Helvetica', 9.2)
skills = [
    'HTML5, CSS3, JavaScript, React, Python, Django, Git/GitHub, Responsive Design',
    'UI/UX Design, Figma, Database Basics, Problem Solving, User Experience, Front-End Development',
]
for idx, line in enumerate(skills):
    c.drawString(70, h - 328 - idx * 18, line)

c.setFillColor(HexColor('#8fe3ff'))
c.setFont('Helvetica-Bold', 11)
c.drawString(70, h - 400, 'EXPERIENCE')

c.setFillColor(HexColor('#eaf2ff'))
c.setFont('Helvetica-Bold', 9.5)
c.drawString(70, h - 420, 'Freelance Front-End Developer / Web Designer')
c.setFont('Helvetica', 9.2)
experience = [
    '• Designed and developed responsive portfolio and web UI projects with modern aesthetics.',
    '• Built interactive interfaces using React, CSS, and JavaScript for a smooth user experience.',
    '• Improved layout consistency, typography, CTA design, and mobile responsiveness.',
    '• Worked on personal branding and portfolio presentation for digital visibility.',
]
for idx, line in enumerate(experience):
    c.drawString(90, h - 440 - idx * 18, line)

c.setFillColor(HexColor('#8fe3ff'))
c.setFont('Helvetica-Bold', 11)
c.drawString(390, h - 310, 'PROJECTS')

c.setFillColor(HexColor('#eaf2ff'))
c.setFont('Helvetica-Bold', 9.5)
c.drawString(390, h - 330, 'Swastika Portfolio Website')
c.setFont('Helvetica', 9.2)
projects = [
    '• Developed a responsive portfolio website using React and Vite.',
    '• Included sections such as Home, About, Projects, Certifications, and Contact.',
    '• Focused on clean design, mobile responsiveness, and attractive interface styling.',
]
for idx, line in enumerate(projects):
    c.drawString(410, h - 350 - idx * 18, line)

c.setFillColor(HexColor('#8fe3ff'))
c.setFont('Helvetica-Bold', 11)
c.drawString(70, h - 580, 'EDUCATION')

c.setFillColor(HexColor('#eaf2ff'))
c.setFont('Helvetica-Bold', 9.5)
c.drawString(70, h - 600, 'Bachelor of Technology in Information Technology')
c.setFont('Helvetica', 9.2)
c.drawString(70, h - 618, 'Narula Institute of Technology')
c.drawString(70, h - 636, 'Expected Graduation: 2028')

c.setFillColor(HexColor('#8fe3ff'))
c.setFont('Helvetica-Bold', 11)
c.drawString(390, h - 460, 'ACHIEVEMENTS')

c.setFillColor(HexColor('#eaf2ff'))
c.setFont('Helvetica', 9.2)
achievements = [
    '• Winner, Youth Parliament at Amity University',
    '• Participated in hackathons including Hack-o-NIT, SIH, and IEEE Hackathon',
    '• Involved in technical and cultural student communities',
]
for idx, line in enumerate(achievements):
    c.drawString(410, h - 480 - idx * 18, line)

c.setFillColor(HexColor('#7ee7b4'))
c.setFont('Helvetica-Bold', 9)
c.drawString(70, 72, 'Open to internships, collaborations, and front-end opportunities')

c.save()
print(f'Created {out_path}')
