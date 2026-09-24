from fastapi import APIRouter
from app.config import settings

router = APIRouter()

@router.get("/profile")
def get_profile():
    return {
        "name": settings.PORTFOLIO_OWNER_NAME,
        "title": settings.PORTFOLIO_OWNER_TITLE,
        "location": settings.PORTFOLIO_OWNER_LOCATION,
        "email": settings.PORTFOLIO_OWNER_EMAIL,
        "experience": "Fresher",
        "tagline": "Cinematic stories. Powerful visuals. Thoughtful motion.",
        "bio": (
            "I’m Vimal Raj K, a passionate video editor and motion graphics designer from Coimbatore. "
            "I enjoy turning raw footage into engaging visual stories through cinematic editing, creative transitions and motion design."
        ),
        "primary_skills": [
            "Cinematic Video Editing",
            "Short-form / Reels Editing",
            "Motion Graphics"
        ],
        "software": [
            "Adobe After Effects",
            "Adobe Premiere Pro",
            "Adobe Photoshop",
            "Adobe Illustrator"
        ],
        "social_links": {
            "youtube": "https://youtube.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com",
            "behance": "https://behance.net"
        }
    }
