import os
from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "Vimal Raj K - Portfolio API"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    
    # Database configuration (Defaults to SQLite, can be overridden with PostgreSQL)
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./portfolio.db")
    
    # CORS Configuration
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://localhost:4173",
        "*"
    ]
    
    # Profile configuration
    PORTFOLIO_OWNER_NAME: str = "Vimal Raj K"
    PORTFOLIO_OWNER_TITLE: str = "Video Editor | Motion Graphics Designer"
    PORTFOLIO_OWNER_EMAIL: str = "vraj92063@gmail.com"
    PORTFOLIO_OWNER_LOCATION: str = "Coimbatore, India"
    
    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
