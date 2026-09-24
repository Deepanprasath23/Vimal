from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.database import get_db
from app.models.project import Project
from app.schemas.project import ProjectResponse

router = APIRouter()

@router.get("/projects", response_model=List[ProjectResponse])
def get_projects(
    category: Optional[str] = Query(None, description="Filter by category (Cinematic, Short-form, Motion Graphics)"),
    db: Session = Depends(get_db)
):
    query = db.query(Project)
    if category and category != "All":
        query = query.filter(Project.category.ilike(f"%{category}%"))
    
    projects = query.order_by(Project.display_order.asc(), Project.id.desc()).all()
    
    # Process software comma separated strings into lists
    result = []
    for p in projects:
        p_dict = ProjectResponse.model_validate(p)
        p_dict.software_list = [s.strip() for s in p.software.split(",") if s.strip()]
        result.append(p_dict)
        
    return result

@router.get("/projects/{project_id}", response_model=ProjectResponse)
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    p_dict = ProjectResponse.model_validate(project)
    p_dict.software_list = [s.strip() for s in project.software.split(",") if s.strip()]
    return p_dict

@router.get("/categories", response_model=List[str])
def get_categories():
    return ["All", "Cinematic", "Short-form", "Motion Graphics"]
