from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ProjectBase(BaseModel):
    title: str
    slug: str
    category: str
    short_description: str
    full_description: str
    creative_approach: Optional[str] = None
    editing_techniques: Optional[str] = None
    thumbnail: str
    video_url: str
    preview_video_url: Optional[str] = None
    software: str
    year: str = "2026"
    role: str = "Video Editor & Motion Designer"
    project_outcome: Optional[str] = None
    featured: bool = False
    display_order: int = 0

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    software_list: List[str] = []

    class Config:
        from_attributes = True
