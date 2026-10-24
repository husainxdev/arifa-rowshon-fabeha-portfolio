"""Generate Arifa's one-page CV from confirmed portfolio details.

Update this file and src/data/portfolioData.js together when details change.
Run: python3 scripts/generate-cv.py
"""

from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


OUT = Path(__file__).resolve().parents[1] / "public" / "cv.pdf"
INK = HexColor("#211d16")
MUTED = HexColor("#615b52")
AMBER = HexColor("#9a5c0a")
PAGE_W, PAGE_H = A4
LEFT = 48
RIGHT = PAGE_W - 48

c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle("Arifa Rowshon Fabeha | CV")
c.setAuthor("Arifa Rowshon Fabeha")


def text(x, y, value, size=10, bold=False, color=INK):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawString(x, y, value)


def right_text(y, value, size=9, color=MUTED):
    c.setFillColor(color)
    c.setFont("Helvetica", size)
    c.drawRightString(RIGHT, y, value)


def section(y, title):
    text(LEFT, y, title.upper(), 9, True, AMBER)
    c.setStrokeColor(HexColor("#d4c7ad"))
    c.setLineWidth(0.6)
    c.line(LEFT, y - 7, RIGHT, y - 7)
    return y - 27


def lines(y, items, step=15):
    for line in items:
        text(LEFT, y, line, 10)
        y -= step
    return y


c.setFillColor(HexColor("#f6f2e9"))
c.rect(0, PAGE_H - 142, PAGE_W, 142, fill=1, stroke=0)
c.setFillColor(AMBER)
c.rect(0, PAGE_H - 142, 6, 142, fill=1, stroke=0)
text(LEFT, PAGE_H - 66, "Arifa Rowshon Fabeha", 24, True)
text(LEFT, PAGE_H - 88, "Computer Science and Engineering Student", 11, False, MUTED)
text(LEFT, PAGE_H - 108, "Sylhet, Bangladesh  |  +880 1776-733152  |  arifarowshon04@gmail.com", 9, False, MUTED)
text(LEFT, PAGE_H - 124, "github.com/Fabeha1025  |  linkedin.com/in/arifa-rowshon-fabeha-87a9153a4", 8, False, MUTED)
c.linkURL("https://wa.me/8801776733152", (145, PAGE_H - 113, 260, PAGE_H - 101), relative=0)
c.linkURL("mailto:arifarowshon04@gmail.com", (275, PAGE_H - 113, 470, PAGE_H - 101), relative=0)
c.linkURL("https://github.com/Fabeha1025", (LEFT, PAGE_H - 129, 167, PAGE_H - 117), relative=0)
c.linkURL("https://www.linkedin.com/in/arifa-rowshon-fabeha-87a9153a4/", (190, PAGE_H - 129, 510, PAGE_H - 117), relative=0)

y = PAGE_H - 169
y = section(y, "Profile")
y = lines(y, [
    "CSE student learning through programming, problem-solving, and projects.",
    "Interested in useful software and healthcare access. Seeking internship or junior opportunities.",
]) - 12

y = section(y, "Education")
text(LEFT, y, "B.Sc. in Computer Science and Engineering", 11, True)
right_text(y, "Started 2025")
y -= 17
text(LEFT, y, "Metropolitan University, Sylhet", 10)
y -= 16
text(LEFT, y, "CGPA 3.83 / 4.00  |  42 credits completed", 10, False, MUTED)
y -= 20
text(LEFT, y, "Higher Secondary Certificate (HSC)  |  2023", 10)
y -= 17
text(LEFT, y, "Secondary School Certificate (SSC)  |  2021", 10)
y -= 30

y = section(y, "Technical skills")
y = lines(y, ["C  |  C++  |  Data Structures  |  Algorithms"]) - 13

y = section(y, "Projects")
text(LEFT, y, "Shastho Sahayak", 11, True)
right_text(y, "Built project", color=AMBER)
y -= 16
y = lines(y, [
    "Healthcare-focused project intended to improve access to healthcare support.",
    "Guiding idea: Healthcare should not depend on the phone you own.",
]) - 9
text(LEFT, y, "CloudSphere", 11, True)
right_text(y, "In progress", color=AMBER)
y -= 16
y = lines(y, [
    "Engineering Economics academic project about data centres and cloud services in Bangladesh.",
    "Explores demand, supply, operating costs, and economic and policy factors.",
]) - 13

y = section(y, "Problem solving and activities")
y = lines(y, [
    "321+ programming and algorithmic problems solved (self-reported total).",
    "Girls' Guide volunteering and project leadership involvement.",
])

c.setStrokeColor(HexColor("#d4c7ad"))
c.line(LEFT, 49, RIGHT, 49)
text(LEFT, 35, "Portfolio: husainxdev.github.io/arifa-rowshon-fabeha-portfolio/", 8, False, MUTED)
c.linkURL("https://husainxdev.github.io/arifa-rowshon-fabeha-portfolio/", (LEFT, 29, RIGHT, 45), relative=0)
c.save()
print(OUT)
