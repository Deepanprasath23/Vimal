from sqlalchemy.orm import Session
from app.models.project import Project

SAMPLE_PROJECTS = [
    {
        "title": "Neon Horizons — Urban Night Story",
        "slug": "neon-horizons-urban-night-story",
        "category": "Cinematic",
        "short_description": "A dark, moody cinematic film capturing nighttime city architecture with custom color grading and atmospheric sound design.",
        "full_description": "Neon Horizons is a cinematic visual exploration of urban nighttime aesthetics. Crafted using S-Log footage, this project showcases precise color matching, custom LUT building in Lumetri Color, and deep atmospheric audio layering to evoke a blade-runner-inspired nighttime mood.",
        "creative_approach": "Emphasized high contrast, deep shadows, and rich teal & orange color splits. The editing rhythm follows the low ambient synth hums, pacing transitions with light leaks and lens flares.",
        "editing_techniques": "L-cuts & J-cuts for seamless audio pacing, keyframe motion tracking, speed ramping, custom teal/orange LUT color grade, noise reduction, and custom optical flares.",
        "thumbnail": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        "preview_video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "software": "Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop",
        "year": "2026",
        "role": "Cinematic Editor & Colorist",
        "project_outcome": "Demonstrated advanced color grading techniques and dynamic audio-visual sync for cinematic short film presentations.",
        "featured": True,
        "display_order": 1
    },
    {
        "title": "Velocity — Kinetic Fitness Reel",
        "slug": "velocity-kinetic-fitness-reel",
        "category": "Short-form",
        "short_description": "Ultra high-energy 9:16 vertical Reel engineered for maximum audience retention using snappy jump cuts and sound FX sync.",
        "full_description": "Designed specifically for Instagram Reels & YouTube Shorts, Velocity combines rapid-fire editing, kinetic text callouts, sound design impacts, and seamless whip zooms to keep viewers hooked from frame 1.",
        "creative_approach": "Hook-driven opening within 0.8 seconds. Uses aggressive speed ramps paired with bass drop impacts and dynamic text animations.",
        "editing_techniques": "Frame-accurate beat matching, dynamic masking transitions, custom motion blur, SFX layering (swooshes, impacts, risers), kinetic typography pop-ins.",
        "thumbnail": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "preview_video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "software": "Adobe Premiere Pro, Adobe After Effects",
        "year": "2026",
        "role": "Short-Form Editor & Motion Graphics",
        "project_outcome": "Engineered for 85%+ retention rate with punchy pacing and high-energy sound design.",
        "featured": True,
        "display_order": 2
    },
    {
        "title": "Cyberpunk HUD & Kinetic Title Sequence",
        "slug": "cyberpunk-hud-kinetic-title-sequence",
        "category": "Motion Graphics",
        "short_description": "Futuristic UI animation and title card sequence created entirely with 2D shape layers, expressions, and glitch FX in After Effects.",
        "full_description": "A complex motion graphics showcase building a futuristic holographic HUD interface and kinetic title layout. Built with clean shape layers, trim paths, null object hierarchy, and glitch displacement maps.",
        "creative_approach": "Constructed a layered sci-fi UI aesthetic using glowing neon accents, technical grid lines, and crisp typography transitions.",
        "editing_techniques": "After Effects expressions (wiggle, loopIn, index), shape layer trim paths, custom chromatic aberration glitch effects, camera camera shake script, vector element animation.",
        "thumbnail": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "preview_video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "software": "Adobe After Effects, Adobe Illustrator",
        "year": "2026",
        "role": "Motion Graphics Designer",
        "project_outcome": "Showcased keyframe-perfect typography control and vector animation capabilities in After Effects.",
        "featured": True,
        "display_order": 3
    },
    {
        "title": "Silent Echoes — Mountain Travel Odyssey",
        "slug": "silent-echoes-mountain-travel-odyssey",
        "category": "Cinematic",
        "short_description": "Atmospheric drone and ground footage assembled into a meditative visual poem with ambient soundscape design.",
        "full_description": "A visual poem celebrating raw nature and vast landscapes. Focused on smooth camera movement, seamless sky replacements, slow-motion pacing, and rich soundscapes combining wind, footsteps, and orchestral swells.",
        "creative_approach": "Minimal cuts with long, breathing shots. Focused on smooth speed ramps and natural lighting enhancements in Post.",
        "editing_techniques": "Warp stabilizer post-processing, speed ramp easing, atmospheric fog overlays, acoustic sound layering, vintage film grain overlay.",
        "thumbnail": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnTheLoose.mp4",
        "preview_video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnTheLoose.mp4",
        "software": "Adobe Premiere Pro, Adobe Photoshop",
        "year": "2025",
        "role": "Video Editor & Sound Designer",
        "project_outcome": "Highlighted visual rhythm and emotional storytelling through precise pacing and ambient audio.",
        "featured": False,
        "display_order": 4
    },
    {
        "title": "Apex Brand Identity — 3D Logo Reveal",
        "slug": "apex-brand-identity-3d-logo-reveal",
        "category": "Motion Graphics",
        "short_description": "Sleek dark-mode 3D logo reveal and motion stings for modern digital brand launch.",
        "full_description": "A luxury brand logo animation project featuring gold/metallic bevel reflections, custom light sweeps, and smooth camera rotations in 3D space in After Effects.",
        "creative_approach": "Elegance meets tech precision. Uses minimal dark geometry with glowing light reflections.",
        "editing_techniques": "3D layer displacement, bevel alpha shaders, custom light sweep keyframing, motion blur, optical glare buildup.",
        "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        "preview_video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        "software": "Adobe After Effects, Adobe Illustrator, Adobe Photoshop",
        "year": "2026",
        "role": "Motion Graphics Artist",
        "project_outcome": "Delivered broadcast-ready logo animation stingers with high visual impact.",
        "featured": False,
        "display_order": 5
    },
    {
        "title": "Street Culture — Dynamic Fashion Edit",
        "slug": "street-culture-dynamic-fashion-edit",
        "category": "Short-form",
        "short_description": "Rhythmic fashion reel featuring paper-cut stop-motion, glitch transitions, and stylized text pop-ups.",
        "full_description": "An edgy streetwear promotional reel utilizing rotoscoping frame-by-frame, stop-motion texture overlays, and vinyl scratch SFX to match beat breaks.",
        "creative_approach": "Raw, urban texture with fast-paced cuts. Blends paper tear assets with high contrast street videography.",
        "editing_techniques": "Roto Brush 2.0 object isolation, paper cutout overlay animation, glitch transitions, custom posterize time effect.",
        "thumbnail": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "preview_video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "software": "Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop",
        "year": "2026",
        "role": "Video Editor & Rotoscope Artist",
        "project_outcome": "Crafted trendy stop-motion aesthetic tailored for Instagram aesthetic trends.",
        "featured": False,
        "display_order": 6
    }
]

def seed_database(db: Session):
    existing_count = db.query(Project).count()
    if existing_count == 0:
        print("Seeding database with sample project portfolio items...")
        for project_data in SAMPLE_PROJECTS:
            project = Project(**project_data)
            db.add(project)
        db.commit()
        print("Successfully seeded portfolio projects!")
    else:
        print(f"Database already contains {existing_count} projects. Skipping seed.")
