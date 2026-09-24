from fastapi import APIRouter
from app.routes.projects import router as projects_router
from app.routes.contact import router as contact_router
from app.routes.profile import router as profile_router

api_router = APIRouter()
api_router.include_router(projects_router, tags=["Projects"])
api_router.include_router(contact_router, tags=["Contact"])
api_router.include_router(profile_router, tags=["Profile"])
