from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from datetime import datetime
from app.database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, index=True, nullable=False)
    category = Column(String(100), nullable=False, index=True) # Cinematic, Short-form, Motion Graphics
    short_description = Column(String(500), nullable=False)
    full_description = Column(Text, nullable=False)
    creative_approach = Column(Text, nullable=True)
    editing_techniques = Column(Text, nullable=True)
    thumbnail = Column(String(500), nullable=False)
    video_url = Column(String(500), nullable=False)
    preview_video_url = Column(String(500), nullable=True) # Muted hover preview URL
    software = Column(String(500), nullable=False) # Comma separated list e.g. "Adobe Premiere Pro, Adobe After Effects"
    year = Column(String(10), nullable=False, default="2026")
    role = Column(String(255), nullable=False, default="Video Editor & Motion Designer")
    project_outcome = Column(Text, nullable=True)
    featured = Column(Boolean, default=False)
    display_order = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
